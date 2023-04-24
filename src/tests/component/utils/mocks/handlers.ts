import { rest } from "msw";

export const handlers = [
    rest.get("/greeting", (req, res, ctx) => {
        return res(ctx.json({ greeting: "hello there" }));
    }),
];
