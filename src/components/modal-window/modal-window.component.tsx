import { useMemo, useEffect } from "react";
import { createPortal } from "react-dom";
import { ContentWindow } from "./content-window";
import { TypeSetState } from "types/set-state.types";

import * as Styled from "./modal-window.styled";

interface IModalWindow {
	isOpen: boolean;
	onClose: TypeSetState<boolean>;
}

const modalRootElement = document.querySelector("#modal");

export const ModalWindow = ({ isOpen, onClose }: IModalWindow) => {
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
			<ContentWindow onClose={onClose} />
		</Styled.Backdrop>,
		element,
	);
};
