import html from "./index.html?raw";
import styles from "./styles.css?raw";
import responsive from "./responsive-final.css?raw";
import { MultiDeviceCodeEditor } from "../../../components/MultiDeviceCodeEditor";

export function TextCard() {
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
