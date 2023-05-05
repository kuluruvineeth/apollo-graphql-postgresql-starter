import { ApolloServer } from "apollo-server";
import { schema } from "./schema";
import typeormConfig from "./typeorm.config";
import { Context } from "./types/Context";

const boot = async () => {
  const conn = await typeormConfig.initialize();
  const server = new ApolloServer({
    schema,
    context: (): Context => ({ conn }),
  });

  server.listen(5001).then(({ url }) => {
    console.log("listening on " + url);
  });
};

boot();
