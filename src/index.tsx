import * as React from "react";
import { render } from "react-dom";
import { User, getConfig, setConfig } from "./icon-lib";

import "./styles.css";

/**
 * Customize the colorKey mappings provided by the icon library.
 */
function configureColorKeys() {
  const config = getConfig();
  setConfig({
    ...config,
    colorMap: {
      ...config.colorMap,
      success: "yellowgreen",  // override key to color mapping
      mycolor: "purple"        // new color key
    }
  });
}

function App() {
  configureColorKeys();

  const demoIconSize = 36;

  return (
    <div className="App">
      <div>
        <User size={demoIconSize} />
        <User size={demoIconSize} solid />
      </div>
      <div>
        <User size={12} />
        <User />
        <User size={36} />
        <User size={48} />
        <User size={64} />
        <User size={72} />
      </div>
      <div>
        <User size={demoIconSize} colorKey="danger" />
        <User size={demoIconSize} solid colorKey="danger" />
        <User size={demoIconSize} colorKey="warning" />
        <User size={demoIconSize} solid colorKey="warning" />
        <User size={demoIconSize} colorKey="info" />
        <User size={demoIconSize} solid colorKey="info" />
        <User size={demoIconSize} colorKey="success" />
        <User size={demoIconSize} solid colorKey="success" />
        <User size={demoIconSize} colorKey="mycolor" />
        <User size={demoIconSize} solid fill="pink" />
      </div>
      <div>
        <User size={demoIconSize} alerted />
        <User size={demoIconSize} solid alerted />
        <User size={demoIconSize} alerted={{ colorKey: "warning" }} />
        <User size={demoIconSize} solid alerted={{ colorKey: "warning" }} />
        <User size={demoIconSize} alerted={{ colorKey: "info" }} />
        <User size={demoIconSize} solid alerted={{ colorKey: "info" }} />
        <User size={demoIconSize} alerted={{ colorKey: "success" }} />
        <User size={demoIconSize} solid alerted={{ colorKey: "success" }} />
        <User size={demoIconSize} alerted={{ colorKey: "mycolor" }} />
        <User size={demoIconSize} solid alerted={{ fill: "pink" }} />
      </div>
      <div>
        <User size={demoIconSize} badged />
        <User size={demoIconSize} solid badged />
        <User size={demoIconSize} badged={{ colorKey: "warning" }} />
        <User size={demoIconSize} solid badged={{ colorKey: "warning" }} />
        <User size={demoIconSize} badged={{ colorKey: "info" }} />
        <User size={demoIconSize} solid badged={{ colorKey: "info" }} />
        <User size={demoIconSize} badged={{ colorKey: "success" }} />
        <User size={demoIconSize} solid badged={{ colorKey: "success" }} />
        <User size={demoIconSize} badged={{ colorKey: "mycolor" }} />
        <User size={demoIconSize} solid badged={{ fill: "pink" }} />
      </div>

      <div style={{ marginTop: "24px" }}>
        <span>
          Icon from{" "}
          <a href="https://clarity.design/icons" target="_blank">
            clarity design
          </a>{" "}
          system.
        </span>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
