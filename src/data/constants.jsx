const shadows = {
  idle: "0 1px 8px 0 rgba(0, 0, 0, 0.16)",
  focused: "rgba(255, 71, 133, 0.4) 0px 1px 9px 2px", // anime tampan
  active: "rgba(0, 0, 0, 0.1) 0px 0px 0px 3em inset", // anime tampan
  hover: "rgba(0, 0, 0, 0.2) 0px 2px 6px 0px" // anime tampan
};

const fonts = {
  regular: "Linotte-Regular",
  semiBold: "Linotte-Semi-Bold"
};

const colors = {
  white: "rgb(255, 255, 255)",
  black: "#000000",
  blue: "#37a0f4",
  orange: "#f48c37",
  primary: {
    base: "rgb(255, 71, 133)", // anime tampan
    hover: "rgb(255, 45, 116)" // anime tampan
  },
  secondary: "#e25e5e", // anime tampan
  primaryText: "#6a7c95",
  disableText: "rgba(106, 124, 149, 0.4)",
  yellowCaution: "#fed330",
  greenApprove: "#26de81",
  redError: "#eb4e3b",
  pbShade1: "#a5d4fa",
  pbShade2: "#f7fbff",
  background: "#fbfdff",
  facebook: "#4460a0",
  line: "rgba(0, 0, 0, 0.12)"
};

const constant = { shadows, colors, fonts };

export default constant;

export { shadows, colors, fonts };
