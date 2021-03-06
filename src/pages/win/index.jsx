import React, { useEffect } from "react";
import Head from "next/head";
import useStore from "../../ions/store";
import { lockScrollStyles } from "../../ions/styles";
import Layout from "../../organisms/layout";
import Lights from "../../molecules/lights";
import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import { useRouter } from "next/router";
import WinMenu from "../../organisms/win-menu";
import useTransientSession from "../../ions/hooks/use-transient-session";

const Page = () => {
	useTransientSession();
	useEffect(() => {
		useStore.getState().getHighscores();
	}, []);

	const router = useRouter();
	return (
		<Layout>
			{lockScrollStyles}
			<Head>
				<title key="title">DURCH</title>
				<meta
					key="description"
					name="description"
					content="a little game about shooting through"
				/>
			</Head>
			<Canvas shadows className="canvas" camera={{ position: [0, 0, 25] }}>
				<color attach="background" args={["black"]} />
				<Lights />
				<Physics>
					<WinMenu router={router} />
				</Physics>
			</Canvas>
		</Layout>
	);
};

export default Page;
