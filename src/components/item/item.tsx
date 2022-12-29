import { ItemOuter } from "./item.style";

type Props = {
    children: React.ReactNode;
    bgImage: string;
};

const Item = ({ children, bgImage }: Props) => {
    return (
        <ItemOuter className="target" bgImage={bgImage}>
            {children}
        </ItemOuter>
    );
};

export default Item;
