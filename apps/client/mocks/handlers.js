import { rest } from "msw";
const userHandler = rest.get(`${process.env.NEXT_PUBLIC_API_URL}/api/users/me`, (req, res, ctx) => {
  // console.log(req.headers.get("Authorization"));
  // if (!req.headers.get("Authorization")) {
  //   return res(
  //     ctx.status(401),
  //     ctx.json({
  //       message: [
  //         {
  //           messages: [
  //             {
  //               id: "Auth.form.error.invalid",
  //               message: "Identifier or password invalid",
  //             },
  //           ],
  //         },
  //       ],
  //     })
  //   );
  // }
  return res(
    ctx.json({
      id: 24,
      username: "ok@ok.com",
      email: "ok@ok.com",
      provider: "local",
      confirmed: true,
      blocked: false,
      createdAt: "2023-01-11T06:18:38.000Z",
      updatedAt: "2023-01-11T06:18:38.000Z",
    })
  );
});
export const handlers = [userHandler];
