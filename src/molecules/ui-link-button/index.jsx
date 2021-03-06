import { colors } from "../../ions/styles/color-palette";
import React, { useEffect, useState } from "react";
import UiButtonText from "../../atoms/ui-button-text";
import useStore from "../../ions/store";

const UiLinkButton = ({ children, position, rotation, args, router, type, url }) => {
	const gameState = useStore.getState().gameState;
	const level = useStore.getState().level;
	const setOverallStats = useStore(state => state.setOverallStats);
	const setGameState = useStore.getState().setGameState;
	const resetMoves = useStore.getState().resetMoves;
	const [hovered, setHover] = useState(false);
	useEffect(() => {
		document.body.style.cursor = hovered ? "pointer" : "auto";
	}, [hovered]);
	return (
		<group position={position} rotation={rotation}>
			<mesh
				receiveShadow
				castShadow
				onPointerOver={() => {
					setHover(true);
				}}
				onPointerOut={() => {
					setHover(false);
				}}
				onClick={() => {
					setHover(false);
					switch (type) {
						case "intern":
							router.push(url);
							break;
						case "restart":
							router.push(url);
							setOverallStats("restart");
							break;
						case "nextlevel":
							router.push(`${url}/${parseInt(level) + 1}`);
							setGameState("waiting");
							setOverallStats(gameState);
							resetMoves();
							break;
						case "extern":
							window.open(url, `_blank`);
							break;
					}
				}}
			>
				<boxGeometry args={args} />
				<meshStandardMaterial
					color={hovered ? colors.primaryDark : colors.black}
					metalness="0.2"
					roughness="0"
				/>
			</mesh>
			<UiButtonText position={position} args={args} color={colors.primaryContrastText}>
				{children}
			</UiButtonText>
		</group>
	);
};

export default UiLinkButton;
