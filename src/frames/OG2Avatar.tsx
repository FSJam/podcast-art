import React from 'react';
import {AbsoluteFill, Img} from 'remotion';

import art2 from './og-2.png';

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

const imageContainerAvatar1: React.CSSProperties = {
	top: 45,
	left: 915,
};

const imageContainerAvatar2: React.CSSProperties = {
	top: 338,
	left: 835,
};

const imageStyle1Avatars: React.CSSProperties = {
	borderRadius: '100%',
	height: 259,
	width: 259,
	zIndex: 10,
};

const imageStyle2Avatars: React.CSSProperties = {
	borderRadius: '100%',
	height: 259,
	width: 259,
	zIndex: 10,
};

const CoverAvatar2: React.FC<{
	episodeId: number;
	title: string;
	avatar: string[];
}> = ({episodeId, title, avatar}) => {
	return (
		<AbsoluteFill style={absContainer}>
			<AbsoluteFill style={imageContainerAvatar1}>
				<Img style={imageStyle1Avatars} src={avatar[0]} />
			</AbsoluteFill>

			<AbsoluteFill style={imageContainerAvatar2}>
				<Img style={imageStyle2Avatars} src={avatar[1]} />
			</AbsoluteFill>

			<AbsoluteFill>
				<Img src={art2} />
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

export default CoverAvatar2;
