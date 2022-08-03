import {Still} from 'remotion';
import {PodcastArt} from './podcast-art';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Still
				id="PodcastArt"
				component={PodcastArt}
				width={3000}
				height={3000}
				defaultProps={{
					episode: 88,
					description: `Chris' favorite episode of the show.`,
					avatar:
						'https://pbs.twimg.com/profile_images/1530701793264402432/nTln6dx5_400x400.jpg',
					avatar2: undefined,
				}}
			/>
		</>
	);
};
