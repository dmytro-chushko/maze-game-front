import styled from "styled-components";
import { COLOR, COMMON } from "styles";

interface IBackdrop {
	isOpen: boolean;
}

export const Backdrop = styled.div<IBackdrop>`
	position: absolute;
	top: 0;

	display: flex;
	align-items: center;
	justify-content: center;

	width: 100vw;
	height: 100vh;

	background-color: ${COLOR.BGC.MODAL};
	pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
	opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
	backdrop-filter: blur(10px);

	transition: ${COMMON.TRANSITION};
`;
