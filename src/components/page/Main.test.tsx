import { render } from "@testing-library/react";
import Main from "./Main";

describe("main section", () => {
    it("snapshot test", () => {
        const wrapper = render(<Main bgImage="" />);
        expect(wrapper).toMatchSnapshot();
    });

    it("render test", () => {
        const wrapper = render(<Main bgImage="" />);
        wrapper.getByText("nira.one");
    });
});
