import React from 'react';
import styled from 'styled-components';

const LayoutMainForm = styled.div`
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    padding-top: 60px;
    background-color: #ffffff;
    justify-content: center;
`

const LayoutMain: React.FC = (): JSX.Element => {
    return (
        <LayoutMainForm>

        </LayoutMainForm>
    )
}

export default LayoutMain;