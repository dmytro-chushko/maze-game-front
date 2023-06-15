import styled from "styled-components";
import { COMMON, FONT } from "styles";
import { Container } from "styles/ui";

export const ScreenContainer = styled(Container.SubContent)`
	width: 100%;
	height: 8rem;
	padding-top: 0.25rem;
	padding-bottom: 0.1rem;
	padding-right: 0.3rem;
`;

export const MessagesContainer = styled.div`
	display: flex;
	flex-direction: column-reverse;

	height: 100%;

	overflow-y: auto;
	scrollbar-width: thin;
	scrollbar-color: transparent transparent;

	::-webkit-scrollbar {
		width: 0.2rem;
	}

	::-webkit-scrollbar-track {
		background: transparent;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 4px;
		opacity: 0;

		transition: ${COMMON.TRANSITION};
	}

	:hover::-webkit-scrollbar-thumb {
		background-color: rgba(0, 0, 0, 0.3);
		opacity: 1;
	}
`;

export const MessageContainer = styled.div`
	display: flex;
	align-items: baseline;
	gap: 0.2rem;
`;

export const TimeStamp = styled.span`
	margin-right: 0.5rem;

	font-size: ${FONT.SIZE.MEDIUM};
	font-weight: ${FONT.WEIGHT.MEDIUM};

	color: ${FONT.COLOR.SECONDARY};
`;

export const Sender = styled.span`
	font-size: ${FONT.SIZE.LARGE};
	font-weight: ${FONT.WEIGHT.BOLD};

	color: ${FONT.COLOR.ACCENT};
`;

export const Message = styled.span`
	color: ${FONT.COLOR.SECONDARY};
`;
