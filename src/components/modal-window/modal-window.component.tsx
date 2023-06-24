import { useMemo, useEffect } from "react";
import { createPortal } from "react-dom";

import { TypeSetState } from "types/set-state.types";

import * as Styled from "./modal-window.styled";

interface IModalWindow {
	isOpen: boolean;
	onClose: TypeSetState<boolean>;
	children: React.ReactNode;
}

const modalRootElement = document.querySelector("#modal");

export const ModalWindow = ({ isOpen, onClose, children }: IModalWindow) => {
	const element = useMemo(() => document.createElement("div"), []);

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if ((e.target as HTMLDivElement).dataset.backdrop) onClose(false);
	};

	useEffect(() => {
		modalRootElement?.appendChild(element);

		return () => {
			modalRootElement?.removeChild(element);
		};
	}, [element]);

	return createPortal(
		<Styled.Backdrop isOpen={isOpen} onClick={handleClick} data-backdrop={true}>
			{children}
		</Styled.Backdrop>,
		element,
	);
};
