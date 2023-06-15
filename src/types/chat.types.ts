export interface ITextMessage {
	message: string;
}

export interface ISocketMessage {
	chatId: string;
	message: string;
}

export interface IMessage {
	sender: string;
	message: string;
	timestamp: string;
}
export interface IRecivedMessage {
	sender: string;
	message: string;
}
