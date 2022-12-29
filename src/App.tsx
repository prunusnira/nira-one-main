import React from "react";
import { AppWrapper } from "./App.style";
import useIntersect from "./hook/useIntersect";
import Item from "./items/item";

const App = () => {
    const { ref } = useIntersect();
    return (
        <AppWrapper ref={ref}>
            <Item testBGColor="red">1</Item>
            <Item testBGColor="blue">2</Item>
            <Item testBGColor="yellow">3</Item>
            <Item testBGColor="purple">4</Item>
            <Item testBGColor="cyan">5</Item>
            <Item testBGColor="lightgray">6</Item>
        </AppWrapper>
    );
};

export default App;
