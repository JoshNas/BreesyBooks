/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGroup = `query GetGroup($id: ID!) {
  getGroup(id: $id) {
    id
    name
    owner
    members
    books
    posts {
      items {
        id
        writer
        title
        content
      }
      nextToken
    }
    photoBucket
  }
}
`;
export const listGroups = `query ListGroups(
  $filter: ModelGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      owner
      members
      books
      posts {
        nextToken
      }
      photoBucket
    }
    nextToken
  }
}
`;
export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    writer
    title
    content
    group {
      id
      name
      owner
      members
      books
      posts {
        nextToken
      }
      photoBucket
    }
  }
}
`;
export const listPosts = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      writer
      title
      content
      group {
        id
        name
        owner
        members
        books
        photoBucket
      }
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    books {
      items {
        id
        title
        author
        pageCount
        currentPage
        rating
      }
      nextToken
    }
    groups
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      books {
        nextToken
      }
      groups
    }
    nextToken
  }
}
`;
export const getBook = `query GetBook($id: ID!) {
  getBook(id: $id) {
    id
    reader {
      id
      name
      books {
        nextToken
      }
      groups
    }
    title
    author
    pageCount
    currentPage
    rating
  }
}
`;
export const listBooks = `query ListBooks(
  $filter: ModelBookFilterInput
  $limit: Int
  $nextToken: String
) {
  listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      reader {
        id
        name
        groups
      }
      title
      author
      pageCount
      currentPage
      rating
    }
    nextToken
  }
}
`;
