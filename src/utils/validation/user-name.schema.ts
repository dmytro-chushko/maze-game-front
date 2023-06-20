import * as yup from "yup";

import { IUserName } from "types/intro.types";

export const userNameSchema: yup.ObjectSchema<IUserName> = yup.object({
	name: yup.string().max(10, "Maximum 10 characters").required(),
});
