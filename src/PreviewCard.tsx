import React from 'react';
import {AbsoluteFill, Img} from 'remotion';
import './fonts.css';

import art from './art.png';
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
	fontSize: '14.5rem',
	fontFamily,
	fontWeight: 600,
	margin: 0,
	maxLines: 2,
	overflow: 'hidden',
	textOverflow: 'ellipsis',
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
const imageStyle: React.CSSProperties = {
	borderRadius: '100%',
	height: 1424,
	width: 1424,
	zIndex: 10,
};
export const PreviewCard: React.FC<{
	episode: number;
	description: string;
}> = ({episode, description}) => {
	return (
		<AbsoluteFill style={absContainer}>
			<AbsoluteFill style={imageContainer}>
				<Img
					style={imageStyle}
					src="https://pbs.twimg.com/profile_images/1389683812968194049/MhsEUijj_400x400.jpg"
				/>
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
