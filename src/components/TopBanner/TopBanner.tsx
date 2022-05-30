import React from "react";
// import { View, StyleSheet, Text } from "react-native";


// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       padding: 24,
//       backgroundColor: "#eaeaea"
//     },
//     title: {
//       marginTop: 16,
//       paddingVertical: 8,
//       borderWidth: 4,
//       borderColor: "#20232a",
//       borderRadius: 6,
//       backgroundColor: "#61dafb",
//       color: "#20232a",
//       textAlign: "center",
//       fontSize: 30,
//       fontWeight: "bold"
//     }
//   });


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