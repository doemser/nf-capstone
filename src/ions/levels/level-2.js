import { createLevel } from "./levels";
import { colors } from "../styles/color-palette";

createLevel({
	player: {
		position: [-10, 2, 0],
		args: [0.5, 64, 64],
		color: colors.playerColor,
		speed: 0.15,
		rotateUp: [0, 0, -0.785398],
		rotateDown: [0, 0, -2.35619],
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
			color: colors.primaryDark,
			rotation: 0,
			metalness: "0.3",
			roughness: "0.5",
			id: "d45885a7-f04f-4a48-9c90-ad2663f50f27",
		},
		{
			position: [0, 16.875, 0],
			args: [30, 3, 3],
			color: colors.primaryDark,
			rotation: 0,
			metalness: "0.3",
			roughness: "0.5",
			id: "01eb0658-44f2-4e23-afe9-9189e4303c07",
		},
		{
			position: [-13.5, 6, 0],
			args: [3, 19, 3],
			color: colors.primaryDark,
			rotation: 0,
			metalness: "0.3",
			roughness: "0.5",
			id: "a1f7e839-e302-49ec-9fe1-5dce89dfc391",
		},
		{
			position: [13.5, 6, 0],
			args: [3, 19, 3],
			color: colors.primaryDark,
			rotation: 0,
			metalness: "0.3",
			roughness: "0.5",
			id: "e9076a87-36c5-48a7-874a-b49e85524322",
		},
		{
			position: [0, 7.5, -3],
			args: [30, 20, 3],
			color: colors.primaryMain,
			rotation: 0,
			metalness: "0.3",
			roughness: "0.5",
			id: "dbd4b9cf-5121-4e59-abe8-f20bec55aa48",
		},
		{
			position: [0, 3, -1],
			args: [5, 7, 3],
			color: "orange",
			rotation: 0,
			metalness: "0.3",
			roughness: "0.5",
			id: "f4952493-490e-480d-822a-c07cbaa249a5",
		},
		{
			position: [4, 12, 1],
			args: [5, 6, 3],
			color: "orange",
			rotation: [0, 2, 10],
			metalness: "0.3",
			roughness: "0.5",
			id: "f4952493-490e-480d-822a-c07cbaa249a567",
		},
	],
});
