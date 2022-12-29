import Button from "../button";
import { Title, BWSpan, TitleSub, Wrapper, WBSpan } from "../common.style";
import Item from "../item/item";

type Props = {
    bgImage: string;
};

const Portfolio = ({ bgImage }: Props) => {
    return (
        <Item bgImage={bgImage}>
            <Wrapper>
                <Title>
                    <BWSpan>PORTFOLIO</BWSpan>
                </Title>
                <TitleSub>
                    <WBSpan>Nira's Portfolio (GitHub.io)</WBSpan>
                </TitleSub>
                <Button
                    src="https://prunusnira.github.io"
                    text="GO TO PORTFOLIO"
                />
            </Wrapper>
        </Item>
    );
};

export default Portfolio;
