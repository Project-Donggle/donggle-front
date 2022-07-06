import React from 'react';
import styled from 'styled-components';

import IntroduceImage from '@user/components/introduceImage';

const PageMainForm = styled.div`
    width: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 65px;
`

const PageMain: React.FC = ():JSX.Element => {
    return (
        <PageMainForm>
            <IntroduceImage src={""}/>

        </PageMainForm>
    )
}

export default PageMain;