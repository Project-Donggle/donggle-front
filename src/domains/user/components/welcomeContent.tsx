import React, { ElementType } from 'react';
import styled from 'styled-components';

import {
    googleMarker
} from '@user/images';

import {
    Button,
    Label
} from '@user/components';



const WelcomeContent: React.FC = (): JSX.Element => {
    return (
        <>
            <Label 
                color="#000000"
                fontSize="3.3rem"
                fontWeight={700}
            >우리동네</Label>
            <Label 
                color="#5F0080"
                fontSize="3.3rem"
                fontWeight={700}
            >부산광역시</Label>
            <Label 
                color="#5F0080"
                fontSize="3.3rem"
                fontWeight={700}
            >여기쯤
                <Marker src={googleMarker}/>
            </Label>
            <Label
                marginTop="30px"
            >{"동네친구들과 따뜻한 인사를 나누어 보세요~ :)"}</Label>
            <ButtonBlock>
                <Button
                    backgroundColor="#F3F3F3"
                    width="150px"
                >위치변경</Button>
                <Button
                    backgroundColor="#5F0080"
                    width="150px"
                    color="#FFFFFF"
                >로그인</Button>
            </ButtonBlock>
            
        </>
    )
}

const Marker = styled.img`
    width: 52px;
    height: 52px;
`

const ButtonBlock = styled.div`
    margin-top: 30px;
    display: flex;
    gap: 16px;
`

export default WelcomeContent;