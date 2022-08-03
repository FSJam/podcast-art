import React from 'react';
import {AbsoluteFill, Img} from 'remotion';

import art2 from './art-2.png';

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
	left: '7rem',
	position: 'absolute',
	width: '86rem',
	textAlign: 'right',
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

const CoverAvatar2: React.FC<{
	episodeId: number;
	title: string;
	avatar: string[];
}> = ({episodeId, title, avatar}) => {
	return (
		<AbsoluteFill style={absContainer}>
			<AbsoluteFill style={imageContainerAvatar1}>
				<Img style={imageStyle2Avatars} src={avatar[0]} />
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

export default CoverAvatar2;
