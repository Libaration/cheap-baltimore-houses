import { render, screen, act, debug } from "@testing-library/react";
import { waitFor, waitForElementToBeRemoved } from "@testing-library/dom";
import UserProfilePage from "../../../pages/user/index.jsx";
import { SWRConfig } from "swr";
import { fetcherWithAuth } from "../../../lib/SWRCalls/config.js";
import { loginWithTokenOrUser } from "../../../lib/SWRCalls/session.js";
import { USER_MOCK, JWT } from "../../../mocks/user.js";

describe("UserProfilePage Bad Auth", () => {
  it("renders a 401 error when JWT token is invalid", async () => {
    loginWithTokenOrUser({ jwt: "INVALID_TOKEN" });
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
describe("UserProfilePage Good Auth", () => {
  beforeEach(() => {
    loginWithTokenOrUser({ jwt: JWT });
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
