import { CodeEditor } from "../../../components/CodeEditor";
import html from "./index.html?raw";
import styles from "./styles.css?raw";
import responsive from "./responsive.css?raw";

export function Demo() {
	return (
		<CodeEditor
			files={{
				"/responsive.css": responsive,
				"/styles.css": styles,
				"/index.html": html,
			}}
		/>
	);
}
