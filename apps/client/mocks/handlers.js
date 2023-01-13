import { rest } from "msw";
import { USER_MOCK, JWT } from "./user.js";
import { faker } from "@faker-js/faker";
import { generateHomeMock } from "./home";

const userHandler = rest.get(`${process.env.NEXT_PUBLIC_API_URL}/api/users/me`, (req, res, ctx) => {
  const tokenHeader = req.headers.get("Authorization");
  if (tokenHeader) {
    const token = tokenHeader.split(" ")[1].trim();
    if (token === JWT) {
      return res(ctx.json(USER_MOCK));
    }
  } else if (!tokenHeader) {
    return res(ctx.status(302));
  }
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
});

const homesHandler = rest.get(`${process.env.NEXT_PUBLIC_API_URL}/api/homes`, (req, res, ctx) => {
  const total = faker.datatype.number({ max: 25 });
  return res(
    ctx.json({
      data: Array(total)
        .fill()
        .map(() => {
          return generateHomeMock();
        }),
      meta: {
        pagination: {
          page: 1,
          pageSize: 25,
          pageCount: 1,
          total: total,
        },
      },
    })
  );
});
const searchTerms = ["modern home", "apartment upscale"];
const imagesHandler = rest.get(
  `https://res.cloudinary.com/libaration/image/upload/*`,
  async (req, res, ctx) => {
    const image = await fetch(
      `https://source.unsplash.com/300x300/?${
        searchTerms[Math.floor(Math.random() * searchTerms.length)]
      }`
    ).then((res) => res.arrayBuffer());
    return res(
      ctx.set("Content-Length", image.byteLength.toString()),
      ctx.set("Content-Type", "image/png"),
      ctx.body(image)
    );
  }
);

export const handlers = [userHandler, homesHandler, imagesHandler];
