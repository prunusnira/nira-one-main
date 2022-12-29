import { ItemOuter } from "./item.style";

type Props = {
    children: React.ReactNode;
    testBGColor?: string;
};

const Item = ({ children, testBGColor }: Props) => {
    return (
        <ItemOuter className="target" testBGColor={testBGColor}>
            {children}
        </ItemOuter>
    );
};

export default Item;
