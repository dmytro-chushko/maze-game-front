import { IUserName } from "types/intro.types";
import * as yup from "yup";

export const userNameSchema: yup.ObjectSchema<IUserName> = yup.object({
  name: yup.string().required(),
});
