import React from "react";

export interface TopBannerProps {
    distanceAlongGeometry: number;
    distanceUnit: string
    primary: {
        type: string,
        modifier: string,
        text: string,
    },
    secondary: {
        type: string,
        modifier: string,
        text: string,
    }
  }

const TopBanner = (props: TopBannerProps) => {
    return(
        <div>
            <div>{props.distanceAlongGeometry}{props.distanceUnit}</div>
            <div>{props.primary.type}{props.primary.modifier}{props.primary.text}</div>
            <div>{props.secondary.type}{props.secondary.modifier}{props.secondary.text}</div>
        </div>
    )
};

export default TopBanner;