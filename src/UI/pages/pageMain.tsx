import React from 'react';
import styled from 'styled-components';

import {
  welcomeImage
} from '@user/images';

import {
  WelcomeImage,
  WelcomeContent,
} from '@user/components';



const PageMain: React.FC = ():JSX.Element => {
    return (
        <PageMainForm>
            <WelcomeImage src={welcomeImage}/>
            <ContentBlock>
              <WelcomeContent />
            </ContentBlock>
        </PageMainForm>
    )
}

const PageMainForm = styled.div`
    width: 1100px;
    display: flex;
    align-items: center;
    background-color: #FFFFFF;
    gap: 65px;
`

const ContentBlock = styled.div`
  display: flex;
  margin-top: -80px;
  flex-direction: column;
`

export default PageMain;