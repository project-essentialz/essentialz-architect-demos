import React from 'react';

import {
	Container,
} from '.';

type BlankCardProps = {
	body: JSX.Element;
	footer?: JSX.Element;
};

export const BlankCard = (props : BlankCardProps) => {
	const {
		body,
		footer,
	} = props;
	return (
		<>
			<Container className="flex-1 flex flex-col p-8">
				{body}
			</Container>
			{footer && (
				<Container>
					<Container className="-mt-px flex divide-x divide-gray-200">
						<Container className="flex flex-col mx-auto text-center">
							{footer}
						</Container>
					</Container>
				</Container>
			)}
		</>
	);
};
