import { Config, defaultConfigOpts } from "./config";

export const { getConfig, setConfig } = (() => {
  let configOpts = defaultConfigOpts;
  return {
    getConfig: () => configOpts,
    setConfig: (newConfigOpts: Config) => (configOpts = newConfigOpts)
  };
})();
