import { useEffect, useState } from "react";
import { TIMER } from "utils/consts";

import { getPadTimeStamp } from "utils/get-pad-time-stamp";

export const Timer = () => {
	const [timeLeft, setTimeLeft] = useState<number>(0);
	const minutes = Math.floor(timeLeft / TIMER.SECONDS_IN_MINUTE);
	const seconds = getPadTimeStamp(timeLeft - +minutes * TIMER.SECONDS_IN_MINUTE);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTimeLeft(timeLeft => timeLeft + 1);
		}, TIMER.STEP);

		if (timeLeft === TIMER.FULL_TIME) clearInterval(intervalId);

		return () => {
			clearInterval(intervalId);
		};
	}, [timeLeft]);

	return (
		<span>
			{minutes} minutes {seconds} seconds
		</span>
	);
};
