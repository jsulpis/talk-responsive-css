import {
  SandpackCodeEditor,
  SandpackPreview,
  SandpackProvider,
  useActiveCode,
  useSandpack,
  type SandpackFile,
  type SandpackProps,
  type SandpackProviderProps,
} from "@codesandbox/sandpack-react";
import styles from "./styles.module.scss";
import { useEffect, useId, useState } from "react";
import { RadioButton } from "./RadioButton";
import { devices, type Device } from "./devices";
import {
  ResponsivePreview,
  ResponsivePreviewTrigger,
} from "./ResponsivePreview";

const SHOW_FILES_STATE: "initial" | "final" = "initial";

export function MultiDeviceCodeEditor(props: SandpackProviderProps) {
  const firstFile = Object.keys(props?.files || {})[0];
  const responsivePreviewId = useId();

  if (SHOW_FILES_STATE === "final" && props.files?.["/responsive-final.css"]) {
    props.files["/responsive.css"] = props.files["/responsive-final.css"];
  }
  if (SHOW_FILES_STATE === "final" && props.files?.["/index-final.html"]) {
    props.files["/index.html"] = props.files["/index-final.html"];
  }
  delete props.files?.["/responsive-final.css"];
  delete props.files?.["/index-final.html"];

  const options: SandpackProps["options"] = {
    ...props.options,
    activeFile: firstFile,
    showRefreshButton: false,
  };

  if (props.files?.["/index.html"]) {
    props.files["/template.html"] = props.files["/index.html"];
    props.files["/index.html"] = {
      code: withHtmlBoilerplate(props.files["/index.html"]),
      hidden: true,
    };
  }

  const [selectedDevice, setSelectedDevice] = useState<Device>(devices[0]);

  function setDevice(name: string) {
    setSelectedDevice(devices.find((device) => device.name === name)!);
  }

  return (
    <div className={styles.editor}>
      <div className={styles.devices}>
        {devices.map((device) => (
          <RadioButton
            key={device.name}
            name="device"
            value={device.name}
            checked={selectedDevice.name === device.name}
            width={selectedDevice.width}
            height={selectedDevice.height}
            onChange={(e) => setDevice((e.target as HTMLInputElement).value)}
          />
        ))}
        <span role="separator"></span>
        <ResponsivePreviewTrigger id={responsivePreviewId} />
      </div>

      <SandpackProvider
        template="static"
        theme="dark"
        {...props}
        options={options}
      >
        <SandpackCodeEditor />
        <TemplateCodeWatcher />

        <div className={styles.preview}>
          <SandpackPreview
            style={{
              width: selectedDevice.width,
              height: selectedDevice.height,
              aspectRatio: selectedDevice.width / selectedDevice.height,
              transform: `scale(${selectedDevice.scale})`,
              // @ts-expect-error - custom properties are not supported in the type definition
              "--background": `url('/mockups/${selectedDevice.name}.png')`,
              "--inset": selectedDevice.inset,
              "--radius": selectedDevice.radius,
            }}
            showOpenInCodeSandbox={false}
            showRefreshButton={false}
          />
        </div>

        <ResponsivePreview id={responsivePreviewId}>
          <SandpackPreview
            style={{ height: "100%", width: "100%" }}
            showOpenInCodeSandbox={false}
            showRefreshButton={false}
          />
        </ResponsivePreview>
      </SandpackProvider>
    </div>
  );
}

/**
 * Because of the custom behavior of the `template.html` file, we need to
 * manually refresh the `index.html` file whenever the template is udpated.
 */
function TemplateCodeWatcher() {
  const { sandpack } = useSandpack();
  const { code } = useActiveCode();

  useEffect(() => {
    if (sandpack.activeFile === "/template.html") {
      sandpack.updateFile("/index.html", withHtmlBoilerplate(code));
    }
  }, [code, sandpack.activeFile]);

  return null;
}

function withHtmlBoilerplate(template: string | SandpackFile) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Demo</title>
  <link rel="stylesheet" href="./styles.css" />
  <link rel="stylesheet" href="./responsive.css" />
  </head>
  <body>
    ${typeof template === "string" ? template : template.code}
  </body>
</html>`;
}
