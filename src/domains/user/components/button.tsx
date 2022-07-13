import React, { Children } from "react";
import styled, { StyledComponent } from "styled-components";

interface ButtonProps {
    width?: string
    height?: string
    fontWeight?: number | string
    borderRadius?: string
    backgroundColor: string
    color?: string
    children: string | React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
    width = "200px", 
    height = "50px", 
    fontWeight = 400, 
    borderRadius = "50px",
    backgroundColor,
    color = "#000000",
    children
}): JSX.Element => {

    return (
        <ButtonElement
            backgroundColor={backgroundColor}
            width={width}
            height={height}
            fontWeight={fontWeight}
            borderRadius={borderRadius}
            color={color}
        >
            {children}
        </ButtonElement>
    )
}

const ButtonElement = styled.button<ButtonProps>`
    all: unset;
    width: ${({width}) => width};
    height: ${({height}) => height};
    font-weight: ${({fontWeight}) => fontWeight};
    border-radius: ${({borderRadius}) => borderRadius};
    background-color: ${({backgroundColor}) => backgroundColor};
    color: ${({color}) => color};

    display: flex;
    justify-content: center;
    align-items: center;
`

export default Button;