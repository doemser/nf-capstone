import styled from "@emotion/styled";

const StyledRoundButton = styled.div`
	display: flex;
	position: fixed;
	bottom: 25px;
	align-items: center;
	justify-content: center;
	width: 60px;
	height: 60px;
	transition: background 0.5s;
	border: none;
	border-radius: 50%;
	box-shadow: 0 0 20px 0 black;
	color: var(--primary-contrast-text);
	text-align: center;
	cursor: pointer;

	&:hover {
		background: var(--primary-light);
	}
	&:active {
		background: var(--primary-main);
	}

	${({ type }) => {
		switch (type) {
			case "reset":
				return `right: 25px; background: var(--player-color);`;
			case "control":
				return `left: 25px; background: var(--black);`;
		}
	}}
`;

export default StyledRoundButton;
