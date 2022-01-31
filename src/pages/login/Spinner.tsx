import styled, { keyframes } from 'styled-components';
import { ContainerArticle } from './LoginContainer';
import axios, { Axios, AxiosResponse } from 'axios';
import { useEffect } from 'react';
import { naverClient, githubClient } from '../../utils/api/LoginAPI';

const Spinner = () => {

    // CORS 에러 해결해주는 주소
    const corsErrorKey: string = "http://cors-anywhere.herokuapp.com/";

    // 인가 코드 받아오기
    const tokenCode = new URL(window.location.href).searchParams.get('code');

    // SNS 연동 후 리다이렉트될 주소
    const signupAfterRedirect = "http://localhost:3000/signup"; // 회원가입 시
    const loginAfterRedirect = "http://localhost:3000/signup"; // 로그인 시

    // // 네이버 API 변수
    // const naverTokenResponseUri = `${corsErrorKey}https://nid.naver.com/oauth2.0/token`; // get, post 모두 허용
    // const naverProfileCheckUri = `${corsErrorKey}https://openapi.naver.com/v1/nid/verify?info=true`;

    // 깃허브 API 변수
    const githubTokenResponseUri = `${corsErrorKey}https://github.com/login/oauth/access_token`; // post만 허용
    const githubProfileCheckUri = `${corsErrorKey}https://api.github.com/user`; // GET만 허용

    // // // 구글 API 변수
    // const googleTokenResponseUri = `${corsErrorKey}https://oauth2.googleapis.com/token`; // post만 허용

    // API 호출 함수
    async function getLoginApi() {
        try {
            // 액세스 토큰, 리프레쉬 토큰, 유효기간 받아오기
            const tokenResponse = await axios({
                method: 'post',
                url: githubTokenResponseUri,
                params:
                {
                    client_id: githubClient.id,
                    client_secret: githubClient.key,
                    code: tokenCode,
                    redirect_uri: signupAfterRedirect,
                    grant_type: 'authorization_code',
                    state: "1",
                },
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            // .then(response => console.log('토큰 가져오기', response.data));

            // 네이버에서 주는 정보
            // const accessToken: LoginSpace.LoginToken = {
            //     access_token: tokenResponse.data.access_token,
            //     refresh_token: tokenResponse.data.refresh_token,
            //     expires_in: tokenResponse.data.expires_in,
            // }

            // 깃허브에서 주는 정보
            const accessToken: string = tokenResponse.data.access_token;

            // 유저가 접근 허용한 정보 확인하기

            // 네이버
            // profile/id 유저 아이디, profile/naveremail 유저 이메일
            // profile/name 유저 이름, profile/profileimage 유저 프로필사진
            // const isPermission = await axios({
            //     method: 'post',
            //     url: naverProfileCheckUri,
            //     headers: {
            //         "Authorization": `bearer ${accessToken}`,
            //     }
            // })
            // .then(response => console.log('허용정보', response));

            // 유저 프로필 받아오기

            // 네이버
            // id 유저 아이디, email 유저 이메일, name 유저 이름, profile_image 유저 프로필사진
            // const userProfileResponse = await axios({
            //     method: 'post',
            //     url: `${corsErrorKey}https://openapi.naver.com/v1/nid/me`,
            //     headers: {
            //         'Authorization': `Bearer ${encodeURIComponent(accessToken)}`,
            //     }
            // })
            // .then(response => console.log('유저 프로필', response));

            // 깃허브
            const userProfileResponse = await axios({
                method: 'get',
                url: githubProfileCheckUri,
                headers: {
                    'Authorization': `token ${encodeURIComponent(accessToken)}`,
                }
            })
            .then(response => console.log('유저 프로필', response));
            
            // const userProfile: LoginSpace.SignUpProps = {
            //     userEmail: userProfileResponse.data.response?.email,
            //     userName: userProfileResponse.data.response?.name,
            //     userJob: "",
            // }
            
        }
        catch (error) {
            console.log('error', error);
        }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { getLoginApi() }, [])
    
    return (
        <ContainerArticle>
            <FloatingCircles>
                <div className="f_circleG" id="frotateG_01"></div>
                <div className="f_circleG" id="frotateG_02"></div>
                <div className="f_circleG" id="frotateG_03"></div>
                <div className="f_circleG" id="frotateG_04"></div>
                <div className="f_circleG" id="frotateG_05"></div>
                <div className="f_circleG" id="frotateG_06"></div>
                <div className="f_circleG" id="frotateG_07"></div>
                <div className="f_circleG" id="frotateG_08"></div>
            </FloatingCircles>
        </ContainerArticle>
    )
}

export { Spinner };

// styled-components

const FadeKeyframes = keyframes`
	0% {
		background-color:rgb(0,0,0);
	}

	100% {
		background-color:rgb(255,255,255);
	}
`;

const FloatingCircles = styled.div`
    position:relative;
    width:208px;
    height:208px;
    margin:auto;
    transform:scale(0.6);

    & .f_circleG{
        position:absolute;
        background-color:rgb(255,255,255);
        height:37px;
        width:37px;
        border-radius:20px;
        animation-name: ${FadeKeyframes};
        animation-duration:1.2s;
        animation-iteration-count:infinite;
        animation-direction:normal;
    }

    & #frotateG_01{
        left:0;
        top:85px;
        animation-delay:0.45s;
    }

    & #frotateG_02{
        left:24px;
        top:24px;
        animation-delay:0.6s;
    }

    & #frotateG_03{
        left:85px;
        top:0;
        animation-delay:0.75s;
    }

    & #frotateG_04{
        right:24px;
        top:24px;
        animation-delay:0.9s;
    }

    & #frotateG_05{
        right:0;
        top:85px;
        animation-delay:1.05s;
    }

    & #frotateG_06{
        right:24px;
        bottom:24px;
        animation-delay:1.2s;
    }

    & #frotateG_07{
        left:85px;
        bottom:0;
        animation-delay:1.35s;
    }

    & #frotateG_08{
        left:24px;
        bottom:24px;
        animation-delay:1.5s;
    }
`;