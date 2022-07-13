import React from 'react';
import styled from 'styled-components';

import PageMain from '@UI/pages/pageMain';


const LayoutMain: React.FC = (): JSX.Element => {
    return (
        <LayoutMainForm>
            <PageMain />
        </LayoutMainForm>
    )
}

const LayoutMainForm = styled.div`
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 60px 0;
    background-color: #F3F3F3;
    justify-content: center;
`

export default LayoutMain;