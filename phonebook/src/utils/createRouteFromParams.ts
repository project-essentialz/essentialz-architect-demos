export const createRouteFromParams = (route: string, params: Record<string, string>) => {
	return route.split('/').map(path => (path.startsWith(':') ? params[path.replace(':', '')] : path)).join('/');
};
