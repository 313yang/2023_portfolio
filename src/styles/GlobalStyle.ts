import { createGlobalStyle, css } from "styled-components";

const ScrollbarCSS = css`
  ::-webkit-scrollbar {
    width: 10px;
    background-color: #000;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 2px;
    background-clip: padding-box;
    border: 3px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 2px;
  }
`;
const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video,input {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	box-sizing: border-box;
	${ScrollbarCSS}
	
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
html,body{
	width: 100%;
  height: 100%;
  scroll-snap-type: y proximity;
}
body {
	line-height: 1;
    font-family: 'Montserrat';
	font-size: 16px;
	background-color:#000;
	color: #fff;
}
button{
	border:none;
	background-color: transparent;
	font-family: inherit;
	cursor: pointer;
	font-size: inherit;

}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
input,select{
	margin: 0;
	font-family: inherit;
	font-size: inherit;
	color: inherit;
	:focus,:active{
		outline: none;
	}
	
}a,button{
	text-decoration: none;
	color:inherit
}

@media screen and (max-width:480px){
	body{
		font-size: 14px;
	}
}


`;

export default GlobalStyle;
