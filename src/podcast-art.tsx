import React from 'react';
import {AbsoluteFill, Img} from 'remotion';
import './fonts.css';

import art from './art.png';
import art2 from './art-2.png';
const fontFamily = 'Inter';

const absContainer: React.CSSProperties = {
	backgroundColor: 'white',
};

const container: React.CSSProperties = {
	fontFamily,
	// Setting this property allows you to set a linebreak via URL parameter %0A
	whiteSpace: 'pre-wrap',
};

const descriptionStyle: React.CSSProperties = {
	color: '#FFFFFF',
	fontSize: 'max(240px, 35px)',
	fontFamily,
	fontWeight: 600,
	margin: 0,
	maxLines: 2,
	lineClamp: 2,
};

const episodeStyle: React.CSSProperties = {
	color: '#FFFFFF',
	fontSize: '6rem',
	margin: 0,
	paddingRight: '2rem',
};

const textContainer: React.CSSProperties = {
	left: '7rem',
	position: 'absolute',
	width: '76rem',
	textAlign: 'right',
};
const imageContainer: React.CSSProperties = {
	top: 991,
	left: 1430,
};

const imageContainerAvatar1: React.CSSProperties = {
	top: 776,
	left: 1963,
};
const imageContainerAvatar2: React.CSSProperties = {
	top: 1834,
	left: 1670,
};
const imageStyle2Avatars: React.CSSProperties = {
	borderRadius: '100%',
	height: 950,
	width: 950,
	zIndex: 10,
};
const imageStyle: React.CSSProperties = {
	borderRadius: '100%',
	height: 1424,
	width: 1424,
	zIndex: 10,
};
export const PodcastArt: React.FC<{
	episode: number;
	description: string;
	avatar: string;
	avatar2?: string;
}> = ({episode, description, avatar, avatar2}) => {
	if (avatar2) {
		return (
			<AbsoluteFill style={absContainer}>
				<AbsoluteFill style={imageContainerAvatar1}>
					<Img style={imageStyle2Avatars} src={avatar} />
				</AbsoluteFill>

				<AbsoluteFill style={imageContainerAvatar2}>
					<Img style={imageStyle2Avatars} src={avatar2} />
				</AbsoluteFill>

				<AbsoluteFill>
					<Img src={art2} />
				</AbsoluteFill>

				<AbsoluteFill
					style={{
						justifyContent: 'center',
						height: 'auto',
						margin: '40rem 0px 20rem',
					}}
				>
					<div style={textContainer}>
						<div style={container}>
							<p style={episodeStyle}>Episode {episode}</p>
							<p style={descriptionStyle}>{description}</p>
						</div>
					</div>
				</AbsoluteFill>
			</AbsoluteFill>
		);
	}
	return (
		<AbsoluteFill style={absContainer}>
			<AbsoluteFill style={imageContainer}>
				<Img style={imageStyle} src={avatar} />
			</AbsoluteFill>

			<AbsoluteFill>
				<Img src={art} />
			</AbsoluteFill>

			<AbsoluteFill
				style={{
					justifyContent: 'center',
					height: 'auto',
					margin: '40rem 0px 20rem',
				}}
			>
				<div style={textContainer}>
					<div style={container}>
						<p style={episodeStyle}>Episode {episode}</p>
						<p style={descriptionStyle}>{description}</p>
					</div>
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
