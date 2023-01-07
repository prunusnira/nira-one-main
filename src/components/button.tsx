import React from "react";
import { ButtonDiv, ButtonWrap } from "./common.style";

type Props = {
    onClick?: (src: string) => void;
    src: string;
    text: string;
};

const Button = ({ onClick, src, text }: Props) => {
    const openSrc = (src: string) => {
        window.open(src, "_blank", "noopener,noreferrer");
    };

    return (
        <ButtonDiv>
            <ButtonWrap
                onClick={onClick ? () => onClick(src) : () => openSrc(src)}
            >
                {text}
            </ButtonWrap>
        </ButtonDiv>
    );
};

export default Button;
