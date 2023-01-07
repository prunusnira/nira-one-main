import { render } from "@testing-library/react";
import PIUManager from "./PIUManager";

describe("banpicker section", () => {
    it("snapshot test", () => {
        const wrapper = render(<PIUManager bgImage="" />);
        expect(wrapper).toMatchSnapshot();
    });

    it("render test", () => {
        const wrapper = render(<PIUManager bgImage="" />);
        wrapper.getByText(/PIU Manager/);
    });
});
