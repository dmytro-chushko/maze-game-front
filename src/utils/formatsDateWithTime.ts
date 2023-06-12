import { modifyMonth } from "./formatsMonth";

export const formatsDateWithTime = (inputDate?: string): string => {
	const date = inputDate ? new Date(inputDate) : new Date();
	const day = modifyDateOrTime(date.getDate());
	const month = date.getMonth() + 1;
	const dayInterval = date.getHours() < 12 ? "AM" : "PM";
	const time = `${modifyHours(modifyDateOrTime(date.getHours()))}:${modifyDateOrTime(
		date.getMinutes(),
	)} ${dayInterval}`;

	function modifyDateOrTime(value: number): string {
		return value < 10 ? `0${value}` : `${value}`;
	}

	function modifyHours(value: string): string {
		return +value > 12 ? `${+value - 12}` : `${value}`;
	}

	return `${day}/${modifyMonth(month)}/${date.getFullYear().toString().slice(2)} ${time}`;
};
