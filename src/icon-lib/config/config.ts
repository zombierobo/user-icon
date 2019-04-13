import { color } from "./constants";

export interface Config {
  colorMap: { [colorKey: string]: string };
  iconSize: number;
  fillOpts: {
    fill: string;
    alertColorKey: string;
    badgeColorKey: string;
  };
}

export const defaultConfigOpts: Config = {
  colorMap: {
    info: color.info,
    danger: color.danger,
    warning: color.warning,
    highlight: color.highlight,
    inverse: color.inverse,
    success: color.success
  },
  iconSize: 16,
  fillOpts: {
    fill: "currentColor",
    alertColorKey: "danger",
    badgeColorKey: "danger"
  }
};
