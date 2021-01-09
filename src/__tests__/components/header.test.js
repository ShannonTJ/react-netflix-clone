import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Header } from "../../components";

jest.mock("react-router-dom");

describe("<Header/>", () => {
  it("renders the basic <Header/> component with a background", () => {
    const { container, getByText, getByTestId } = render(
      <Header>
        <Header.Frame>
          <Header.Logo src="/logo.svg" alt="logo" />
          <Header.TextLink active="true">Hello I'm a link!</Header.TextLink>
        </Header.Frame>
      </Header>
    );
    expect(getByText("Hello I'm a link!")).toBeTruthy();
    expect(getByTestId("header-bg")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the basic <Header/> component without a background", () => {
    const { container, getByText, queryByTestId } = render(
      <Header>
        <Header.Frame>
          <Header.Logo src="/logo.svg" alt="logo" />
          <Header.ButtonLink>Sign In</Header.ButtonLink>
          <Header.TextLink active="false">Hello I'm a link!</Header.TextLink>
        </Header.Frame>
      </Header>
    );
    expect(getByText("Hello I'm a link!")).toBeTruthy();
    expect(queryByTestId("header-bg")).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
