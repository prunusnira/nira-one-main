import React from "react";
import { ButtonDiv, ButtonImg, WBSpan } from "./common.style";

type Props = {
    onClick?: (src: string) => void;
    src: string;
    text: React.ReactNode;
};

const ImageButton = ({ onClick, src, text }: Props) => {
    const openSrc = (src: string) => {
        window.open(src, "_blank", "noopener,noreferrer");
    };

    return (
        <ButtonDiv>
            <WBSpan>
                <ButtonImg
                    onClick={onClick ? () => onClick(src) : () => openSrc(src)}
                >
                    {text}
                </ButtonImg>
            </WBSpan>
        </ButtonDiv>
    );
};

export default ImageButton;
