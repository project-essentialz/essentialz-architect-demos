import React from 'react';

export const ContactImage: React.FC<React.ComponentProps<'img'>> = (props) => {
	const {
		className, alt, ...rest
	} = props;
	return (
		<img className={`h-12 w-12 rounded-full ${className}`} {...rest} alt={alt || ''} />
	);
};
