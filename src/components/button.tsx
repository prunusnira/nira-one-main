import React from "react";
import { ButtonDiv, ButtonWrap } from "./common.style";

type Props = {
    src: string;
    text: string;
};

const Button = ({ src, text }: Props) => {
    const openSrc = (src: string) => {
        window.open(src, "_blank", "noopener,noreferrer");
    };

    return (
        <ButtonDiv>
            <ButtonWrap onClick={() => openSrc(src)}>{text}</ButtonWrap>
        </ButtonDiv>
    );
};

export default Button;
