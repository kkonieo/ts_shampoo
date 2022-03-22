import styled from 'styled-components';

export const Members = ({ text, image }: { text: string; image: string }) => {
    return (
        <Member>
            <img src={image} alt="member" />
            <p>{text}</p>
        </Member>
    );
};

const Member = styled.div`
    width: 235px;
    height: 235px;
    border: 1px solid;
    border-radius: 9999px;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    margin: 12px 11px;
    cursor: pointer;
    p {
        display: none;
    }
    :hover {
        background-color: #fff;
        img {
            opacity: 8%;
        }
        p {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            display: block;
        }
    }
`;
