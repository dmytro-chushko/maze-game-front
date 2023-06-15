import { getPadTimeStamp } from "./get-pad-time-stamp";

export const getTime = (): string => {
	const currentTime = new Date();
	const hours = getPadTimeStamp(currentTime.getHours());
	const minutes = getPadTimeStamp(currentTime.getMinutes());
	const seconds = getPadTimeStamp(currentTime.getSeconds());

	return `${hours}:${minutes}:${seconds}`;
};
