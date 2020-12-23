import { useEffect } from 'react';

// Hook
export default function useLockBodyScroll(isLocked: boolean): void {
	useEffect(() => {
		const originalStyle = window.getComputedStyle(document.body).overflow;
		if (isLocked) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = originalStyle;
		}
		return () => (document.body.style.overflow = originalStyle);
	}, [isLocked]); // Empty array ensures effect is only run on mount and unmount
}
