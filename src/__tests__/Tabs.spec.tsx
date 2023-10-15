import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Tabs from "../components/organisms/Tabs";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

const tabs = [
  { id: "1", title: "Tab One", content: <p>Tab content one</p> },
  { id: "2", title: "Tab Two", content: <p>Tab content two</p> },
];

describe("Tabs component", () => {
  test("should render correctly", () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Tabs tabs={tabs} />
      </ThemeProvider>
    );

    expect(getByRole("tab", { name: /Tab One/i })).toBeInTheDocument();
  });

  test("should render the default tab content correctly", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Tabs tabs={tabs} defaultSelectedTab="2" />
      </ThemeProvider>
    );

    expect(getByText(/Tab content two/i)).toBeInTheDocument();
  });

  test("should show the correct content when click on second tab", async () => {
    const { getByRole, findByText } = render(
      <ThemeProvider theme={theme}>
        <Tabs tabs={tabs} />
      </ThemeProvider>
    );

    const secondTab = getByRole("tab", { name: /Tab Two/i });
    userEvent.click(secondTab);

    expect(await findByText(/Tab content two/i)).toBeInTheDocument();
  });

  test("should show the correct content when click on first tab and the second is the default", async () => {
    const { getByRole, findByText } = render(
      <ThemeProvider theme={theme}>
        <Tabs tabs={tabs} defaultSelectedTab="2" />
      </ThemeProvider>
    );

    const firstTab = getByRole("tab", { name: /Tab One/i });
    userEvent.click(firstTab);

    expect(await findByText(/Tab content one/i)).toBeInTheDocument();
  });
});
