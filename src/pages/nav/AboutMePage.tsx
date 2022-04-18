import { LinkStateData } from 'LinkStateModule';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { RecoilProps } from 'RecoilModule';
import styled from 'styled-components';
import Cookies from 'universal-cookie';
import { Summary, Skills, EditDetect } from '../../components';
import { Resume } from '../../components/about-me';
import { summaryApi } from '../../utils/api/aboutMe';
import { aboutMeEditState, aboutMeSummaryData } from '../../utils/data/atom';

const AboutMePage = () => {
    //유저의 간단한 자기 소개

    //TODO : axios를 통해 서버에서 해당 유저의 summary , skills , resume 받아오고 컴포넌트로 뿌려줄 예정
    /*
        수정 모드임을 감지할수 있도록 설정
        수정 로직 각 컴포넌트에서 수정 클릭시 확인 버튼, input 창에 해당 데이터가 떠야함
    */
    const cookies: Cookies = new Cookies();
    const controlEditMode = useRecoilValue(aboutMeEditState);
    const [summaryData, setSummaryData] = useRecoilState<RecoilProps.aboutMeSummaryProps>(aboutMeSummaryData);
    const { state } = useLocation();
    const { currentUserData } = state as LinkStateData.linkStateprops;

    useEffect(() => {
        console.log(currentUserData.slug);
        setSummaryData({ summary: '' });
        try {
            summaryApi
                .getUserSummary(currentUserData.slug)
                .then((response) => {
                    if (response.status === 200) {
                        const data = { summary: response.data.content };
                        console.log('api', data);

                        setSummaryData(data);
                    }
                })
                .catch((error) => {
                    if (error.response) {
                        // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
                        if (error.response.status === 500) {
                            setSummaryData({ summary: '' });
                        }
                        console.log(error.response);
                    } else if (error.request) {
                        // 요청이 이루어 졌으나 응답을 받지 못했습니다.
                        // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
                        // Node.js의 http.ClientRequest 인스턴스입니다.
                        console.log(error.request);
                        alert('네트워크 오류 발생');
                    } else {
                        // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
                        console.log('Error', error.message);
                    }
                });
        } catch (e) {
            console.error(e);
        }
    }, []);

    useEffect(() => {
        console.log(summaryData.summary);
    }, [summaryData]);

    const summaryEditMode = controlEditMode[0].editMode;
    const skillsEditMode = controlEditMode[1].editMode;
    const resumeEditMode = controlEditMode[2].editMode;

    return (
        <Div>
            {(summaryEditMode || skillsEditMode || resumeEditMode) && <EditDetect />}
            <Summary isEditMode={summaryEditMode} />
            <Skills isEditMode={skillsEditMode} />
            <Resume isEditMode={resumeEditMode} />
        </Div>
    );
};

export default AboutMePage;

const Div = styled.div`
    padding: 20px;
    box-sizing: border-box;
`;
