import { createLevel } from "./levels";
import { colors } from "../styles/color-palette";

createLevel({
	levelNumber: {
		position: [-9, 1, -1.3],
		color: colors.black,
		size: 2,
	},
	player: {
		position: [-10, 2, 0],
		args: [0.5, 64, 64],
		color: colors.playerColor,
		speed: 0.15,
		metalness: "0.5",
		roughness: "0",
	},
	goal: {
		position: [11.75, 8, 0],
		args: [0.5, 2, 2],
		color: colors.goalColor,
		metalness: "0.5",
		roughness: "0",
	},
	map: [
		{
			position: [0, -2.5, 0],
			args: [30, 3, 3],
			color: colors.primaryDark,
			metalness: "0.3",
			roughness: "0.5",
			id: "f8380418-f90c-4826-ad08-7bf5fb786b1c",
		},
		{
			position: [0, 16.875, 0],
			args: [30, 3, 3],
			color: colors.primaryDark,
			metalness: "0.3",
			roughness: "0.5",
			id: "2086b0e8-9928-46b3-92fb-e402632e6219",
		},
		{
			position: [-13.5, 6, 0],
			args: [3, 19, 3],
			color: colors.primaryDark,
			metalness: "0.3",
			roughness: "0.5",
			id: "a536fc41-93d8-4609-b7cb-51d132281ae6",
		},
		{
			position: [13.5, 6, 0],
			args: [3, 19, 3],
			color: colors.primaryDark,
			metalness: "0.3",
			roughness: "0.5",
			id: "35ee315d-6ad3-42b4-9c21-211de1053367",
		},
		{
			position: [0, 7.5, -3],
			args: [30, 20, 3],
			color: colors.primaryMain,
			metalness: "0.3",
			roughness: "0.5",
			id: "b67b5514-fd73-48b7-b600-93f1819f6628",
		},
	],
	rotating: [
		{
			position: [-6, 7, 0],
			args: [9, 2, 1],
			rotation: [0.04, 0.2, 0],
			axisRotate: [
				{ rotate: false, direction: 1 },
				{ rotate: false, direction: 1 },
				{ rotate: true, direction: 1 },
			],
			speed: 0.02,
			color: "#0fb9b1",
			metalness: "0.3",
			roughness: "0.5",
			id: "b22cfc2a-81f8-408a-823b-b48bc3dda6bd",
		},
		{
			position: [5, 7, 0],
			args: [9, 2, 1],
			rotation: [0, 0.02, 0.1],
			axisRotate: [
				{ rotate: false, direction: 1 },
				{ rotate: false, direction: 1 },
				{ rotate: true, direction: -1 },
			],
			speed: 0.02,
			color: "#0fb9b1",
			metalness: "0.3",
			roughness: "0.5",
			id: "2cc09a90-34e3-4a8a-bff1-37672aa8d13f",
		},
	],
});
