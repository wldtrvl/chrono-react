import { renderWithProviders } from "../../tests/component/utils/wrappedRender";
import { Counter } from "./Counter";
import { screen, fireEvent } from "@testing-library/react";
import { expect } from "vitest";

describe("Counter", async () => {
    it("should render a counter", async () => {
        renderWithProviders(<Counter />);
        expect(screen.getByText("0")).toBeTruthy();
    });

    it("should increment the counter", async () => {
        renderWithProviders(<Counter />);
        expect(screen.getByText("0")).toBeTruthy();
        fireEvent.click(screen.getByText("+"));
        expect(screen.getByText("1")).toBeTruthy();
    });

    it("should decrement the counter", async () => {
        renderWithProviders(<Counter />);
        expect(screen.getByText("0")).toBeTruthy();
        fireEvent.click(screen.getByText("-"));
        expect(screen.getByText("-1")).toBeTruthy();
    });
});
