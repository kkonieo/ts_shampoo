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
                    detailDesribition: string | null;
                }[];
            }[];
        }
    }
}

declare module 'SnsLoginButton' {
    interface SnsLoginButtonProps {
        text: "깃허브로 로그인" | "구글로 로그인" | "네이버로 로그인";
        to: "github" | "google" | "naver"; // 네비게이터용
        color: string;
    }
}

declare module 'LoginContainer' {
    interface LoginContainerProps {
            children: React.ReactNode;
        }
    }

declare module 'LoginButton' {
    interface LoginButtonProps {
        type: "submit";
        text: string;
        className: "blue_button" | "gray_button"; // 버튼 컬러 바꾸기용
    };
}

declare module 'SignUp' {
    type SignUpProps = {
        userEmail?: string;
        userName: string;
        userJob: string;
    };
}