import gql from "graphql-tag";

const userDataQuery = gql`
  query userData {
    user {
      id
      first_name
      last_name
      bio
      github_url
      twitter_url
      linkedin_url
      portfolio_url
      website_url
      blog_url
    }
  }
`;

export default userDataQuery;
