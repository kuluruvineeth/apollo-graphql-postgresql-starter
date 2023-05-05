"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsQuery = exports.ProductType = void 0;
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
//# sourceMappingURL=Product.js.map