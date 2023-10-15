import styled from "styled-components";
import { pxToRem } from "../../styles/utils";

export const MeteoTestContainer = styled.div``;

export const MeteoTestContent = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${pxToRem(80)};
`;

export const MeteoTestWidgetWrapper = styled.div`
  width: ${pxToRem(800)};
`;
