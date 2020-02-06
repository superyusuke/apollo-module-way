import { merge } from "lodash";
import { makeExecutableSchema, IResolvers } from "graphql-tools";
import * as commonModule from "src/modules/common";
import * as usersModule from "src/modules/users";

export const schema = makeExecutableSchema({
  resolvers: merge(
    {},
    commonModule.resolvers,
    usersModule.resolvers
  ) as IResolvers,
  typeDefs: [commonModule.typeDefs, usersModule.typeDefs]
});
