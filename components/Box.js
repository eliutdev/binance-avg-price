import styled from 'styled-components';

const BoxWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.cols}, 1fr);
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 1rem;
    border: 1px solid #5b616e33;
    border-radius: 5px;
`;

export default function Box({ cols = 1, children }) {
    return (
        <BoxWrapper cols={cols}>
            {children}
        </BoxWrapper>
    );
}