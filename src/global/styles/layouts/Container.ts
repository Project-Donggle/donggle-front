import styled from "styled-components";

export const Container = styled.div<{
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  border?: string;
  borderRadius?: string;
  backgroundColor?: string;
  minHegith?: string;
  maxWidth?: string;
  flex?: string;
  overflow?: string;
  position?: string;
}>`
  overflow: ${(props) => props.overflow || "hidden"};
  box-sizing: border-box;
  background-color: ${(props) => props.backgroundColor || "white"};
  border: ${(props) => props.border || ""};
  border-radius: ${(props) => props.borderRadius || "0px"};
  padding: ${(props) => props.padding || "0px"};
  margin: ${(props) => props.margin || "0px"};
  width: ${(props) => props.width || "max-content"};
  min-height: ${(props) => props.minHegith && props.minHegith};
  height: ${(props) => props.height || "max-content"};
  max-width: ${(props) => props.maxWidth || ""};
  flex: ${(props) => props.flex || ""};
  position:${props => props.position || "inherit"}
`;

export const ImageContainer = styled(Container)<{ backgroundImage?: string }>`
  background-image: ${(props) => `url(${props.backgroundImage})` || ""};
  background-size: contain;
  background-repeat: no-repeat;
`;
