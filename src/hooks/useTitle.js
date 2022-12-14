import { useEffect } from 'react';

const useTitle = (title) => {
	useEffect(() => {
		document.title = `${title} - SPA Service`;
	}, [title]);
};

export default useTitle;
