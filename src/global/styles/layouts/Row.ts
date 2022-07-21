import styled from "styled-components";

const Row = styled.div<{
  mainAxis?: string;
  crossAxis?: string;
  width?: string;
  margin?: string;
  padding?: string;
  height?: string;
}>`
  position: absoulte;
  flex-direction: row;
  display: flex;
  box-sizing: border-box;
  height: ${(props) => props.height || "max-content"};
  width: ${(props) => props.width || "100%"};
  margin: ${(props) => props.margin || "0px"};
  padding: ${(props) => props.padding || "0px"};
  justify-content: ${(props) => props.mainAxis || "flex-start"};
  align-items: ${(props) => props.crossAxis || "flex-start"};
  background-color: transparent;
`;

export default Row;
