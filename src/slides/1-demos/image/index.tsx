import html from "./index.html?raw";
import styles from "./styles.css?raw";
import responsive from "./responsive.css?raw";
import BackgroundImage from "./public/background-image.jpg?base64";
import { MultiDeviceCodeEditor } from "../../../components/MultiDeviceCodeEditor"

const imageUrl = `data:image/jpg;base64, ${BackgroundImage}`

export function Image() {
	return (
		<MultiDeviceCodeEditor
			files={{
				"/responsive.css": responsive,
				"/styles.css": styles,
				"/index.html": html.replace('{{imageUrl}}', imageUrl),
			}}
		/>
	);
}
