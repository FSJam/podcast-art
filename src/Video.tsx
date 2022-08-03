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
					// EpisodeId: 46,
					// title: 'Layer0 with Ishan Anand and Mark Brocato',
					// avatar: [
					// 	'https://d33wubrfki0l68.cloudfront.net/46091d46bed298c060c3fa6a57f032d71ea7a04d/fabb6/img/speakers/ishananand.jpg',
					// 	'https://media-exp1.licdn.com/dms/image/C4D03AQFFfyEka2bxcg/profile-displayphoto-shrink_800_800/0/1597698276207?e=1665014400&v=beta&t=mZw39v9WGjrigG78nbpkhSXowrfTzSAf0EpFvDtHe04',
					// ],
					// episodeId: 88,
					// title: `Chris' favorite episode of the show.`,
					// avatar:
					// 	'https://pbs.twimg.com/profile_images/1530701793264402432/nTln6dx5_400x400.jpg',

					episodeId: 67,
					title: 'Developer Experience Engineering with \n Prince Wilson',
					avatar:
						'https://pbs.twimg.com/profile_images/1539733456887988230/mlTGotGL_400x400.jpg',
				}}
			/>
		</>
	);
};
