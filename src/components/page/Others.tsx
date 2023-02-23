import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Wrapper, Title, Desc, BWSpan, IconWrap } from "../common.style";
import ImageButton from "../imageButton";
import Item from "../item/item";

type Props = {
    bgImage: string;
};

const Others = ({ bgImage }: Props) => {
    return (
        <Item bgImage={bgImage}>
            <Wrapper>
                <Title>
                    <BWSpan>Others</BWSpan>
                </Title>
                <IconWrap>
                    <ImageButton
                        src="https://github.com/prunusnira"
                        text={<FontAwesomeIcon icon={faGithub} />}
                    />
                    <ImageButton
                        src="https://blog.nira.one"
                        text={<FontAwesomeIcon icon={faBlog} />}
                    />
                </IconWrap>
                <Desc>(c) 2023 Nira</Desc>
            </Wrapper>
        </Item>
    );
};

export default Others;
