import { gql } from "apollo-server-express";
import { Resolvers } from "src/generated/graphql";

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
  }
  extend type Query {
    me: User
    users: [User!]!
  }
`;
export const resolvers: Resolvers = {
  Query: {
    me: (_parent, _args, { token }) => ({ name: "yusuke", id: "1234" }),
    users: parent => [{ name: "yusuke", id: "1234" }]
  }
};
