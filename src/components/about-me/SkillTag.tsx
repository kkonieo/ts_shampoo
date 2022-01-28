import styled from 'styled-components';
import { aboutMeProps } from 'AboutMePageModuel';

const SkillTag = ({ skill, onSkillClick }: aboutMeProps.SkillsDetailProps) => {
    return (
        <TagDiv data-value={skill} onClick={onSkillClick}>
            <TagNameDiv>{skill}</TagNameDiv>
        </TagDiv>
    );
};

export default SkillTag;

//TODO : 글자 길이에 따라서 폰트 사이즈 조정
const TagDiv = styled.div`
    width: 100px;
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
    }
`;

const TagNameDiv = styled.div`
    font-size: 16px;
    font-weight: 500;
    text-align: center;
`;
