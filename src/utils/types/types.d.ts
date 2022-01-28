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

declare module 'loginModule' {
    export namespace loginSpace {
        interface LoginButtonProps {
            type: "submit";
            text: string;
            className: "blue_button" | "gray_button"; // 버튼 컬러 바꾸기용
        }

        interface SnsLoginButtonProps {
            text: "깃허브로 로그인" | "구글로 로그인" | "네이버로 로그인";
            to: "github" | "google" | "naver"; // 네비게이터용
            color: string;
        }

            interface LoginContainerProps {
            children: React.ReactNode;
        }
    }
}

declare module 'SignUp' {
    interface SignUpProps {
        userEmail?: string;
        userName: string;
        userJob: string;
    };
}