import { render } from "@testing-library/react";
import SkillNavigator from "./SkillNavigator";

describe("banpicker section", () => {
    it("snapshot test", () => {
        const wrapper = render(<SkillNavigator bgImage="" />);
        expect(wrapper).toMatchSnapshot();
    });

    it("render test", () => {
        const wrapper = render(<SkillNavigator bgImage="" />);
        wrapper.getByText(/Skill Navigator/);
    });
});
