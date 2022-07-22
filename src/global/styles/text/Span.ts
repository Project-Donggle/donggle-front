import styled from "styled-components";

export const Span = styled.span<{
  fontSize?: string;
  fontWeight?: string;
  margin?: string;
  fontColor?: string;
  lineHeight?: string;
}>`
  font-weight: ${(props) => props.fontWeight || "normal"};
  font-size: ${(props) => props.fontSize || "14px"};
  color: ${(props) => props.fontColor || "black"};
  margin: ${(props) => props.margin || "0px"};
  line-height: ${(props) => props.lineHeight && props.lineHeight};
`;
