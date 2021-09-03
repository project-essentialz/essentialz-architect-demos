/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

export const Image = (props : React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {
	return <img {...props} />;
};
