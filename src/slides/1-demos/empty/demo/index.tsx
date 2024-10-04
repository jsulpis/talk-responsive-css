import { MultiDeviceCodeEditor } from "../../../../components/MultiDeviceCodeEditor";

export function EmptyPageDemo() {
  return (
    <MultiDeviceCodeEditor
      files={{
        "/responsive.css": "",
        "/styles.css": "",
        "/index.html": "",
      }}
    />
  );
}
