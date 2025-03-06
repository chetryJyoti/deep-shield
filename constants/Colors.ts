/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const primaryColor = "#2f96ff";
const primaryColorDark = "#2f96ff"; // You can keep the same or adjust for dark mode

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: primaryColor,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: primaryColor,
    primary: primaryColor,
    secondary: "#53a8ff", // Lighter shade of primary
    accent: "#0070e0", // Darker shade of primary
    subtle: "#e6f2ff", // Very light shade for backgrounds
    border: "#deeeff", // Light shade for borders
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: primaryColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: primaryColorDark,
    primary: primaryColorDark,
    secondary: "#1a7fd1", // Darker shade for secondary in dark mode
    accent: "#5dabff", // Lighter shade for accent in dark mode
    subtle: "#1a2633", // Dark subtle background
    border: "#2a3846", // Dark border color
  },
};

// #ecfdf5
// #d1fae5
// #a7f3d0
// #6ee7b7
// #34d399
// #10b981
// #059669
// #047857
// #065f46
// #064e3b
// #022c22
