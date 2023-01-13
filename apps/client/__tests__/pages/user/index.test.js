import { render, screen, act, debug } from "@testing-library/react";
import { waitFor, waitForElementToBeRemoved } from "@testing-library/dom";
import UserProfilePage, { getServerSideProps } from "../../../pages/user/index.jsx";
import { SWRConfig } from "swr";
import { JWT, USER_MOCK } from "../../../mocks/user.js";
import { loginWithTokenOrUser, logout } from "../../../lib/SWRCalls/session.js";

afterEach(() => {
  jest.clearAllMocks();
});
beforeEach(() => {
  jest.resetModules();
});

describe("UserProfilePage Bad Auth", () => {
  it("redirects when not logged in", async () => {
    act(() => {
      render(
        <SWRConfig value={{ provider: () => new Map(), dedupingInterval: 0 }}>
          <UserProfilePage />
        </SWRConfig>
      );
    });
    await waitFor(async () => {
      const response = await getServerSideProps({});
      expect(response).toEqual({ redirect: { destination: "/user/register", permanent: false } });
    });
  });
  it("renders a 401 error when JWT token is invalid", async () => {
    loginWithTokenOrUser({ jwt: "INVALID_TOKEN" });
    act(() => {
      render(
        <SWRConfig value={{ provider: () => new Map(), dedupingInterval: 0 }}>
          <UserProfilePage />
        </SWRConfig>
      );
    });
    await waitFor(async () => {
      expect(screen.queryByText("401 Not Authorized")).toBeInTheDocument();
    });
  });
});

describe("UserProfilePage Good Auth", () => {
  beforeEach(() => {
    loginWithTokenOrUser({ jwt: JWT });
    act(() => {
      render(
        <SWRConfig value={{ provider: () => new Map(), dedupingInterval: 0 }}>
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
