import { rest } from "msw";
import { USER_MOCK, JWT } from "./user.js";
const userHandler = rest.get(`${process.env.NEXT_PUBLIC_API_URL}/api/users/me`, (req, res, ctx) => {
  const tokenHeader = req.headers.get("Authorization");
  if (tokenHeader) {
    const token = tokenHeader.split(" ")[1];
    if (token === `${JWT}`) {
      return res(ctx.json(USER_MOCK));
    }
  } else {
    return res(
      ctx.status(401),
      ctx.json({
        data: null,
        error: {
          status: 401,
          name: "UnauthorizedError",
          message: "Missing or invalid credentials",
          details: {},
        },
      })
    );
  }
});
export const handlers = [userHandler];
