import styled from "@emotion/styled";

export const ItemOuter = styled.div<{ testBGColor?: string }>`
    width: 100%;
    height: 100%;
    ${(props) => props.testBGColor && `background-color: ${props.testBGColor};`}
`;
