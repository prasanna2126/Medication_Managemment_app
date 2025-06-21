import { render, screen } from "@testing-library/react";
import Login from "../components/Auth/Login";
import { AuthContext } from "../context/AuthContext";

test("renders login form", () => {
  render(
    <AuthContext.Provider value={{ setUser: jest.fn() }}>
      <Login />
    </AuthContext.Provider>
  );
  expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
});
