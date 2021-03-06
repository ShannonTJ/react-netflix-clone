import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { FirebaseContext } from "../../context/firebase";
import { Signup } from "../../pages";

jest.mock("react-router-dom", () => ({
  Link: "Link",
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({}),
}));

const firebase = {
  auth: jest.fn(() => ({
    createUserWithEmailAndPassword: jest.fn(() =>
      Promise.resolve({
        user: {
          updateProfile: jest.fn(() => Promise.resolve("I'm signed up")),
        },
      })
    ),
  })),
};

describe("<Signup/>", () => {
  it("renders the sign up page with a form submission", async () => {
    const { getByTestId, getByPlaceholderText, queryByTestId } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <Signup />
        </FirebaseContext.Provider>
      </Router>
    );

    await act(async () => {
      await fireEvent.change(getByPlaceholderText("First name"), {
        target: { value: "Test" },
      });
      await fireEvent.change(getByPlaceholderText("Email address"), {
        target: { value: "test@gmail.com" },
      });
      await fireEvent.change(getByPlaceholderText("Password"), {
        target: { value: "password1234" },
      });
      fireEvent.click(getByTestId("sign-up"));

      expect(getByPlaceholderText("First name").value).toBe("Test");
      expect(getByPlaceholderText("Email address").value).toBe(
        "test@gmail.com"
      );
      expect(getByPlaceholderText("Password").value).toBe("password1234");
      expect(queryByTestId("error")).toBeFalsy();
    });
  });
});
