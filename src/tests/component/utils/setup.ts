import { afterEach, beforeAll, afterAll } from "vitest";
import { cleanup } from "@testing-library/react";
import { server } from "./mocks/server";

beforeAll(() => {
    server.listen();
});

afterEach(() => {
    cleanup();
    afterEach(() => server.resetHandlers());
});

afterAll(() => {
    server.close();
});
