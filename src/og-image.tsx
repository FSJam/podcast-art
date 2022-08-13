import React from 'react';

import './fonts.css';
import OG2Avatar from './frames/OG2Avatar';
import OG1Avatar from './frames/OG1Avatar';

export const OGImage: React.FC<{
	episodeId: number;
	title: string;
	avatar: string | string[];
}> = ({episodeId, title, avatar}) => {
	console.log(typeof avatar);
	if (typeof avatar === 'object') {
		return (
			<OG2Avatar
				{...{
					episodeId,
					title,
					avatar,
				}}
			/>
		);
	}
	return (
		<OG1Avatar
			{...{
				episodeId,
				title,
				avatar,
			}}
		/>
	);
};
