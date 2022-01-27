import styled, { keyframes } from 'styled-components';
import { ContainerArticle } from './LoginContainer';

const Spinner = () => {
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