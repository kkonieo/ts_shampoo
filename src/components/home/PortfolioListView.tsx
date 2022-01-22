import styled from 'styled-components';

const UserPortfolioListDiv = styled.div`
    border: 2px solid blue;
`;
const FilterDiv = styled.div`
    border: 2px solid red;
    display: flex;
`;

export const PortfolioListView = () => {
    interface UserInfoProps {
        name: string;
        job: string;
    }

    // 유저 포트폴리오 임의 생성을 위한 더미 데이터
    const UserInfo: UserInfoProps[] = [
        {
            name: '엘리스',
            job: '프론트엔드 개발자',
        },
        {
            name: '엘리스',
            job: '백엔드 개발자',
        },
        {
            name: '엘리스',
            job: '프론트엔드 개발자',
        },
        {
            name: '엘리스',
            job: '백엔드 개발자',
        },
        {
            name: '엘리스',
            job: '프론트엔드 개발자',
        },
        {
            name: '엘리스',
            job: '백엔드 개발자',
        },
        {
            name: '엘리스',
            job: '프론트엔드 개발자',
        },
        {
            name: '엘리스',
            job: '백엔드 개발자',
        },
    ];

    const Portfolio = ({ name, job }: UserInfoProps) => {
        return (
            <div>
                <div>{name}</div>
                <div>{job}</div>
            </div>
        );
    };

    let UserPortfolioList: JSX.Element[] = UserInfo.map((item: UserInfoProps) => {
        return <Portfolio name={item.name} job={item.job} />;
    });

    return (
        <section>
            <FilterDiv>
                <div>필터</div>
                <button>프론트엔드 개발자</button>
                <button>백엔드 개발자</button>
            </FilterDiv>
            <UserPortfolioListDiv>{UserPortfolioList}</UserPortfolioListDiv>
        </section>
    );
};
