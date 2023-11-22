import UserCard from "./UserCard";
import { render, screen } from "@testing-library/react";

test("renders the props correctly", () => {
  const fakeUser = {
    name: "Kristian",
    email: "kristian.nilsson@consid.se",
    phone: "123-123-123",
  };
  render(<UserCard user={fakeUser} />);

  expect(screen.getByText("Kristian")).toBeInTheDocument();
  expect(
    screen.getByText("kristian.nilsson@consid.se", { exact: false })
  ).toBeInTheDocument();
  expect(screen.getByText("123-123-123", { exact: false })).toBeInTheDocument();
});
