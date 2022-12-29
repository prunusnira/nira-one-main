import Button from "../button";
import { Wrapper, Title, TitleSub, BWSpan, WBSpan } from "../common.style";
import Item from "../item/item";

type Props = {
    bgImage: string;
};

const PIUManager = ({ bgImage }: Props) => {
    return (
        <Item bgImage={bgImage}>
            <Wrapper>
                <Title>
                    <BWSpan>PIU Manager</BWSpan>
                </Title>
                <TitleSub>
                    <WBSpan>Personal Data Manager for Pump It Up</WBSpan>
                </TitleSub>
                <Button src="https://piu.nira.one" text="GO TO PIU MANAGER" />
            </Wrapper>
        </Item>
    );
};

export default PIUManager;
