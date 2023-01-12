import { render, screen, act, debug } from "@testing-library/react";
import { server } from "../../../mocks/server.js";
import { rest } from "msw";
import { waitFor, waitForElementToBeRemoved } from "@testing-library/dom";
import UserProfilePage from "../../../pages/user/index.jsx";
import { SWRConfig } from "swr";
import { fetcherWithAuth } from "../../../lib/SWRCalls/config.js";
import { loginWithTokenOrUser } from "../../../lib/SWRCalls/session.js";
import { USER_MOCK } from "../../../mocks/user.js";

describe("UserProfilePage No Bearer Token", () => {
  it("renders a 401 error when no JWT is in the header", async () => {
    act(() => {
      render(
        <SWRConfig value={{ fetcherWithAuth, provider: () => new Map(), dedupingInterval: 0 }}>
          <UserProfilePage />
        </SWRConfig>
      );
    });
    await waitFor(() => {
      expect(screen.queryByText("401 Not Authorized")).toBeInTheDocument();
    });
  });
});
describe("UserProfilePage With Bearer Token", () => {
  beforeEach(() => {
    loginWithTokenOrUser({ jwt: "TOKEN_TEST_8675309" });
    act(() => {
      render(
        <SWRConfig value={{ fetcherWithAuth, provider: () => new Map(), dedupingInterval: 0 }}>
          <UserProfilePage />
        </SWRConfig>
      );
    });
  });
  it("renders UserProfilePage when a JWT is in the header", async () => {
    await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));
    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
      expect(screen.queryByText("401 Not Authorized")).not.toBeInTheDocument();
      expect(screen.queryByText("Profile")).toBeInTheDocument();
    });
  });

  it("renders users information on the page", async () => {
    await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));
    await waitFor(() => {
      const email = screen.queryAllByText(new RegExp(USER_MOCK.email, "i"));
      expect(email.length).toBeGreaterThan(0);
    });
  });
});
