import React from 'react';

export type ContentProps = {
	fieldName: string;
	className?: string;
};

type Props = {
	fields: ContentProps[];
};

const Wrapper:React.FC<React.HTMLProps<HTMLUListElement>> = (props) => {
	const {
		children,
		...rest
	} = props;
	return (
		<ul
			{...rest}
		>
			{children}
		</ul>
	);
};

const HeaderItem:React.FC<ContentProps> = (props) => {
	const {
		fieldName,
		...rest
	} = props;

	return (
		<li {...rest}>{fieldName}</li>
	);
};

const Header = (props : Props) => {
	const { fields } = props;
	return (
		<div>
			{[...fields].map(item => (
				<HeaderItem {...item} />
			))}
		</div>
	);
};

const BodyWrapper:React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
	const { children } = props;
	return (
		<div>
			{children}
		</div>
	);
};

const Table = (props : Props & React.HTMLProps<HTMLElement>) => {
	const {
		fields,
		children,
	} = props;
	return (
		<Wrapper>
			<Header
				fields={fields}
			/>
			<BodyWrapper>
				{children}
			</BodyWrapper>
		</Wrapper>
	);
};

export {
	Table,
};
