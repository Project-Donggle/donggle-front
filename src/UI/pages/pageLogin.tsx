import React from 'react';
import styled from 'styled-components';

import { 
	logoLabel,
	naverIcon,
	googleIcon,
	kakaoIcon,
} from '@user/images';
import { 
	Button, 
	Input,
	Label
} from '@user/components';

const PageLogin: React.FC = (): JSX.Element => {
	return (
		<PageLoginContainer>
			<LoginForm>
				<LoginFormTitle>
					<img src={logoLabel}/>
					로그인
				</LoginFormTitle>
				<Input
					width="360px"
					height="60px"
					placeholder='아이디'
				/>
				<Input
					width="360px"
					height="60px"
					placeholder='패스워드'
					type='password'
				/>
				<FindPasswordAndSignupButtonBlock>
					<Button
						color="#5C5C5C"
						width="initail"
						height='initial'
					>비밀번호 설정</Button>
					<Button
						color="#5C5C5C"
						width="initail"
						height='initial'
					>회원가입</Button>
				</FindPasswordAndSignupButtonBlock>
				<Button
					backgroundColor="#5F0080"
					color="#FFFFFF"
					width="360px"
					borderRadius='10px'
					height='60px'
				>로그인</Button>
			</LoginForm>
			<Label
				color="#5F0080"
			>
				SNS계정으로 로그인/회원가입
			</Label>
			<SNSIconBlock>

			</SNSIconBlock>
		</PageLoginContainer>
	);
}

const LOGIN_FORM_WIDTH = 438;
const LOGIN_FORM_HEIGHt = 500;

const PageLoginContainer = styled.div`
    width: 1100px;
    display: flex;
		flex-direction: column;
    align-items: center;
    background-color: #FFFFFF;
		gap: 24px;
`

const LoginForm = styled.div`
	width: ${LOGIN_FORM_WIDTH-30*2}px;
	height: ${LOGIN_FORM_HEIGHt-60*2}px;
  background-color: #F7DEFF;
	border-radius: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 60px;
	padding: 60px 30px;
`

const LoginFormTitle = styled.div`
	display: flex;
	align-items: center;
	font-size: 1.75rem;
	font-weight: bold;
	gap: 12px;
`

const FindPasswordAndSignupButtonBlock = styled.div`
	display: flex;
	align-items: center;
	gap: 60px;
	margin-top: 20px;
	margin-bottom: 20px;
`

const SNSIconBlock = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

export default PageLogin;