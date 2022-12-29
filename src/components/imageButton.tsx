import React from "react";
import { ButtonDiv, ButtonImg, WBSpan } from "./common.style";

type Props = {
    src: string;
    text: React.ReactNode;
};

const ImageButton = ({ src, text }: Props) => {
    const openSrc = (src: string) => {
        window.open(src, "_blank", "noopener,noreferrer");
    };

    return (
        <ButtonDiv>
            <WBSpan>
                <ButtonImg onClick={() => openSrc(src)}>{text}</ButtonImg>
            </WBSpan>
        </ButtonDiv>
    );
};

export default ImageButton;
