import { useReducer } from 'react';

function useForceUpdate(): () => void {
	return useReducer(() => ({}), {})[1] as () => void;
}

export default useForceUpdate;
