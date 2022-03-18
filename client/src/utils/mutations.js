import { gql } from '@apollo/client';
//login user
export const LOGIN_USER = gql `
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`
// add a new user
export const ADD_USER = gql `
    mutation addUser($username: String!, $email: String! $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                username
                _id
                email
            }
        }
    }
`
// save book
export const SAVE_BOOK = gql `
    mutation saveBook($book: savedBook) {
        saveBook(book: $book) {
            _id
            username
            bookCount
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`
// delete a book
export const REMOVE_BOOK = gql `
    mutation removeBook($bookId: ID!) {
        removeBook(bookId: $bookId) {
            _id
            username
            bookCount
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`