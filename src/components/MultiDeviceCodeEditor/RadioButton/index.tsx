import {type ComponentProps, useId} from "react";
import styles from "./styles.module.scss";

export function RadioButton({
	name,
	value,
	onChange,
	checked,
	width,
	height
}: ComponentProps<"input">) {
	const id = useId();
	return (
		<div className={styles.radio}>
			<label>
				<input
					type="radio"
					value={value}
					name={id}
					onChange={onChange}
					checked={checked}
					aria-label={value as string}
				/>
				<svg>
					<use href={`icons/devices-sprite.svg#${value}`}></use>
				</svg>
			</label>
			{checked && <span>{width} &times; {height}</span>}
	</div>
	);
}
