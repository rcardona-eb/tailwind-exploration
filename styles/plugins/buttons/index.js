const plugin = require("tailwindcss/plugin");
const styles = require("./styles");

module.exports = plugin.withOptions(function (options = {}) {
  return function ({ addComponents, theme }) {
    const defaultSizes = ["xs", "sm", "lg", "xl"];
    const sizes = options.sizes ?? defaultSizes;
    const colors = theme("colors");
    const buttons = {
      ...styles.createDefault(),
      ...styles.createSizes(sizes),
      ...styles.createVariants(Object.keys(colors)),
    };

    // console.log(buttons);

    addComponents([buttons]);
  };
});
