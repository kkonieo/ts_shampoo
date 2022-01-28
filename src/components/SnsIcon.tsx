import styled from "styled-components";

// size props를 받아서 사이즈 조절
// class명은 레이아웃에 맞춰서 위치 조절을 위함

interface Size {
    size?: string;
}

const GithubImg = styled.img.attrs(() => ({
    src: `${process.env.PUBLIC_URL}/img/github.svg`,
    alt: "깃허브 아이콘",
    name: "githubIcon",
    className: "githubIcon"
}))<Size>`
width: ${ props => props.size ? props.size : "10%" };
cursor: pointer;
`;

const GoogleImg = styled.img.attrs(() => ({
    src: `${process.env.PUBLIC_URL}/img/google.svg`,
    alt: "구글 아이콘",
    name: "googleIcon",
    className: "googleIcon"
}))<Size>`
width: ${ props => props.size ? props.size : "10%" };
cursor: pointer;
`;

const NaverImg = styled.img.attrs(() => ({
    src: `${process.env.PUBLIC_URL}/img/naver.svg`,
    alt: "네이버 아이콘",
    name: "naverIcon",
    className: "naverIcon"
}))<Size>`
width: ${ props => props.size ? props.size : "10%" };
cursor: pointer;
`;

export { GithubImg, GoogleImg, NaverImg };