export enum ROUTES {
	INTRO = "/",
	DASHBOARD = "/dashboard",
	GAME_ID = "/game/:id",
	GAME = "/game",
}

export enum QUERY_URL {
	GAME = "game",
}

export enum REDUCER_PATHES {
	GAME_API = "game-api",
	USER = "user",
	MESSAGES = "messages",
	GAME = "game",
}

export enum GAME_STATUS {
	PENDING = "pending",
	STARTED = "started",
	FINISHED = "finished",
}

export enum GAME_EVENT {
	CREATE_GAME = "create-game",
	JOIN_GAME = "join-game",
	START_GAME = "start-game",
	ABORT_GAME = "abort-game",
	UPDATE_GAME_LIST = "update-game-list",
	MOVE = "move",
	GIVE_UP = "give-up",
	LOST_CONNECTION = "lost-connection",
}

export enum CHAT_EVENT {
	JOIN = "join",
	LEAVE = "leave",
	MESSAGE = "message",
	LOST_CONNECTION = "lost-connection",
}

export enum MOVE {
	UP = "/up",
	DOWN = "/down",
	LEFT = "/left",
	RIGHT = "/right",
}

export enum MAZE_ELEMENT {
	WALL = "W",
}
