import { objectType } from "nexus";
import { ObjectType } from "typeorm";

export const UserType = objectType({
  name: "User",
  definition(t) {
    t.nonNull.int("id"),
      t.nonNull.string("username"),
      t.nonNull.string("password"),
      t.nonNull.string("email");
  },
});
