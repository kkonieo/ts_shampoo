import { HomeProps } from 'HomeModule';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Portfolio 카드 컴포넌트
export const Portfolio = ({ name, job, user_skill, img }: HomeProps.UserInfoProps): JSX.Element => {
    return (
        <PortfolioLink to="/id">
            <PortfolioImage src={img ? img : `${process.env.PUBLIC_URL}/img/profile.png`} alt="profile" image={img} />
            <PortfolioTitleDiv>
                <PortfolioName>{name}</PortfolioName>
                <PortfolioJob>{job}</PortfolioJob>
                <PortfolioJob>{user_skill}</PortfolioJob>
            </PortfolioTitleDiv>
        </PortfolioLink>
    );
};

const PortfolioLink = styled(Link)`
    border: 1px solid ${(props) => props.theme.color.background};
    height: 277px;
    border-radius: 10px;
    display: inline-flex;
    flex-basis: 18%;
    flex-direction: column;
    text-decoration: none;
    color: ${(props) => props.theme.color.defaultText};
    transition-duration: 0.3s;
    transition-property: transform;
    margin: 0 1%;
    margin-bottom: 20px;

    &:hover {
        transform: translateY(-8px);
    }
`;
const PortfolioImage = styled.img`
    width: 100%;
    height: 100%;
    padding: ${(props: HomeProps.ImageProps) => (props.image === '' ? undefined : '40px')};
    opacity: ${(props: HomeProps.ImageProps) => (props.image === '' ? undefined : '0.9')};
`;
const PortfolioTitleDiv = styled.div`
    width: 100%;
    height: 72px;
    background-color: ${(props) => props.theme.color.buttonBackground};
    margin-top: auto;
    padding: 12px;
    border-radius: 0 0 10px 10px;
`;
const PortfolioName = styled.p`
    font-weight: bold;
    margin-bottom: 2px;
`;
const PortfolioJob = styled.p``;
