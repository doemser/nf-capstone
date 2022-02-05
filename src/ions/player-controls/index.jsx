import useStore from "../store";
import { useEffect } from "react";

const PlayerControls = ({ moveUp }) => {
	useEffect(() => {
		const changeMove = useStore.getState().changeMove;

		const handleKeyUp = ({ code }) => {
			if (code === "Space") {
				changeMove(true);
			}
		};
		const handleKeyDown = ({ code }) => {
			if (code === "Space") {
				changeMove(false);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, [moveUp]);

	return null;
};

export default PlayerControls;
