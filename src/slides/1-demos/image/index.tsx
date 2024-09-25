import html from "./index.html?raw";
import htmlFinal from "./index-final.html?raw";
import styles from "./styles.css?raw";
import responsive from "./responsive.css?raw";
import { MultiDeviceCodeEditor } from "../../../components/MultiDeviceCodeEditor";

const injectOrigin = (html: string) => {
	if (typeof window === "undefined") return html;
	return html.replaceAll("{origin}", window.location.origin);
};

export function Image() {
	return (
		<MultiDeviceCodeEditor
			files={{
				"/responsive.css": responsive,
				"/styles.css": styles,
				"/index.html": injectOrigin(html),
				"/index-final.html": injectOrigin(htmlFinal),
			}}
		/>
	);
}
