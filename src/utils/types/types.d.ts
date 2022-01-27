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
