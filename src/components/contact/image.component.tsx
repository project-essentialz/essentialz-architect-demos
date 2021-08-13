import React from 'react';

// Styles
import styles from '../../styles/contact.module.css';

type ImageProps = {
	size: number;
	src: string;
	centered?: boolean;
	radius?: number;
}

export const Image = (props : ImageProps) => {
	const {
		size,
		src,
		centered = false,
		radius = 20,
	} = props;
	return (
		<div
			className={styles.contactImageContainer}
			style={{
				width: size,
				margin: centered ? 'auto' : '',
			}}
		>
			<img
				src={src}
				alt="contact"
				className={styles.contactImage}
				loading="lazy"
				style={{
					borderRadius: radius,
				}}
			/>
		</div>
	);
};
