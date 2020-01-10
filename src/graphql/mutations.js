/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGroup = `mutation CreateGroup(
  $input: CreateGroupInput!
  $condition: ModelGroupConditionInput
) {
  createGroup(input: $input, condition: $condition) {
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
export const updateGroup = `mutation UpdateGroup(
  $input: UpdateGroupInput!
  $condition: ModelGroupConditionInput
) {
  updateGroup(input: $input, condition: $condition) {
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
export const deleteGroup = `mutation DeleteGroup(
  $input: DeleteGroupInput!
  $condition: ModelGroupConditionInput
) {
  deleteGroup(input: $input, condition: $condition) {
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
export const createPost = `mutation CreatePost(
  $input: CreatePostInput!
  $condition: ModelPostConditionInput
) {
  createPost(input: $input, condition: $condition) {
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
export const updatePost = `mutation UpdatePost(
  $input: UpdatePostInput!
  $condition: ModelPostConditionInput
) {
  updatePost(input: $input, condition: $condition) {
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
export const deletePost = `mutation DeletePost(
  $input: DeletePostInput!
  $condition: ModelPostConditionInput
) {
  deletePost(input: $input, condition: $condition) {
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
export const createUser = `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
export const updateUser = `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
export const deleteUser = `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
export const createBook = `mutation CreateBook(
  $input: CreateBookInput!
  $condition: ModelBookConditionInput
) {
  createBook(input: $input, condition: $condition) {
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
export const updateBook = `mutation UpdateBook(
  $input: UpdateBookInput!
  $condition: ModelBookConditionInput
) {
  updateBook(input: $input, condition: $condition) {
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
export const deleteBook = `mutation DeleteBook(
  $input: DeleteBookInput!
  $condition: ModelBookConditionInput
) {
  deleteBook(input: $input, condition: $condition) {
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
