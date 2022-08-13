import React from 'react';
import {AbsoluteFill, Img} from 'remotion';

import art from './og-1.png';

const fontFamily = 'Inter';

const absContainer: React.CSSProperties = {
	backgroundColor: '#0D1116',
};

const descriptionStyle: React.CSSProperties = {
	color: '#FFFFFF',
	fontSize: '3.5rem',
	fontFamily,
	fontWeight: 600,
	margin: 0,
	maxLines: 2,
	lineClamp: 2,
	whiteSpace: 'pre-wrap',
};

const episodeStyle: React.CSSProperties = {
	fontFamily,
	color: '#FFFFFF',
	fontSize: '2rem',
	margin: 0,
};

const textContainer: React.CSSProperties = {
	fontFamily,
	left: '3rem',
	position: 'absolute',
	width: '42rem',
	textAlign: 'left',
};

const imageContainer: React.CSSProperties = {
	top: 113,
	left: 754,
};

const imageStyle: React.CSSProperties = {
	borderRadius: '100%',
	height: 402,
	width: 402,
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
