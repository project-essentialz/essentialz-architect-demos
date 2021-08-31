import React from 'react';

type SwitchElementProps = {
	value: string;
	icon?: any;
	onSwitch: any;
}

type SwitchProps = {
	on: SwitchElementProps;
	off: SwitchElementProps;
} & React.HTMLProps<HTMLSpanElement>;

export const Switch = (props : SwitchProps) => {
	const {
		on,
		off,
		className,
	} = props;
	return (
		<span className={`relative z-0 inline-flex shadow-sm rounded-md ${className}`}>
			<button
				type="button"
				className={`
                relative
                inline-flex
                items-center
                px-2 py-2
                rounded-l-md
                border border-gray-300
                bg-white text-sm font-medium
                text-gray-500 hover:bg-gray-50
                focus:z-10 focus:outline-none focus:ring-1
                focus:ring-indigo-500 focus:border-indigo-500
                `}
				onClick={on.onSwitch}
			>
				{on.icon}
				<span>{on.value}</span>
			</button>
			<button
				type="button"
				className={`
                -ml-px
                relative
                inline-flex
                items-center
                px-2 py-2
                rounded-r-md
                border border-gray-300
                bg-white text-sm font-medium
                text-gray-500 hover:bg-gray-50
                focus:z-10 focus:outline-none focus:ring-1
                focus:ring-indigo-500 focus:border-indigo-500
                `}
				onClick={off.onSwitch}
			>
				<span>{off.value}</span>
				{off.icon}
			</button>
		</span>
	);
};
