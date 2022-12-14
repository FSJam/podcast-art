import {Still} from 'remotion';
import {PodcastArt} from './podcast-art';
import {OGImage} from './og-image';
export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Still
				id="PodcastArt"
				component={PodcastArt}
				width={3000}
				height={3000}
				defaultProps={{
					episodeId: 79,
					title: `Widgets`,
					avatar: [
						"https://pbs.twimg.com/profile_images/1549247631867711488/hK_Qr-Dx_400x400.png",
						"https://pbs.twimg.com/profile_images/1530701793264402432/nTln6dx5_400x400.jpg"
				  ]
				}}
			/>
			<Still
				id="OGImage"
				component={OGImage}
				height={630}
				width={1200}
				defaultProps={{
					episodeId: 79,
					title: `Widgets`,
					avatar: [
						"https://pbs.twimg.com/profile_images/1549247631867711488/hK_Qr-Dx_400x400.png",
						"https://pbs.twimg.com/profile_images/1530701793264402432/nTln6dx5_400x400.jpg"
					]
				}}
			/>
		</>
	);
};
