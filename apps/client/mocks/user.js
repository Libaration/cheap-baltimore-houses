import { generateHomeMock } from "./home";
export const USER_MOCK = {
  id: 100,
  username: "test@test.com",
  email: "test@test.com",
  provider: "local",
  confirmed: true,
  blocked: false,
  createdAt: "2023-01-11T06:18:38.000Z",
  updatedAt: "2023-01-11T06:18:38.000Z",
  liked_homes: Array(10)
    .fill()
    .map(() => {
      return generateHomeMock();
    }),
};
export const JWT = "TEST_TOKEN_8675309";
