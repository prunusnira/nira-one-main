import React from "react";
import { AppWrapper } from "./App.style";
import useIntersect from "./hook/useIntersect";
import Item from "./components/item/item";
import Main from "./components/page/Main";
import Portfolio from "./components/page/Portfolio";
import SkillNavigator from "./components/page/SkillNavigator";
import PIUManager from "./components/page/PIUManager";
import Others from "./components/page/Others";
import BanPicker from "./components/page/BanPicker";

const App = () => {
    const { ref } = useIntersect();
    return (
        <AppWrapper ref={ref}>
            <Main bgImage="/image/bg1.jpg" />
            <SkillNavigator bgImage="/image/bg2.jpg" />
            <PIUManager bgImage="/image/bg3.jpg" />
            <BanPicker bgImage="/image/bg4.jpg" />
            <Portfolio bgImage="/image/bg5.jpg" />
            <Others bgImage="/image/bg1.jpg" />
        </AppWrapper>
    );
};

export default App;
