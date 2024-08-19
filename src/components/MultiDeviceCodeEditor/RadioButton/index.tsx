import type { ComponentProps } from "react";
import styles from "./styles.module.scss";

export function RadioButton({
	name,
	value,
	onChange,
	checked,
}: ComponentProps<"input">) {
	return (
		<label className={styles.radio}>
			<input
				type="radio"
				value={value}
				name={name}
				onChange={onChange}
				checked={checked}
				aria-label={value as string}
			/>
			<svg>
				<use href={`icons/devices-sprite.svg#${value}`}></use>
			</svg>
		</label>
	);
}
