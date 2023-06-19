import { MOVE } from "./consts";

export const isMovement = (movement: string): boolean => {
	const modifiedMovement = movement.toLocaleLowerCase().trim();

	switch (modifiedMovement) {
		case MOVE.UP:
			return true;
		case MOVE.DOWN:
			return true;
		case MOVE.LEFT:
			return true;
		case MOVE.RIGHT:
			return true;
		default:
			return false;
	}
};
