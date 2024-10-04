import html from "./index.html?raw";
import styles from "./styles.css?raw";
import responsive from "./responsive.css?raw";
import responsiveFinal from "./responsive-final.css?raw";
import { MultiDeviceCodeEditor } from "../../../../components/MultiDeviceCodeEditor";

export function TextCardDemo() {
  return (
    <MultiDeviceCodeEditor
      files={{
        "/responsive.css": responsive,
        "/styles.css": styles,
        "/index.html": html,
      }}
    />
  );
}

export function TextCardDemoFinal() {
  return (
    <MultiDeviceCodeEditor
      files={{
        "/responsive.css": responsiveFinal,
        "/styles.css": styles,
        "/index.html": html,
      }}
    />
  );
}
