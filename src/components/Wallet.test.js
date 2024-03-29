import React from "react";
import { shallow } from "enzyme";
import { Wallet } from "./Wallet";

describe("Wallet", () => {
  const props = { balance: 20 };
  const wallet = shallow(<Wallet {...props} />);

  it("renders correctly", () => {
    expect(wallet).toMatchSnapshot();
  });

  it("displays balance from props", () => {
    expect(wallet.find(".balance").text()).toEqual("Wallet balance: 20");
  });
});
