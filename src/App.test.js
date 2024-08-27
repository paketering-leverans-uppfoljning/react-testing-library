import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("should render Loading.. text", () => {
  render(<App />);
  expect(screen.getByText("Loading..")).toBeInTheDocument();
});

test("should render the right amount of user cards", async () => {
  render(<App />);
  const user = userEvent.setup();
  await waitFor(async () => expect(screen.queryByText("Loading..")).not.toBeInTheDocument());

  const btn = screen.getByRole("button");
  await user.click(btn);

  const userCards = screen.getAllByText("Email:", { exact: false });
  expect(userCards).toHaveLength(3);
});

test("should display no user cards after press of toggle button", async () => {
  render(<App />);
  const user = userEvent.setup();
  await waitFor(async () =>
    expect(screen.queryByText("Loading..")).not.toBeInTheDocument()
  );

  const btn = screen.getByRole("button");
  await user.dblClick(btn);

  expect(
    screen.queryByText("Email:", { exact: false })
  ).not.toBeInTheDocument();
});

test("should display the text 'User card is hidden' after toggling the button", async () => {
  render(<App />);
  const user = userEvent.setup();
  await waitFor(async () => expect(screen.queryByText("Loading..")).toBeNull());

  const btn = screen.getByRole("button");
  await user.dblClick(btn);

  expect(screen.getByText("All users currently hidden")).toBeInTheDocument();
});
