import { Sandpack, type SandpackProps } from "@codesandbox/sandpack-react";
import "./styles.scss";

export function CodeEditor(props: SandpackProps) {
	const firstFile = Object.keys(props?.files || {})[0];

	const options: SandpackProps["options"] = {
		...props.options,
		activeFile: firstFile,
		showRefreshButton: false,
	};

	return (
		<Sandpack template="static" theme="dark" {...props} options={options} />
	);
}
