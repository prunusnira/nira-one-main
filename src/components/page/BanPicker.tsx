import Button from "../button";
import { Wrapper, Title, TitleSub, BWSpan, WBSpan } from "../common.style";
import Item from "../item/item";

type Props = {
    bgImage: string;
};

const BanPicker = ({ bgImage }: Props) => {
    return (
        <Item bgImage={bgImage}>
            <Wrapper>
                <Title>
                    <BWSpan>Twitch BanPicker</BWSpan>
                </Title>
                <TitleSub>
                    <WBSpan>Ban / Pick Web App for Twitch Streamers</WBSpan>
                </TitleSub>
                <Button
                    src="https://banpicker.nira.one"
                    text="GO TO TWITCH BANPICKER"
                />
            </Wrapper>
        </Item>
    );
};

export default BanPicker;
