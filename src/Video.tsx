import {Still} from 'remotion';
import {PreviewCard} from './PreviewCard';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Still
				id="PreviewCard"
				component={PreviewCard}
				width={3000}
				height={3000}
				defaultProps={{
					episode: 44,
					description: 'Qwik with Misko Heavery',
				}}
			/>
		</>
	);
};
