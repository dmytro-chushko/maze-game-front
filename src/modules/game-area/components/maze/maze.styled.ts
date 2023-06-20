import styled from "styled-components";

import { COLOR } from "styles";
import { Container } from "styles/ui";

export const MazeContainer = styled(Container.SubContent)`
	padding: 0.25rem 0 0 0.25rem;

	background-color: ${COLOR.BGC.PRIMARY};
	overflow: hidden;
`;
