import { ApolloServer } from "apollo-server";

import * as commonModule from "src/modules/common";
import * as usersModule from "src/modules/users";

const isTest = process.env.NODE_ENV === "test";

export const createApolloServer = () => {
  return new ApolloServer({
    modules: [commonModule, usersModule],
    context: ({ req }) => {
      // test の場合は token を .env から参照する
      // 普通にサーバーを立てた場合にはフロントから送られてきたものだけを使う
      return {
        token: isTest
          ? process.env.DEV_BEARER_TOKEN
          : req.headers.authorization || ""
      };
    }
  });
};

const server = createApolloServer();

if (process.env.NODE_ENV !== "test") {
  server.listen({ port: 8080 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}

export default server;
