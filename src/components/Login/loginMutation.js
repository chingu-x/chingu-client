import gql from "graphql-tag";

const loginMutation = gql`
  mutation userLogin($email: String!, $password: String!) {
    signInUser(email: $email, password: $password) {
      jwt
      user {
        id
      }
    }
  }
`;

export default loginMutation;
