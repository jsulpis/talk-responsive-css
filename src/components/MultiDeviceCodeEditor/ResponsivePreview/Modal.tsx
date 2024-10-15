import { useEffect, useRef, type PropsWithChildren } from "react";
// @ts-expect-error the lib does not provide types
import MicroModal from "micromodal";
import interact from "interactjs";
import { PortalSSR } from "./PortalSSR";
import styles from "./styles.module.scss";

export function Modal({ id, children }: PropsWithChildren<{ id: string }>) {
	const modal = useRef<HTMLDivElement>(null);
	const resolutionDisplay = useRef<HTMLElement>(null);
	const preview = useRef<HTMLDivElement>(null);
	const overlay = useRef<HTMLDivElement>(null);

	const previewResolution = useRef({ width: 2560, height: 1440 });
	const previewScale = useRef(1);

	useEffect(() => {
		/**
		 * Adjust the scale of the modal depending on the screen resolution
		 */
		function updateScale() {
			if (!overlay.current || !modal.current || !preview.current) {
				return;
			}
			const initialWidth = Math.min(0.8 * window.innerWidth, 2500);
			previewScale.current = initialWidth / 2560;
			overlay.current.style.fontSize = `${previewScale.current}rem`;

			Object.assign(modal.current.style, {
				width: `${previewResolution.current.width * previewScale.current}px`,
				height: `${previewResolution.current.height * previewScale.current}px`,
			});

			Object.assign(preview.current.style, {
				width: `${100 / previewScale.current}%`,
				height: `${100 / previewScale.current}%`,
				transform: `scale(${previewScale.current})`,
			});
		}

		updateScale();

		window.addEventListener("resize", updateScale);
		return () => {
			window.removeEventListener("resize", updateScale);
		};
	}, []);

	useEffect(() => {
		MicroModal.init({ awaitCloseAnimation: true });

		if (modal.current == null) {
			return;
		}

		interact(modal.current).resizable({
			edges: { left: true, right: true },
			listeners: {
				move: function (event) {
					const currentModalWidth = +event.target.style.width.replace("px", "");
					let newModalWidth = currentModalWidth + 2 * event.deltaRect.width;
					newModalWidth = Math.max(newModalWidth, 320 * previewScale.current);
					newModalWidth = Math.min(newModalWidth, 2800 * previewScale.current);

					const newDisplayWidth = Math.floor(
						newModalWidth / previewScale.current
					);
					previewResolution.current.width = newDisplayWidth;

					event.target.style.width = `${newModalWidth}px`;

					if (resolutionDisplay.current) {
						resolutionDisplay.current.innerHTML = `${newDisplayWidth} &times; ${1440}`;
					}
				},
			},
		});
	}, []);

	return (
		<PortalSSR>
			<div className={styles.modal} id={id} aria-hidden="true">
				<div ref={overlay} className={styles.overlay} tabIndex={-1}>
					<button
						className={styles.close}
						aria-label="Fermer la preview responsive"
						data-micromodal-close
					>
						✕
					</button>
					<div
						ref={modal}
						className={styles.container}
						role="dialog"
						aria-modal="true"
						aria-label="preview Responsive"
						onPointerDown={() => {
							// prevent interference of the iframe during the resize
							preview.current!.style.pointerEvents = "none";
						}}
						onPointerUp={() => {
							// re-enable scroll in the iframe
							preview.current!.style.pointerEvents = "auto";
						}}
					>
						<span className={styles.resolution} ref={resolutionDisplay}>
							{previewResolution.current.width} &times; {previewResolution.current.height}
						</span>
						<div ref={preview} className={styles.content}>
							{children}
						</div>
					</div>
				</div>
			</div>
		</PortalSSR>
	);
}
