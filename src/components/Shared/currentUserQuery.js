import gql from "graphql-tag";

const currentUserQuery = gql`
  query currentUser {
    user {
      id
    }
  }
`;

export default currentUserQuery;
