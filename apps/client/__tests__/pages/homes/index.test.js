import { render, act, screen } from "@testing-library/react";
import Page, { getStaticProps } from "../../../pages/homes";
import Homes from "../../../components/homes/allHomes/Homes";
import { waitFor, waitForElementToBeRemoved } from "@testing-library/dom";
jest.mock("react-markdown", () => {
  return {
    __esModule: true,
    default: () => {
      return "";
    },
  };
});
jest.mock("rehype-raw", () => {
  return {
    __esModule: true,
  };
});
jest.mock("remark-html", () => {
  return {
    __esModule: true,
  };
});
jest.mock("next/router", () => ({
  useRouter() {
    return {
      pathname: "",
    };
  },
}));
afterEach(() => {
  jest.clearAllMocks();
});

describe("Homes Index Page", () => {
  it("should always initially render 9 homes", async () => {
    await act(async () => {
      const response = await getStaticProps({});
      render(<Page {...response.props} />);
    });
    await waitForElementToBeRemoved(() => screen.queryAllByText("Loading..."));
    const homes = screen.queryAllByRole("homeContainer");
    expect(homes.length).toBe(9);
  });
});
