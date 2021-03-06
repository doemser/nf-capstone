import { css, Global } from "@emotion/react";
import React from "react";
import { colorPalette } from "./color-palette";

export const lockScroll = css`
	html,
	body {
		height: 100%;
		overflow: hidden;
	}
`;

export const globalStyle = css`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		user-select: none;
	}

	html {
		font-size: 16px;
	}

	body {
		display: flex;
		flex-direction: column;
		margin: 0;
		background: var(--black);
		color: var(--white);
		font-size: 1rem;
	}

	.MuiTableRow-root:nth-child(2n) {
		background: #1a1a1a;
	}

	#__next {
		display: contents;
	}
`;

export const globalFonts = css`
	/* roboto-300 - latin */
	@font-face {
		font-family: "Roboto";
		font-style: normal;
		font-weight: 300;
		src: local(""), url("/fonts/roboto/roboto-v29-latin-300.woff2") format("woff2"),
			/* Chrome 26+, Opera 23+, Firefox 39+ */ url("/fonts/roboto/roboto-v29-latin-300.woff")
				format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
	}

	@font-face {
		font-family: "Roboto";
		font-style: normal;
		font-weight: 400;
		src: local(""), url("/fonts/roboto/roboto-v29-latin-regular.woff2") format("woff2"),
			/* Chrome 26+, Opera 23+, Firefox 39+ */
				url("/fonts/roboto/roboto-v29-latin-regular.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
	}
`;

export const lockScrollStyles = <Global styles={lockScroll} />;
export const myFonts = <Global styles={globalFonts} />;
export const normalizeStyles = <Global styles={globalStyle} />;
export const paletteStyles = <Global styles={colorPalette} />;
