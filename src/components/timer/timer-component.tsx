import { useEffect, useState } from "react";

import { getPadTimeStamp } from "utils/get-pad-time-stamp";

export const Timer = () => {
	const [timeLeft, setTimeLeft] = useState<number>(0);
	const minutes = getPadTimeStamp(Math.floor(timeLeft / 60));
	const seconds = getPadTimeStamp(timeLeft - +minutes * 60);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTimeLeft(timeLeft => timeLeft + 1);
		}, 1000);

		if (timeLeft === 360) clearInterval(intervalId);

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
