export type Device = {
	name: string;
	width: number;
	height: number;
	scale: number;
	inset: string;
	radius?: string;
};

export const devices = [
	{
		name: "phone-portrait",
		width: 393,
		height: 852,
		scale: 0.5,
		inset: "-9%",
		radius: "64px",
	},
	{
		name: "phone-landscape",
		width: 852,
		height: 393,
		scale: 0.5,
		inset: "-9%",
		radius: "64px",
	},
	{
		name: "tablet-portrait",
		width: 834,
		height: 1194,
		scale: 0.35,
		inset: "-4% -6%",
	},
	{
		name: "tablet-landscape",
		width: 1194,
		height: 834,
		scale: 0.35,
		inset: "-6% -4%",
	},
	{
		name: "laptop",
		width: 1512,
		height: 982,
		scale: 0.32,
		inset: "-2% -11% -12%",
	},
	{
		name: "desktop",
		width: 2560,
		height: 1440,
		scale: 0.23,
		inset: "-4% -3% -39%",
	},
] as const satisfies Device[];

export type DeviceName = (typeof devices)[number]["name"];
