import React from 'react';
import styled from 'styled-components';

interface InputProps {
    width?: string
    height?: string
    type?: string
    disabled?: boolean
    placeholder?: string
}

const Input: React.FC<InputProps>= ({
    width = "200px",
    height = "50px",
    type = "text",
    disabled = false,
    placeholder = ""
}): JSX.Element => {
    return <InputElement
        width={width}
        height={height}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
    />;
}

const InputElement = styled.input`
    all: unset;
    width: ${({width}) => `calc(${width} - 20px)`};
    height: ${({height}) => height};
    border-radius: 10px;
    background-color: #FFFFFF;
    margin-top: 30px;
    font-size: 1.25rem;
    padding-left: 20px;
`

export default Input;