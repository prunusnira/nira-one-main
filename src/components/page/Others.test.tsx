import { render } from "@testing-library/react";
import Others from "./Others";

describe("banpicker section", () => {
    it("snapshot test", () => {
        const wrapper = render(<Others bgImage="" />);
        expect(wrapper).toMatchSnapshot();
    });

    it("render test", () => {
        const wrapper = render(<Others bgImage="" />);
        wrapper.getByText(/Other/);
    });
});
