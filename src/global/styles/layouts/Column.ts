import styled from "styled-components";

const Column = styled.div<{
  padding?: string;
  margin?: string;
  mainAxis?: string;
  crossAxis?: string;
  height?: string;
  width?: string;
}>`
  position: absoulte;
  width: ${(props) => props.width || ""};
  height: ${(props) => props.height || "100%"};
  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;
  padding: ${(props) => props.padding || "0px"};
  margin: ${(props) => props.margin || "0px"};
  justify-content: ${(props) => props.mainAxis || "flex-start"};
  align-items: ${(props) => props.crossAxis || "flex-start"};
`;

export default Column;
