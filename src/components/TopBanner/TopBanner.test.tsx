import React from "react";
import { render } from "@testing-library/react";

import TopBanner from "./TopBanner";

const testEnvironmentEntries = {
    topBannerProps: {
        distanceAlongGeometry: 10,
        distanceUnit: "mile",
        primary: {
          type: "turn", 
          modifier: "left", 
          text: "I 495 North / I 95"
        },
        secondary: {
          type: "turn", 
          modifier: "left", 
          text: "Baltimore / Northern Virginia"
        }
    }
  }


describe("TopBanner", () => {
  test("renders the TopBanner component", () => {
    render(<TopBanner {...testEnvironmentEntries.topBannerProps}/>);
  });
});