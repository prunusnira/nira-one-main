import Button from "../button";
import { Wrapper, Title, TitleSub, BWSpan, WBSpan } from "../common.style";
import Item from "../item/item";

type Props = {
    bgImage: string;
};

const SkillNavigator = ({ bgImage }: Props) => {
    return (
        <Item bgImage={bgImage}>
            <Wrapper>
                <Title>
                    <BWSpan>Skill Navigator</BWSpan>
                </Title>
                <TitleSub>
                    <WBSpan>Personal Data Manager for GITADORA</WBSpan>
                </TitleSub>
                <Button
                    src="https://sin.nira.one"
                    text="GO TO SKILL NAVIGATOR"
                />
            </Wrapper>
        </Item>
    );
};

export default SkillNavigator;
