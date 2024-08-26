import {
	SandpackCodeEditor,
	SandpackPreview,
	SandpackProvider,
	type SandpackProps,
	type SandpackProviderProps,
} from "@codesandbox/sandpack-react";
import styles from "./styles.module.scss";
import { useState } from "react";
import { RadioButton } from "./RadioButton";
import { devices, type Device } from "./devices";

export function MultiDeviceCodeEditor(props: SandpackProviderProps) {
	const firstFile = Object.keys(props?.files || {})[0];

	const options: SandpackProps["options"] = {
		...props.options,
		activeFile: firstFile,
		showRefreshButton: false,
	};

	const [selectedDevice, setSelectedDevice] = useState<Device>(devices[0]);

	function setDevice(name: string) {
		setSelectedDevice(devices.find((device) => device.name === name)!);
	}

	const isDeviceResizable = selectedDevice.name === 'resizable'

	return (
		<div className={styles.editor}>
			<div className={styles.devices}>
				{devices.map((device) => (
					<RadioButton
						key={device.name}
						name="device"
						value={device.name}
						checked={selectedDevice.name === device.name}
						onChange={(e) => setDevice((e.target as HTMLInputElement).value)}
					/>
				))}
			</div>

			<SandpackProvider
				template="static"
				theme="dark"
				{...props}
				options={options}
			>
				<SandpackCodeEditor />
				<div className={styles.preview}>
					<SandpackPreview
						style={{
							width: selectedDevice.width,
							height: selectedDevice.height,
							aspectRatio: selectedDevice.width / selectedDevice.height,
							transform: `scale(${selectedDevice.scale})`,
							overflow: isDeviceResizable ? 'hidden' : '',
							border: isDeviceResizable ? "1px solid black" : '',
							resize: 'both',
							// @ts-expect-error - custom properties are not supported in the type definition
							"--background": `url('/mockups/${selectedDevice.name}.png')`,
							"--inset": selectedDevice.inset,
							"--radius": selectedDevice.radius,
						}}
						showOpenInCodeSandbox={false}
						showRefreshButton={false}
					/>
				</div>
			</SandpackProvider>
		</div>
	);
}
