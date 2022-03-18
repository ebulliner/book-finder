import { gql } from '@apollo/client';

// query me
export const GET_ME = gql`
query Query {
  me {
    _id
    username
    email
    bookCount
    savedBooks {
      bookId
      authors
      description
      image
      title
      link
    }
  }
}
`;