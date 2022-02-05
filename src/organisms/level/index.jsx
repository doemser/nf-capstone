import React from "react";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import Player from "../../atoms/player";
import levels from "../../ions/levels";
import Lights from "../../molecules/lights";
import Map from "../../molecules/map";
import Goal from "../../atoms/goal";
import PlayerControls from "../../ions/player-controls";
import useStore from "../../ions/store";

const Level = ({ level }) => {
	const currentLevel = levels[Number.parseInt(level)];
	const moveUp = useStore(state => state.moveUp);

	return (
		<group>
			<Lights />
			<OrbitControls />
			<Physics>
				<Map map={currentLevel.map} />
				<PlayerControls moveUp={moveUp} />
				<Player moveUp={moveUp} {...currentLevel.player} />
				<Goal {...currentLevel.goal} />
			</Physics>
		</group>
	);
};

export default Level;
