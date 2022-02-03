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
        interface SkillsDetailProps {
            skill: string;
            onSkillClick: any;
        }
        interface ResumeProps {
            title: string;
            resumeDetail: {
                year: number;
                detail: {
                    detailTitle: string;
                    detailDescription: string | null;
                }[];
            }[];
        }
    }
}

declare module 'LoginModule' {
    export namespace LoginSpace {
        interface LoginButtonProps {
            type: "submit";
            text: string;
            className: "blue_button" | "gray_button"; // 버튼 컬러 바꾸기용
        };

        interface SnsLoginButtonProps {
            text: "깃허브로 로그인" | "구글로 로그인" | "네이버로 로그인";
            to: "github" | "google" | "naver"; // 네비게이터용
            color: string;
        };

        interface LoginContainerProps {
            children: React.ReactNode;
        };

        interface SignUpProps {
            index: string;
            userEmail: string;
            userName?: string;
            userJob?: string;
        };

        type SignUpPageProps = 0 | 1;
    }

    export namespace RequestTokenSpace {
        interface GithubToken {
            access_token?: string;
        };

        interface NaverToken extends GithubToken {
            refresh_token?: string;
            expires_in?: string;
        };

        interface GoogleToken {
            id_token?: string;
        }
    }
}

declare module 'ProjectPageModule' {
    export namespace ProjectProps {
        interface IProjectProps {
            id: any;
            title: string;
            startDate: string;
            endDate: string;
            techStack: Array<string>;
            explain?: string;
            gifSrc?: string;
            imgSrc?: string;
            /*
            아이디 번호
            프로젝트 제목
            제작시작일자
            제작종료일자
            기술스택
            프로젝트 설명
            마우스 올리면 나올 GIF
            기본 상태의 프로젝트 사진
            */
        }
    }
}

declare module 'HomeModule' {
    export namespace HomeProps {
        interface UserInfoProps {
            name: string;
            position: string;
            stack: string;
        }
        interface IFilterProps {
            isActive: boolean;
        }
    }
}
