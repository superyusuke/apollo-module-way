import { gql } from "apollo-server-express";
import { Resolvers } from "src/generated/graphql";

export const typeDefs = gql`
  type Music {
    name: String!
    player: [String!]!
  }
  extend type Query {
    myMusic: Music
    myMusics: [Music]!
  }
`;

export const resolvers: Resolvers = {
  Query: {
    myMusic: (_parent, _args, { token }) => ({
      name: "music name",
      player: ["yusuke"]
    }),
    myMusics: parent => [
      {
        name: "music name 1",
        player: ["yusuke"]
      },
      {
        name: "music name 2",
        player: ["yusuke"]
      }
    ]
  }
};
