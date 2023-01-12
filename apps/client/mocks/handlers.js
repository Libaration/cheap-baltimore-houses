import { rest } from "msw";
import { USER_MOCK } from "./user.js";
const userHandler = rest.get(`${process.env.NEXT_PUBLIC_API_URL}/api/users/me`, (req, res, ctx) => {
  const tokenHeader =
    req.headers.get("Authorization") && req.headers.get("Authorization").split(" ")[1];
  if (tokenHeader !== "undefined") {
    return res(ctx.json(USER_MOCK));
  } else {
    return res(
      ctx.status(401),
      ctx.json({
        message: [
          {
            messages: [
              {
                id: "Auth.Error.NoAuthorizationHeader",
                message: "No authorization token was found",
              },
            ],
          },
        ],
      })
    );
  }
});
export const handlers = [userHandler];
