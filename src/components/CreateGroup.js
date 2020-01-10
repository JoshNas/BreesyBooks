import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { Header, Input, Segment } from 'semantic-ui-react';

export class NewGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: ''
    }
  }
  handleChange = (event) => {
    let change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const NewGroup = `mutation NewGroup($name: String!) {
      createGroup(input: {name: $name}) {
        id
        name
      }
    }`;

    const result = await API.graphql(graphqlOperation(NewGroup, { name: this.state.groupName }));
    console.info(`Created group with id ${result.data.createGroup.id}`);
  }

  render() {
    return (
      <Segment>
        <Header as='h3'>Create a new Group</Header>
         <Input
          type='text'
          placeholder='New Group Name'
          icon='plus'
          iconPosition='left'
          action={{ content: 'Create', onClick: this.handleSubmit }}
          name='groupName'
          value={this.state.groupName}
          onChange={this.handleChange}
         />
      </Segment>
    )
  }


}
