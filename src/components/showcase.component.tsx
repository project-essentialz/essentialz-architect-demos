import React, { useState } from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';
import { CodeIcon, LightningBoltIcon } from '@heroicons/react/solid';

import {
	Container,
	Switch,
} from '.';

type ShowcaseProps = {
	code: string;
	component: JSX.Element;
};

export const Showcase = (props : ShowcaseProps) => {
	const {
		code,
		component,
	} = props;
	const [codeMenu, setCodeMenu] = useState(false);

	return (
		<Container
			className="flex flex-col items-center pl-5 pr-5 lg:pl-36 lg:pr-36"
		>
			<Switch
				on={{
					value: 'App',
					icon: <LightningBoltIcon className="w-4 mr-1" />,
					onSwitch: () => setCodeMenu(false),
				}}
				off={{
					value: 'Code',
					icon: <CodeIcon className="w-4 ml-1" />,
					onSwitch: () => setCodeMenu(true),
				}}
				className="mt-5"
			/>
			<Container
				className="p-10 m-5 overflow-scroll h-96 w-full border-grey border-solid border-2 rounded-xl "
			>
				<Container
					className={codeMenu ? 'hidden' : ''}
				>
					{component}
				</Container>
				<Container
					className={codeMenu ? '' : 'hidden'}
				>
					<CopyBlock
						text={code}
						language="ts"
						showLineNumbers
						theme={dracula}
						codeBlock
					/>
				</Container>
			</Container>
		</Container>
	);
};
