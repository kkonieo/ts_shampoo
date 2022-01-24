import ProjectCard from '../project/ProjectCard';
import styled from 'styled-components';

type ExplainProps = {
    imgSrc: string;
    title: string;
    body: string[];
};

const datas: ExplainProps[] = [
    {
        imgSrc: 'Test.png',
        title: '프로젝트 토끼토끼',
        body: ['제작기간 : 2021.01.30 ~ 2021.02.30', '기술 스택 : Django, Flask, TypeScript'],
    },
    {
        imgSrc: 'Test.png',
        title: '프로젝트 토끼토끼',
        body: ['제작기간 : 2021.01.30 ~ 2021.02.30', '기술 스택 : Django, Flask, TypeScript'],
    },
    {
        imgSrc: 'Test.png',
        title: '프로젝트 토끼토끼',
        body: ['제작기간 : 2021.01.30 ~ 2021.02.30', '기술 스택 : Django, Flask, TypeScript'],
    },
    {
        imgSrc: 'Test.png',
        title: '프로젝트 토끼토끼',
        body: ['제작기간 : 2021.02.30 ~ 2021.03.30', '기술 스택 : Django, Flask, TypeScript'],
    },
];

const CardDiv = () => {
    return (
        <GridDiv>
            {datas.map((data) => (
                <ProjectCard {...data} />
            ))}
        </GridDiv>
    );
};

export default CardDiv;

const GridDiv = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 2.5%;
    margin: 2.5%;
`;
