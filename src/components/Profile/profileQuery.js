import gql from "graphql-tag";

const userQuery = gql`
  query userProfile($userId: ID!) {
    user(user_id: $userId) {
      first_name
      last_name
      bio
      github_url
      twitter_url
      linkedin_url
      blog_url
      portfolio_url
      projects {
        title
        description
        github_url
        project_url
        users {
          username
        }
      }
      cohorts {
        title
        users {
          id
        }
        teams {
          id
        }
      }
    }
  }
`;

export default userQuery;
