import styles from "./styles.module.scss";

export function Trigger({ id }: { id: string }) {
	return (
		<button
			aria-label="Ouvrir la preview responsive"
			data-micromodal-trigger={id}
			className={styles.trigger}
		>
			<svg
				width="106"
				height="58"
				viewBox="0 0 106 58"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M16.8857 28.9676C16.8857 28.6235 16.7491 28.2935 16.5057 28.0502C16.2624 27.8069 15.9324 27.6702 15.5884 27.6702L5.31302 27.6702L8.72084 24.2624C8.95001 24.0165 9.07477 23.6912 9.06884 23.3551C9.06291 23.019 8.92675 22.6983 8.68904 22.4606C8.45134 22.2229 8.13065 22.0867 7.79454 22.0808C7.45843 22.0749 7.13313 22.1996 6.88719 22.4288L1.26517 28.0508C1.02221 28.2941 0.885742 28.6238 0.885742 28.9676C0.885742 29.3114 1.02221 29.6412 1.26517 29.8845L6.88719 35.5065C7.00597 35.6339 7.1492 35.7362 7.30834 35.8071C7.46749 35.878 7.63929 35.9161 7.81349 35.9192C7.98769 35.9223 8.16073 35.8902 8.32227 35.825C8.48382 35.7597 8.63057 35.6626 8.75377 35.5394C8.87697 35.4162 8.97409 35.2695 9.03934 35.1079C9.10459 34.9464 9.13664 34.7733 9.13356 34.5991C9.13049 34.4249 9.09236 34.2531 9.02145 34.094C8.95054 33.9348 8.8483 33.7916 8.72084 33.6728L5.31302 30.265L15.5884 30.265C16.3045 30.265 16.8857 29.6838 16.8857 28.9676Z"
					fill="black"
				/>
				<rect
					x="24.1362"
					y="5.89111"
					width="58.8"
					height="46.8912"
					fill="white"
				/>
				<path
					d="M28.7734 0.855995C26.6143 0.855995 24.5437 1.8938 23.017 3.74111C21.4903 5.58842 20.6326 8.09391 20.6326 10.7064V47.2936C20.6326 52.731 24.2797 57.144 28.7734 57.144H77.6184C79.7774 57.144 81.8481 56.1062 83.3748 54.2589C84.9015 52.4116 85.7592 49.9061 85.7592 47.2936V10.7064C85.7592 8.09391 84.9015 5.58842 83.3748 3.74111C81.8481 1.8938 79.7774 0.855995 77.6184 0.855995H28.7734ZM25.2845 10.7064C25.2845 9.58676 25.6521 8.51298 26.3064 7.72127C26.9607 6.92957 27.8481 6.4848 28.7734 6.4848H77.6184C78.5437 6.4848 79.4311 6.92957 80.0854 7.72127C80.7397 8.51298 81.1073 9.58676 81.1073 10.7064V47.2936C81.1073 48.4132 80.7397 49.487 80.0854 50.2787C79.4311 51.0704 78.5437 51.5152 77.6184 51.5152H28.7734C27.8481 51.5152 26.9607 51.0704 26.3064 50.2787C25.6521 49.487 25.2845 48.4132 25.2845 47.2936V10.7064Z"
					fill="black"
				/>
				<path
					d="M89.5061 29.0324C89.5061 29.3764 89.6428 29.7064 89.8861 29.9497C90.1294 30.1931 90.4594 30.3297 90.8035 30.3297L101.079 30.3297L97.671 33.7376C97.4418 33.9835 97.3171 34.3088 97.323 34.6449C97.3289 34.981 97.4651 35.3017 97.7028 35.5394C97.9405 35.7771 98.2612 35.9133 98.5973 35.9192C98.9334 35.9251 99.2587 35.8004 99.5047 35.5712L105.127 29.9492C105.37 29.7059 105.506 29.3762 105.506 29.0324C105.506 28.6885 105.37 28.3588 105.127 28.1155L99.5047 22.4935C99.3859 22.366 99.2426 22.2638 99.0835 22.1929C98.9244 22.122 98.7526 22.0839 98.5784 22.0808C98.4042 22.0777 98.2311 22.1098 98.0696 22.175C97.908 22.2403 97.7613 22.3374 97.6381 22.4606C97.5149 22.5838 97.4178 22.7305 97.3525 22.8921C97.2873 23.0536 97.2552 23.2267 97.2583 23.4009C97.2614 23.5751 97.2995 23.7469 97.3704 23.906C97.4413 24.0651 97.5435 24.2084 97.671 24.3272L101.079 27.735L90.8035 27.735C90.0873 27.735 89.5061 28.3162 89.5061 29.0324Z"
					fill="black"
				/>
			</svg>
		</button>
	);
}
