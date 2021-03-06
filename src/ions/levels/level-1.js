import { createLevel } from "./levels";
import { colors } from "../styles/color-palette";

createLevel({
	levelNumber: {
		position: [-9, 1, -1.3],
		color: colors.black,
		size: 2,
	},
	player: {
		position: [-10, 4, 0],
		args: [0.5, 64, 64],
		color: colors.playerColor,
		speed: 0.15,
		metalness: "0.5",
		roughness: "0",
	},
	goal: {
		position: [11.75, 2, 0],
		args: [0.5, 2, 2],
		color: colors.goalColor,
		metalness: "0.5",
		roughness: "0",
	},
	map: [
		{
			position: [0, -2.5, 0],
			args: [30, 3, 3],
			rotation: [0, 0, 0],
			axis: [null, null, null],
			color: colors.primaryDark,
			metalness: "0.3",
			roughness: "0.5",
			id: "33bf2423-7ebc-45bd-ac33-d61983d805b7",
		},
		{
			position: [0, 16.875, 0],
			args: [30, 3, 3],
			rotation: [0, 0, 0],
			axis: [null, null, null],
			color: colors.primaryDark,
			metalness: "0.3",
			roughness: "0.5",
			id: "8978d10b-a6af-41dc-b42d-ef5d9fdcf27f",
		},
		{
			position: [-13.5, 6, 0],
			args: [3, 19, 3],
			rotation: [0, 0, 0],
			axis: [null, null, null],
			color: colors.primaryDark,
			metalness: "0.3",
			roughness: "0.5",
			id: "6e2225a2-4ba8-4baf-8feb-a293edbdeedb",
		},
		{
			position: [13.5, 6, 0],
			args: [3, 19, 3],
			rotation: [0, 0, 0],
			axis: [null, null, null],
			color: colors.primaryDark,
			metalness: "0.3",
			roughness: "0.5",
			id: "0cfe50e9-4146-4130-b4a2-16baa1668b8e",
		},
		{
			position: [0, 7.5, -3],
			args: [30, 20, 3],
			rotation: [0, 0, 0],
			axis: [null, null, null],
			color: colors.primaryMain,
			metalness: "0.3",
			roughness: "0.5",
			id: "4358e2f6-999f-403f-9e03-309ba99131d5",
		},
		{
			position: [0, 5, 0],
			args: [8, 5, 3],
			rotation: [0, 0, 0],
			axis: [null, null, null],
			color: colors.accentColorOne,
			metalness: "0.3",
			roughness: "0.5",
			id: "d28879e1-6cdb-4911-88f1-e281d5da1452",
		},
	],
});
