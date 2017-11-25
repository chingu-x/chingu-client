import gql from "graphql-tag";

const updateUser = gql`
  mutation updateUser(
    $first_name: String!
    $last_name: String!
    $bio: String
    $github_url: String!
    $twitter_url: String
    $linkedin_url: String
    $portfolio_url: String
    $website_url: String
    $blog_url: String
  ) {
    updateUser(
      user_data: {
        first_name: $first_name
        last_name: $last_name
        bio: $bio
        github_url: $github_url
        twitter_url: $twitter_url
        linkedin_url: $linkedin_url
        portfolio_url: $portfolio_url
        website_url: $website_url
        blog_url: $blog_url
      }
    ) {
      first_name
    }
  }
`;

export default updateUser;
