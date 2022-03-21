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
        interface SkillTagProps {
            skill: string[];
            skillDescriptions: { title: string; describe: string[] }[];
        }
        interface SkillsDetailProps {
            skill: string;
            //추후 수정이 필요할듯 (any)
            onSkillChange: any;
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

declare module 'loginModule' {
    export namespace loginSpace {
        interface LoginButtonProps {
            type: 'submit';
            text: string;
            className: 'blue_button' | 'gray_button'; // 버튼 컬러 바꾸기용
        }

        interface SnsLoginButtonProps {
            text: '깃허브로 로그인' | '구글로 로그인' | '네이버로 로그인';
            to: 'github' | 'google' | 'naver'; // 네비게이터용
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
    }
}

declare module 'ProjectPageModule' {
    export namespace ProjectProps {
        interface IUrl {
            linkName?: string;
            linkUrl?: string;
        }
        interface IProjectProps {
            projectId?: string;
            id?: string;
            title: string;
            startDate: string;
            endDate: string;
            techStack: Array<string>;
            explain: string;
            gifSrc?: blob | string;
            imgSrc?: blob | string;
            urlLink: IUrl[];
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

declare module 'PublicComponentModule' {
    export namespace PublicComponentProps {
        interface SubtitleProps {
            text: string;
            onCancelClick: () => any;
        }
    }
}

declare module 'MyPageModule' {
    export namespace MyPageProps {
        interface MyPageProps {
            imgSrc?: string;
            id: string;
            userName: string;
            //TODO : type을 직군들으로 고정시킬지 고민
            userJobGroup: { id: string; value: string };
            account?: { social: string; socialId?: string };
        }

        interface SubTitleProps {
            text: string;
        }

        interface ProfileImgProps {
            imgSrc?: string;
        }

        interface UserInfoBoxProps {
            userData: {
                id: string;
                userName: string;
                userJobGroup: { id: string; value: string };
                account?: { social: string; socialId?: string };
            };
            jobGroup: { id: string; value: string }[];
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

declare module 'RecoilModule' {
    export namespace RecoilProps {
        interface aboutMeEditProps {
            id: string;
            editMode: boolean;
        }
        interface aboutMeSummaryProps {
            summary: string;
        }
    }
}
