import React from 'react';
import styled from 'styled-components';

interface Image {
    src: string
};

const IntroduceImageContainer = styled.div`
    width: 379px;
    height: 668px;
    border-radius: 35px;
`

const IntroduceImageSource = styled.img`
    width: 100%;
    
`

const IntroduceImage: React.FC<Image> = ({ src }): JSX.Element => {
    return (
        <IntroduceImageContainer>
            <IntroduceImageSource 
                src={src}
            />
        </IntroduceImageContainer>
    )
}

export default IntroduceImage;