import { Socket, io } from "socket.io-client";

export const socket: Socket = io(process.env.REACT_APP_BASE_URL || "");
