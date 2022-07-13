import React from 'react';
import styled from 'styled-components';

interface Image {
    src: string
};

const WelcomeImageContainer = styled.div`
    width: 379px;
    height: 668px;
    margin-left: 130px;
    border-radius: 35px;
`

const WelcomeImageSource = styled.img`
    width: 100%;
    
`

const WelcomeImage: React.FC<Image> = ({ src }): JSX.Element => {
    return (
        <WelcomeImageContainer>
            <WelcomeImageSource 
                src={src}
            />
        </WelcomeImageContainer>
    )
}

export default WelcomeImage;