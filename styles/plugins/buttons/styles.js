const darken = require("../../../utils/colors").darken;

const properties = {
  borderWidth: "1px",
  borderColor: "transparent",
  backgroundColor: "transparent",
  borderRadius: {
    xs: "0.5rem",
    base: "0.5rem",
    sm: "0.5rem",
    lg: "0.5rem",
    xl: "0.5rem",
  },
  color: "#1a1a1a",
  fontSize: {
    xs: "0.75rem",
    base: "1rem",
    sm: "0.875rem",
    lg: "1.125rem",
    xl: "1.25rem",
  },
  fontWeight: 600,
  lineHeight: 1.4,
  paddingX: {
    // same for all sizes
    xs: "1.25em",
    base: "1.25em",
    sm: "1.25em",
    lg: "1.25em",
    xl: "1.25em",
  },
  paddingY: {
    //same for all sizes
    xs: "0.75em",
    base: "0.75em",
    sm: "0.75em",
    lg: "0.75em",
    xl: "0.75em",
  },
  textDecoration: "none",
  // whiteSpace: "",
  hoverBackground: "inherit",
  hoverColor: "#1a1a1a",
  hoverTextDecoration: "none",
  activeBackground: "inherit",
  activeBorderColor: "inherit",
  activeColor: "inherit",
  disabledOpacity: 0.65,
};

const createDefault = () => {
  return {
    ".btn": {
      alignItems: "center",
      backgroundColor: "transparent",
      border: `${properties.borderWidth} solid ${properties.borderColor}`,
      borderRadius: `${properties.borderRadius.base}`,
      color: properties.color,
      display: "inline-flex",
      fontFamily: "inherit",
      fontSize: properties.fontSize.base,
      fontWeight: properties.fontWeight,
      lineHeight: properties.lineHeight,
      justifyContent: "center",
      padding: `${properties.paddingY.base} ${properties.paddingX.base}`,
      textDecoration: properties.textDecoration,
      userSelect: "none",
      verticalAlign: "middle",
      "&:hover": {
        backgroundColor: properties.hoverBackground,
        color: properties.color,
        textDecoration: properties.hoverTextDecoration,
      },
      "&:focus": {
        backgroundColor: properties.backgroundColor,
        borderColor: properties.borderColor,
        color: properties.color,
        outline: 0,
      },
      "&:active": {
        backgroundColor: properties.activeBackground,
        borderColor: properties.activeBorderColor,
        color: properties.activeColor,
      },
      "&:disabled": {
        // pointerEvent: "none",
        opacity: properties.disabledOpacity,
      },
    },
  };
};

const createSizes = (sizes) => {
  let buttons = {};
  sizes.forEach((size) => {
    Object.assign(buttons, {
      [`.btn-${size}`]: {
        borderRadius: properties.borderRadius[size],
        fontSize: properties.fontSize[size],
        padding: `${properties.paddingY[size]} ${properties.paddingX[size]}`,
      },
    });
  });
  return buttons;
};

const createVariants = (colors) => {
  let buttons = {};
  Object.entries(colors).forEach(([color, value]) => {
    Object.assign(buttons, {
      [`.btn-${color}`]: {
        background: `${value}`,
        color: "#fff",
        "&:active": {
          color: "#fff",
          background: darken(color, 50),
          borderColor: darken(color, 25),
        },
        "&:hover": {
          color: "#fff",
          background: darken(color, 99),
          borderColor: darken(color, 50),
        },
      },
    });
  });
  return buttons;
};

module.exports = {
  createDefault,
  createSizes,
  createVariants,
};
