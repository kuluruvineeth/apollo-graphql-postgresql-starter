"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductMutation = exports.ProductsQuery = exports.ProductType = void 0;
const nexus_1 = require("nexus");
const Product_1 = require("../entities/Product");
const User_1 = require("../entities/User");
exports.ProductType = (0, nexus_1.objectType)({
    name: "Product",
    definition(t) {
        t.nonNull.int("id"),
            t.nonNull.string("name"),
            t.nonNull.float("price"),
            t.nonNull.int("creatorId"),
            t.field("createdBy", {
                type: "User",
                resolve(parent, _args, _context, _info) {
                    return User_1.User.findOne({ where: { id: parent.creatorId } });
                },
            });
    },
});
exports.ProductsQuery = (0, nexus_1.extendType)({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("getAllProducts", {
            type: "Product",
            resolve(_parent, _args, context, _info) {
                const { conn } = context;
                return conn.query(`select * from product`);
            },
        });
    },
});
exports.CreateProductMutation = (0, nexus_1.extendType)({
    type: "Mutation",
    definition(t) {
        t.nonNull.field("createProduct", {
            type: "Product",
            args: {
                name: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                price: (0, nexus_1.nonNull)((0, nexus_1.floatArg)()),
            },
            resolve(_parent, args, context, _info) {
                const { name, price } = args;
                const { userId } = context;
                if (!userId) {
                    throw new Error("Can't create product without logging in.");
                }
                return Product_1.Product.create({ name, price, creatorId: userId }).save();
            },
        });
    },
});
//# sourceMappingURL=Product.js.map