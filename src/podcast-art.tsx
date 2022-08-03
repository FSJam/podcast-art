import React from 'react';

import './fonts.css';
import CoverAvatar2 from './frames/Cover2Avatar';
import CoverAvatar1 from './frames/Cover1Avatar';

export const PodcastArt: React.FC<{
	episodeId: number;
	title: string;
	avatar: string | string[];
}> = ({episodeId, title, avatar}) => {
	console.log(typeof avatar);
	if (typeof avatar === 'object') {
		return (
			<CoverAvatar2
				{...{
					episodeId,
					title,
					avatar,
				}}
			/>
		);
	}
	return (
		<CoverAvatar1
			{...{
				episodeId,
				title,
				avatar,
			}}
		/>
	);
};
