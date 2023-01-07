import { fireEvent, render } from "@testing-library/react";
import Button from "./button";

describe("button test", () => {
    it("button click test", () => {
        const onClick = jest.fn();
        const wrapper = render(<Button onClick={onClick} src="" text="" />);
        const button = wrapper.getByRole("button");
        fireEvent.click(button);
        expect(onClick).toBeCalledTimes(1);
    });
});
