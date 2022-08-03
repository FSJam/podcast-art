import React from 'react';
import {AbsoluteFill, Img} from 'remotion';

import art from './art.png';

const fontFamily = 'Inter';

const absContainer: React.CSSProperties = {
	backgroundColor: '#363D40',
};

const descriptionStyle: React.CSSProperties = {
	color: '#FFFFFF',
	fontSize: '12rem',
	fontFamily,
	fontWeight: 600,
	margin: 0,
	maxLines: 2,
	lineClamp: 2,
	whiteSpace: 'pre-wrap',
};

const episodeStyle: React.CSSProperties = {
	color: '#FFFFFF',
	fontSize: '6rem',
	margin: 0,
	paddingRight: '2rem',
};

const textContainer: React.CSSProperties = {
	fontFamily,
	left: '7rem',
	position: 'absolute',
	width: '74rem',
	textAlign: 'right',
};
const imageContainer: React.CSSProperties = {
	top: 972,
	left: 1434,
};

const imageStyle: React.CSSProperties = {
	borderRadius: '100%',
	height: 1424,
	width: 1424,
	zIndex: 10,
};

const CoverAvatar1: React.FC<{
	episodeId: number;
	title: string;
	avatar: string;
}> = ({episodeId, title, avatar}) => {
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
					<p style={episodeStyle}>Episode {episodeId}</p>
					<p style={descriptionStyle}>{title}</p>
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};

export default CoverAvatar1;
