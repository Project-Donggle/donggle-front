import React from 'react';
import styled from 'styled-components';

interface LabelProps{
    color?: string,
    fontSize?: string,
    fontWeight?: number | string,
    marginTop?: string,
    children: string | React.ReactNode
}

const Label: React.FC<LabelProps> = ({
    color = "#FFFFFF",
    marginTop = "0",
    fontSize = "1rem",
    fontWeight = "400",
    children
}): JSX.Element => {
    return <StyledLabel
        color={color}
        marginTop={marginTop}
        fontSize={fontSize}
        fontWeight={fontWeight}
    >
        {children}
    </StyledLabel>
}

const StyledLabel = styled.div<LabelProps>`
    color: ${({color}) => color};
    margin-top: ${({marginTop}) => marginTop};
    font-size: ${({fontSize}) => fontSize};
    font-weight: ${({fontWeight}) => fontWeight};
    display: flex;
    align-items: center;
`

export default Label;