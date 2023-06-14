import * as yup from "yup";

import { ITextMessage } from "types/chat.types";

export const messageSchema: yup.ObjectSchema<ITextMessage> = yup.object({
	message: yup.string().max(30, "Maximum 30 characters").required(),
});
