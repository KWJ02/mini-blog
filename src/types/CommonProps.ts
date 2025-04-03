import { CSSProperties } from 'react';

export interface CommonProps {
	width?: CSSProperties['width'];
	maxWidth?: CSSProperties['maxWidth'];
	height?: CSSProperties['height'];
	maxHeight?: CSSProperties['maxHeight'];
	borderRadius?: CSSProperties['borderRadius'];
	backgroundColor?: CSSProperties['backgroundColor'];
	color?: CSSProperties['color'];
	padding?: CSSProperties['padding'];
	paddingTop?: CSSProperties['paddingTop'];
	paddingRight?: CSSProperties['paddingRight'];
	paddingBottom?: CSSProperties['paddingBottom'];
	paddingLeft?: CSSProperties['paddingLeft'];
	margin?: CSSProperties['margin'];
	marginTop?: CSSProperties['marginTop'];
	marginRight?: CSSProperties['marginRight'];
	marginBottom?: CSSProperties['marginBottom'];
	marginLeft?: CSSProperties['marginLeft'];
	display?: CSSProperties['display'];
	flexDirection?: CSSProperties['flexDirection'];
	justifyContent?: CSSProperties['justifyContent'];
	alignItems?: CSSProperties['alignItems'];
	gap?: CSSProperties['gap'];
	textAlign?: CSSProperties['textAlign'];
	fontSize?: CSSProperties['fontSize'];
	fontWeight?: CSSProperties['fontWeight'];
	lineHeight?: CSSProperties['lineHeight'];
	letterSpacing?: CSSProperties['letterSpacing'];
	boxShadow?: CSSProperties['boxShadow'];
	opacity?: CSSProperties['opacity'];
	cursor?: CSSProperties['cursor'];
	position?: CSSProperties['position'];
	top?: CSSProperties['top'];
	right?: CSSProperties['right'];
	bottom?: CSSProperties['bottom'];
	left?: CSSProperties['left'];
	zIndex?: CSSProperties['zIndex'];
	border?: CSSProperties['border'];
	textIndent?: CSSProperties['textIndent'];
	flex?: CSSProperties['flex'];
}
