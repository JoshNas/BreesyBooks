import React from 'react';
import { Connect } from 'aws-amplify-react';
import { graphqlOperation }  from 'aws-amplify';
import { Header, List, Segment } from 'semantic-ui-react';

function makeComparator(key, order='asc') {
  return (a, b) => {
    if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;

    const aVal = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
    const bVal = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (aVal > bVal) comparison = 1;
    if (aVal < bVal) comparison = -1;

    return order === 'desc' ? (comparison * -1) : comparison
  };
}

class MembersList extends React.Component {
  memberItems() {
        return this.props.members.sort(makeComparator('name')).map(member =>
            <li key={member.id}>
                {member.name}
            </li>);
    }

  render() {
    return (
      <Segment>
        <Header as='h3'>Members</Header>
        <List divided relaxed>
          {this.memberItems()}
        </List>
      </Segment>
    );
  }
}

const ListMembers = `query ListMembers {
    listMembers(limit: 9999) {
        items {
            id
            name
        }
    }
}`;

export class MemberListLoader extends React.Component {
  render() {
    return (
      <Connect query={graphqlOperation(ListMembers)}>
        {({ data, loading, errors }) => {
          if (loading) { return <div>Loading...</div>; }
          if (!data.listMembers) return;

          return <MembersList members={data.listMembers.items} />;
        }}
      </Connect>
    );
  }
}
