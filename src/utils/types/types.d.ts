declare module 'AboutMePageModuel' {
    export namespace aboutMeProps {
        interface AboutMePageProps {
            userName: string;
            userContents: string[];
        }
        interface SkillsProps {
            skillTitles: string | null;
            skillDescribes: string[] | [];
        }
    }
}

declare module 'ProjectPageModule' {
    export namespace ProjectProps {
        interface IProjectProps {
            /*
            아이디 번호
            프로젝트 제목
            제작시작일자
            제작종료일자
            기술스택
            마우스 올리면 나올 GIF
            기본 상태의 프로젝트 사진
            */
            id: number;
            title: string;
            startDate: string;
            endDate: string;
            techStack: Array<string>;
            animatedImg?: string;
            staticImg?: string;
        }
    }
}
