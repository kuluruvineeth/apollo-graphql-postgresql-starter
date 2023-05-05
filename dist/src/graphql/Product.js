"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductMutation = exports.ProductsQuery = exports.ProductType = void 0;
const nexus_1 = require("nexus");
exports.ProductType = (0, nexus_1.objectType)({
    name: "Product",
    definition(t) {
        t.nonNull.int("id"), t.nonNull.string("name"), t.nonNull.float("price");
    },
});
let products = [
    {
        id: 1,
        name: "Product 1",
        price: 15.99,
    },
    {
        id: 2,
        name: "Product 2",
        price: 10.99,
    },
];
exports.ProductsQuery = (0, nexus_1.extendType)({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("getAllProducts", {
            type: "Product",
            resolve(_parent, _args, _context, _info) {
                return products;
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
            resolve(_parent, args, _context, _info) {
                const { name, price } = args;
                const product = {
                    id: products.length + 1,
                    name,
                    price,
                };
                products.push(product);
                return product;
            },
        });
    },
});
//# sourceMappingURL=Product.js.map