import {
  Middleware,
  MiddlewareAPI,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const errorHandler: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      if ("data" in action.payload) {
        toast.error(action.payload.data.message);
      }
      if ("error" in action.payload) {
        toast.error("Chek your connection and try later");
      }
    }

    return next(action);
  };
