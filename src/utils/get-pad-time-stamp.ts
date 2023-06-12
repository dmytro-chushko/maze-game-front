export const getPadTimeStamp = (time: number): string =>
  time.toString().padStart(2, "0");
