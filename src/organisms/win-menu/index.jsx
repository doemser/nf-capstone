import UiBackground from "../../atoms/ui-background";
import React, { useEffect } from "react";
import useStore from "../../ions/store";
import levels from "../../ions/levels";
import GameTitle from "../../molecules/game-title";
import WinNotification from "../../molecules/win-notifaction";
import CheatNotification from "../../molecules/cheat-notification";
import HighscoreNotification from "../../molecules/highscore-notification";
import UiNavigationButtons from "../../molecules/ui-navigation-buttons";

const WinMenu = ({ router }) => {
	const session = useStore(state => state.session);
	const overallStats = useStore(state => state.overallStats);

	useEffect(() => {
		if (overallStats.levels === levels.length && session) {
			const putHighscore = useStore.getState().putHighscore;
			const postHighscore = useStore.getState().postHighscore;
			const highscores = useStore.getState().highscores;
			const check = highscores.find(e => e.user === session.user.id);
			if (check && check.score < overallStats.score) {
				putHighscore(session.user, overallStats);
			} else if (!check) {
				postHighscore(session.user, overallStats);
			}
		}
	}, []);

	useEffect(() => {
		useStore.getState().getHighscores();
	}, []);

	return (
		<UiBackground>
			<GameTitle
				titlePosition={[0, 7, 0.3]}
				subTitlePosition={[0, 5.5, 0.3]}
				fontSize={2.5}
			/>

			{overallStats.levels === levels.length ? (
				<>
					<WinNotification />
					<HighscoreNotification session={session} router={router} />
				</>
			) : (
				<CheatNotification />
			)}
			<UiNavigationButtons router={router} />
		</UiBackground>
	);
};

export default WinMenu;
