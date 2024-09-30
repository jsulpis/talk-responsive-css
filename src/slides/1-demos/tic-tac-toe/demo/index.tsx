import html from "./index.html?raw";
import styles from "./styles.css?raw";
import responsive from "./responsive.css?raw";
import responsiveFinal from "./responsive-final.css?raw";
import { MultiDeviceCodeEditor } from "../../../../components/MultiDeviceCodeEditor";

export function TicTacToeDemo() {
	return (
		<MultiDeviceCodeEditor
			files={{
				"/responsive.css": responsive,
				"/responsive-final.css": responsiveFinal,
				"/styles.css": styles,
				"/index.html": html,
			}}
		/>
	);
}
