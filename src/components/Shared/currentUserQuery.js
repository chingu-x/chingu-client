import gql from "graphql-tag";

const currentUserQuery = gql`
  query currentUser {
    user {
      first_name
      last_name
      id
    }
  }
`;

export default currentUserQuery;
