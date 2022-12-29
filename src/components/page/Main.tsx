import Item from "../item/item";
import {
    Desc,
    Title,
    BWSpan,
    TitleSub,
    Wrapper,
    WBSpan,
    DescCenter,
} from "../common.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

type Props = {
    bgImage: string;
};

const Main = ({ bgImage }: Props) => {
    return (
        <Item bgImage={bgImage}>
            <Wrapper>
                <Title>
                    <BWSpan>nira.one</BWSpan>
                </Title>
                <TitleSub>
                    <WBSpan>GATEWAY OF NIRA.ONE SERVICES</WBSpan>
                </TitleSub>
                <Desc>
                    Skill Navigator
                    <br />
                    PIU Manager
                    <br />
                    Twitch BanPicker
                    <br />
                    Portfolio
                    <br />
                    Others
                </Desc>
                <DescCenter>
                    <span>Scroll Down</span>
                    <FontAwesomeIcon icon={faAnglesDown} />
                </DescCenter>
            </Wrapper>
        </Item>
    );
};

export default Main;
