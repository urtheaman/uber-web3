import createSchema from "part:@sanity/base/schema-creator";
import { userSchema } from "./userSchema";
import { ridesSchema } from "./ridesSchema";
import { tripsSchema } from "./tripsSchema";
import schemaTypes from "all:part:@sanity/base/schema-type";

export default createSchema({
  name: "default",

  types: schemaTypes.concat([userSchema, ridesSchema, tripsSchema]),
});
