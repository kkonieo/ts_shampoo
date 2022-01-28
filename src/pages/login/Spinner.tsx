import styled, { keyframes } from 'styled-components';
import { ContainerArticle } from './LoginContainer';
import axios from 'axios';
import { useState, useEffect } from 'react';

interface Token {
    access_token: string;
    refresh_token: string;
    expires_in: string;
}

const Spinner = () => {

    const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
    const NAVER_SECRET_KEY = process.env.REACT_APP_NAVER_SECRET_KEY;

    // console.log(NAVER_CLIENT_ID);
    // console.log(NAVER_SECRET_KEY);

    // API 호출 결과
    const [accessToken, setAccessToken] = useState<Token>({
        access_token: "",
        refresh_token: "",
        expires_in: "",
    });

    async function getSnsApi() {
        const tokenCode = new URL(window.location.href).searchParams.get('code')
        
        try {
            await axios.get(`http://cors-anywhere.herokuapp.com/https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${NAVER_CLIENT_ID}&client_secret=${NAVER_SECRET_KEY}&code=${tokenCode}&state=1`)
                .then(response => {
                    console.log("인가 코드 response", response);
                    setAccessToken((current) => {
                        return {
                            ...current,
                            access_token: response.data.access_token,
                            refresh_token: response.data.refresh_token,
                            expires_in: response.data.expires_in,
                        }
                    })
                })
            const userProfile = await axios.get(`https://openapi.naver.com/v1/nid/me`, {
                headers: {
                    Authorization: `Bearer ${accessToken.access_token}`
                }
            })
            .then(response => console.log("회원 프로필 response", response))
        }
        catch (error) {
            console.log('error', error);
        }
    }

    useEffect(() => { getSnsApi() })
    
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