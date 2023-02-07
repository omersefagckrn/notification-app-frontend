import React from 'react';

import { Modal as ModalType } from '../../@types/components';

class Warning extends React.Component<ModalType.WarningProps, ModalType.WarningStates> {
	render() {
		return (
			<div className='flex mt-2 rounded-lg bg-yellow-100 p-4 dark:bg-yellow-200' role='alert'>
				<svg className='h-5 w-5 flex-shrink-0 text-yellow-700 dark:text-yellow-800' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
					<path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z' clipRule='evenodd'></path>
				</svg>
				<div className='ml-3 text-sm font-medium text-yellow-700 dark:text-yellow-800'>{this.props.message}</div>
			</div>
		);
	}
}
export default Warning;
