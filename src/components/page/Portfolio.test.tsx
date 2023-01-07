import { render } from "@testing-library/react";
import Portfolio from "./Portfolio";

describe("banpicker section", () => {
    it("snapshot test", () => {
        const wrapper = render(<Portfolio bgImage="" />);
        expect(wrapper).toMatchSnapshot();
    });

    it("render test", () => {
        const wrapper = render(<Portfolio bgImage="" />);
        wrapper.getByText(/Portfolio/);
    });
});
