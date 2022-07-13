import React, { ElementType } from 'react';
import styled from 'styled-components';

import {
    googleMarker
} from '@user/images';

import {
    Button
} from '@user/components';

interface LabelProps{
    color?: string,
    fontSize?: string,
    fontWeight?: number | string,
    marginTop?: string,
    children: string | React.ReactNode
}

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

const Label = styled.div<LabelProps>`
    color: ${({color}) => color};
    margin-top: ${({marginTop}) => marginTop ?? 0};
    font-size: ${({fontSize}) => fontSize ?? "1rem" };
    font-weight: ${({fontWeight}) => fontWeight ?? 400};
    display: flex;
    align-items: center;
`

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