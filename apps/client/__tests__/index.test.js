import { render, screen, act, debug } from "@testing-library/react";
import { server } from "../mocks/server.js";
import { rest } from "msw";
import { waitFor, waitForElementToBeRemoved } from "@testing-library/dom";
import UserProfilePage from "../pages/user/index.jsx";
import { SWRConfig } from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

describe.skip("UserProfilePage", () => {
  it("renders correctly", async () => {
    console.log(window.document.cookie);
    act(() => {
      render(
        <SWRConfig value={{ fetcher }}>
          <UserProfilePage />
        </SWRConfig>
      );
    });
    // await waitForElementToBeRemoved(screen.queryByText("Loading..."));
    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });
  });
});
