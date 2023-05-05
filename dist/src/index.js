"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const schema_1 = require("./schema");
const typeorm_config_1 = __importDefault(require("./typeorm.config"));
const boot = async () => {
    const conn = await typeorm_config_1.default.initialize();
    const server = new apollo_server_1.ApolloServer({
        schema: schema_1.schema,
        context: () => ({ conn }),
    });
    server.listen(5001).then(({ url }) => {
        console.log("listening on " + url);
    });
};
boot();
//# sourceMappingURL=index.js.map