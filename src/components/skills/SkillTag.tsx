import styled from 'styled-components';

interface Props{
    skill:string
}

const SkillTag = ({skill}:Props) =>{ 
    return(
        <TagDiv>
            <TagNameDiv>{skill}</TagNameDiv>
        </TagDiv>
    )
}

export default SkillTag

const TagDiv = styled.div`
    width: 100px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: rgb(89, 147, 246);
    margin: 0px 2px;
    &:hover{
        background-color:rgba(89, 147, 246,0.5);
    }
`

const TagNameDiv = styled.div`
    font-size: 16px;
    font-weight: 500;
    text-align: center;
`