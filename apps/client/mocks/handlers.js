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
  const total = req.url.searchParams.get("pagination[pageSize]");
  const homes = Array.from({ length: total }, () => generateHomeMock());
  return res(
    ctx.json({
      data: homes,
      meta: {
        pagination: {
          page: 1,
          pageSize: total,
          pageCount: 6,
          total: total,
        },
      },
    })
  );
});

const homeHandler = rest.get(`${process.env.NEXT_PUBLIC_API_URL}/api/homes/*`, (req, res, ctx) => {
  return res(
    ctx.json({
      home: generateHomeMock(),
    })
  );
});

const imagesHandler = rest.get(
  `https://res.cloudinary.com/libaration/image/upload/*`,
  async (req, res, ctx) => {
    const image = await fetch(`/mock_images/${faker.datatype.number({ max: 100 })}.jpeg`).then(
      (res) => res.arrayBuffer()
    );
    return res(
      ctx.set("Content-Length", image.byteLength.toString()),
      ctx.set("Content-Type", "image/png"),
      ctx.body(image)
    );
  }
);

export const handlers = [userHandler, homesHandler, imagesHandler, homeHandler];
