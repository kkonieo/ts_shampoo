import styled from "styled-components";

interface Size {
    size?: string;
}

const GithubImg = styled.img.attrs(() => ({
    src: `${process.env.PUBLIC_URL}/img/github.svg`,
    alt: "깃허브 아이콘",
    className: "githubIcon"
}))<Size>`
width: ${ props => props.size ? props.size : "30px" };
height: ${ props => props.size ? props.size : "30px" };
display: inline-block;
cursor: pointer;
`;

const GoogleImg = styled.img.attrs(() => ({
    src: `${process.env.PUBLIC_URL}/img/google.svg`,
    alt: "구글 아이콘",
    className: "googleIcon"
}))<Size>`
width: ${ props => props.size ? props.size : "30px" };
height: ${ props => props.size ? props.size : "30px" };
display: inline-block;
cursor: pointer;
`;

const KakaotalkImg = styled.img.attrs(() => ({
    src: `${process.env.PUBLIC_URL}/img/kakaotalk.svg`,
    alt: "카카오톡 아이콘",
    className: "kakaotalkIcon"
}))<Size>`
width: ${ props => props.size ? props.size : "30px" };
height: ${ props => props.size ? props.size : "30px" };
display: inline-block;
cursor: pointer;
`;

export { GithubImg, GoogleImg, KakaotalkImg };