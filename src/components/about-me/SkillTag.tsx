import styled from 'styled-components';
import { aboutMeProps } from 'AboutMePageModuel';

const SkillTag = ({ skill, onSkillChange }: aboutMeProps.SkillsDetailProps) => {
    return (
        <TagDiv data-value={skill} onChange={onSkillChange}>
            <label>
                <FormCheckLeft name="skillBtn" value={skill} />
                <TagNameDiv>{skill}</TagNameDiv>
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

const TagNameDiv = styled.div`
    font-size: 18px;
    width: 100px;
    height: 30px;
    background: #e6e6e6;
    border-radius: 30px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: ${(props) => props.theme.color.main};
    color: ${(props) => props.theme.color.textColor};
    overflow: auto;
    margin: 0px 2px;
    &:hover {
        background-color: rgba(89, 147, 246, 0.5);
    }
`;

const FormCheckLeft = styled.input.attrs({ type: 'radio' })`
    &:checked {
        display: inline-block;
        background: none;
        padding: 0px 10px;
        text-align: center;
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
