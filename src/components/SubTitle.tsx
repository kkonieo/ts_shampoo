import styled from 'styled-components';

interface Props{
    text:string;
}

const SubTitle = ({text}:Props) =>{
    return(
        <Title>{text}</Title>
    )
}

export default SubTitle

const Title = styled.div`
    font-size: 20px;
    font-weight: 700;
    padding-bottom: 5px;
    border-bottom: 1px solid #BDBDBD;
    text-align: left;
`