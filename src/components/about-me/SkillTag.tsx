import styled, { css, keyframes } from 'styled-components';
import { aboutMeProps } from 'AboutMePageModuel';

interface Props {
    editMode: boolean;
}

const SkillTag = ({ skill, targetSkill, isEditMode, onSkillChange, onDeleteSkill }: aboutMeProps.SkillsDetailProps) => {
    return (
        <TagDiv data-value={skill}>
            <Label>
                <FormCheckLeft name="skillBtn" value={skill} checked={skill === targetSkill ? true : false} />
                <TagNameDiv data-value={skill} onClick={onSkillChange} editMode={isEditMode}>
                    {isEditMode && (
                        <TagDelete data-value={skill} onClick={onDeleteSkill} editMode={isEditMode}>
                            x
                        </TagDelete>
                    )}
                    <TagNameTitle>{skill}</TagNameTitle>
                </TagNameDiv>
            </Label>
        </TagDiv>
    );
};

export default SkillTag;

//TODO : 글자 길이에 따라서 폰트 사이즈 조정
const TagDiv = styled.div``;

const Label = styled.label`
    box-sizing: border-box;
`;

//TODO : UI 수정 !
const TagDelete = styled.div<Props>`
    display: inline-block;
    text-align: center;
    width: 20px;
    height: auto;
    position: absolute;
    border-radius: 50%;
    z-index: 20;
    border: 1px solid;
    color: black;
    top: -9px;
    right: -1px;
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
    position: relative;
    font-size: 15px;
    width: auto;
    height: 30px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    box-sizing: border-box;
    padding: 10px;
    scrollbar-width: none;
    background-color: ${(props) => props.theme.color.main};
    color: ${(props) => props.theme.color.textColor};
    overflow: visible;
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

const TagNameTitle = styled.div``;

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
