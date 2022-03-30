import styled, { css, keyframes } from 'styled-components';
import { aboutMeProps } from 'AboutMePageModuel';

interface Props {
    editMode: boolean;
}

const SkillTag = ({ skill, isEditMode, onSkillChange, onDeleteSkill }: aboutMeProps.SkillsDetailProps) => {
    return (
        <TagDiv data-value={skill} onChange={onSkillChange}>
            <label>
                {isEditMode && (
                    <TagDelete onClick={onDeleteSkill} editMode={isEditMode}>
                        x
                    </TagDelete>
                )}
                <FormCheckLeft name="skillBtn" value={skill} />
                <TagNameDiv editMode={isEditMode}>{skill}</TagNameDiv>
            </label>
        </TagDiv>
    );
};

export default SkillTag;

//TODO : 글자 길이에 따라서 폰트 사이즈 조정
const TagDiv = styled.div`
    /* width: 100px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: rgb(89, 147, 246);
    color: ${(props) => props.theme.color.textColor};
    margin: 0px 2px;
    &:hover {
        background-color: rgba(89, 147, 246, 0.5);
    } */
`;

const TagDelete = styled.span<Props>`
    display: inline-block;
    text-align: center;
    width: 20px;
    height: auto;
    border-radius: 50%;
    z-index: 10;
    border: 1px solid;
    position: relative;
    left: 75%;
    top: 10px;
    background-color: #fff;
    :hover {
        background-color: rgba(188, 188, 188, 0.8);
    }
    ${(props) =>
        props.editMode &&
        css`
            animation: ${shakeIcon} 1s infinite;
        `}
`;

const TagNameDiv = styled.div<Props>`
    font-size: 15px;
    width: auto;
    height: 30px;
    border-radius: 30px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    padding: 10px;
    scrollbar-width: none;
    background-color: ${(props) => props.theme.color.main};
    color: ${(props) => props.theme.color.textColor};
    overflow: auto;
    margin: 0px 2px;
    &:hover {
        background-color: rgba(89, 147, 246, 0.5);
    }

    ::-webkit-scrollbar {
        display: none;
    }
    ${(props) =>
        props.editMode &&
        css`
            animation: ${shakeIcon} 1s infinite;
        `}
`;

const FormCheckLeft = styled.input.attrs({ type: 'radio' })`
    &:checked {
        display: inline-block;
        background: none;
        padding: 0px 10px;
        text-align: center;
        width: auto;
        height: 30px;
        line-height: 33px;
        font-weight: 500;
        display: none;
    }
    &:checked + ${TagNameDiv} {
        background: #e4794d;
        color: #fff;
    }
    display: none;
`;

const shakeIcon = keyframes`
	0%{
		transform: translate(1px, 1px) rotate(0deg);
	}
	10%{
		transform: translate(-1px, -1px) rotate(1deg);
	}
	20%{
		transform: translate(-2px, 1px) rotate(-1deg);
	}
	30%{
		transform: translate(1px, 1px) rotate(0deg);
	}
	40%{
		transform: translate(-1px, 1px) rotate(1deg);
	}
	50%{
		transform: translate(1px, -1px) rotate(-2deg);
	}
	60%{
		transform: translate(1px, 1px) rotate(1deg);
	}
	70%{
		transform: translate(-1px, 1px) rotate(2deg);
	}
	80%{
		transform: translate(1px, -1px) rotate(1deg);
	}
	90%{
		transform: translate(-1px, 1px) rotate(0deg);
	}
	100%{
		transform: translate(1px, 1px) rotate(-1deg);
	}
`;
