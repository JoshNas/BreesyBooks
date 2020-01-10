/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGroup = `subscription OnCreateGroup {
  onCreateGroup {
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
export const onUpdateGroup = `subscription OnUpdateGroup {
  onUpdateGroup {
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
export const onDeleteGroup = `subscription OnDeleteGroup {
  onDeleteGroup {
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
export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
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
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
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
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
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
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateBook = `subscription OnCreateBook {
  onCreateBook {
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
export const onUpdateBook = `subscription OnUpdateBook {
  onUpdateBook {
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
export const onDeleteBook = `subscription OnDeleteBook {
  onDeleteBook {
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
