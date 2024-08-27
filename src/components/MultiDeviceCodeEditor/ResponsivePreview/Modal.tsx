import { useEffect, useRef, type PropsWithChildren } from "react";
// @ts-expect-error the lib does not provide types
import MicroModal from "micromodal";
import interact from "interactjs";
import { PortalSSR } from "./PortalSSR";
import styles from "./styles.module.scss";

const previewScale = 0.5;
const previewResolution = { width: 2560, height: 1440 };

export function Modal({ id, children }: PropsWithChildren<{ id: string }>) {
	const modal = useRef(null);
	const resolutionDisplay = useRef<HTMLElement>(null);
	const preview = useRef<HTMLDivElement>(null);

	useEffect(() => {
		MicroModal.init({ awaitCloseAnimation: true });

		if (modal.current == null) {
			return;
		}

		interact(modal.current).resizable({
			edges: { left: true, right: true },
			listeners: {
				move: function (event) {
					const currentWidth = +event.target.style.width.replace("px", "");
					let newWidth = currentWidth + 2 * event.deltaRect.width;
					newWidth = Math.max(newWidth, 320 * previewScale);
					newWidth = Math.min(newWidth, 2800 * previewScale);

					event.target.style.width = `${newWidth}px`;

					if (resolutionDisplay.current) {
						const displayWidth = Math.floor(newWidth / previewScale);
						resolutionDisplay.current.innerHTML = `${displayWidth} x ${1440}`;
					}
				},
			},
		});
	}, []);

	return (
		<PortalSSR>
			<div className={styles.modal} id={id} aria-hidden="true">
				<div className={styles.overlay} tabIndex={-1}>
					<div
						ref={modal}
						className={styles.container}
						role="dialog"
						aria-modal="true"
						aria-label="preview Responsive"
						style={{
							width: previewResolution.width * previewScale,
							height: previewResolution.height * previewScale,
						}}
						onPointerDown={() => {
							// prevent interference of the iframe during the resize
							preview.current!.style.pointerEvents = "none";
						}}
						onPointerUp={() => {
							// re-enable scroll in the iframe
							preview.current!.style.pointerEvents = "auto";
						}}
					>
						<div
							ref={preview}
							className={styles.content}
							style={{
								height: `${100 / previewScale}%`,
								width: `${100 / previewScale}%`,
								transform: `scale(${previewScale})`,
								transformOrigin: "top left",
							}}
						>
							{children}
						</div>
						<span className={styles.resolution} ref={resolutionDisplay}>
							{`${previewResolution.width} x ${previewResolution.height}`}
						</span>
						<button
							className={styles.close}
							aria-label="Fermer la preview responsive"
							data-micromodal-close
						></button>
					</div>
				</div>
			</div>
		</PortalSSR>
	);
}
