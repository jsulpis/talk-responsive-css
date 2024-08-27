import type { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

export function PortalSSR({ children }: PropsWithChildren) {
	if (typeof window != "undefined") {
		return createPortal(children, document.body);
	} else {
		return children;
	}
}
