import html from "./index.html?raw";
import styles from "./styles.css?raw";
import responsive from "./responsive.css?raw";
import BackgroundImage from "./public/background-image.png?base64";
import { MultiDeviceCodeEditor } from "../../../components/MultiDeviceCodeEditor";

export function Gallery() {
	return (
		<MultiDeviceCodeEditor
			files={{
				"/responsive.css": responsive,
				"/styles.css": styles.replace('{{imageUrl}}', `data:image/png;base64, ${BackgroundImage}`),
				"/index.html": html,
			}}
		/>
	);
}
