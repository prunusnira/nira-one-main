import styled from "@emotion/styled";

export const Wrapper = styled.div<{ position?: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    height: 100%;
    max-width: 1024px;
`;

export const Title = styled.div`
    font-size: 80px;
    font-weight: bold;

    @media screen and (max-width: 500px) {
        font-size: 60px;
    }
`;

export const BWSpan = styled.span`
    color: white;
    background-color: black;
`;

export const WBSpan = styled.span`
    color: black;
    background-color: white;
`;

export const TitleSub = styled.div`
    font-size: 48px;
    font-weight: bold;

    @media screen and (max-width: 500px) {
        font-size: 36px;
    }
`;

export const Desc = styled.div`
    font-size: 24px;
    font-weight: bold;

    @media screen and (max-width: 500px) {
        font-size: 18px;
    }
`;

export const DescCenter = styled.div`
    font-size: 24px;
    font-weight: bold;
    width: 100%;
    text-align: center;

    @media screen and (max-width: 500px) {
        font-size: 18px;
    }

    display: flex;
    flex-direction: column;

    padding-top: 48px;
`;

export const ButtonDiv = styled.div`
    padding-top: 48px;
`;

export const ButtonWrap = styled.button`
    padding: 10px 10px;
    color: white;
    font-weight: bold;
    background-color: #0d5394;
    border: none;
    border-radius: 10px;
    font-size: 24px;
    text-shadow: 2px 2px 0 black;
    cursor: pointer;

    @media screen and (max-width: 500px) {
        font-size: 18px;
    }
`;

export const IconWrap = styled.div`
    display: flex;
    flex-direction: row;
    gap: 36px;

    @media screen and (max-width: 500px) {
        gap: 27px;
    }
`;

export const ButtonImg = styled.div`
    font-size: 96px;
    cursor: pointer;

    @media screen and (max-width: 500px) {
        font-size: 72px;
    }
`;
