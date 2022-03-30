import styled from 'styled-components';

interface Props {
    title: string;
}

const AutoCompleteTag = ({ title }: Props) => {
    return (
        <TagDiv>
            <TagTitleSpan>{title}</TagTitleSpan>
        </TagDiv>
    );
};

export default AutoCompleteTag;

const TagDiv = styled.div`
    text-align: center;
`;

const TagTitleSpan = styled.span``;
