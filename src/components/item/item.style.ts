import styled from "@emotion/styled";

export const ItemOuter = styled.div<{ bgImage: string }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    background-image: url("${(props) => props.bgImage}");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
`;
