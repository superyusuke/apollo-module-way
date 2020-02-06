import { gql } from "apollo-server-express";
import { Resolvers } from "src/generated/graphql";

export const typeDefs = gql`
  type Query {
    _dummy: Boolean
  }
  type Mutation {
    _dummy: Boolean
  }
  type Subscription {
    _dummy: Boolean
  }
`;
export const resolvers: Resolvers = {};
