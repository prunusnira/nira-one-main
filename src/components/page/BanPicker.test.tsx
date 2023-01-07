import { render } from "@testing-library/react";
import BanPicker from "./BanPicker";

describe("banpicker section", () => {
    it("snapshot test", () => {
        const wrapper = render(<BanPicker bgImage="" />);
        expect(wrapper).toMatchSnapshot();
    });

    it("render test", () => {
        const wrapper = render(<BanPicker bgImage="" />);
        wrapper.getByText(/BanPicker/);
    });
});
