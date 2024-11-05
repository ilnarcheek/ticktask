import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  /* Background color */
  --bg-gray-0: #fafbff;
  --bg-gray-1: #eff0f8;
  --bg-gray-2: #484848;
  --bg-black: #111111;
  --bg-white: #ffffff;
  --bg-blue: #00b1f3;

  --bg-blue-light-1:#e7f8ff; 
  --bg-blue-light: #52d0ff;
  --bg-red-light: #ffdbdb;
  --bg-yellow-light: #ffecdb;
  --bg-green-light: #dbffed;

  /* Font color */
  --fc-black: #212529;
  --fc-gray: #adb5bd;
  --fc-white: #ffffff;

  --fc-blue: #2e88aa;
  --fc-red: #880000;
  --fc-yellow: #f78520;
  --fc-green: #008844;

  /* Font size */
  --fs-s1: 1.1rem;
  --fs-s: 1.3rem;
  --fs-m: 1.5rem;
  --fs-l: 1.8rem;
  --fs-l1: 2rem;
  --fs-l2: 2.3rem;

  /* Border radius */
  --br-full: 9999rem;
  --br-l: 2rem;
  --br-m: 1.5rem;
  --br-s: 0.8rem;

  --border-card: #dee2e6;
  --border-2: 2px solid #f0f1f8;
  --border-1: 1px solid #f0f1f8;
}

@font-face {
  font-family: "Raleway";
  src: url("/src/assets/fonts/Raleway-SemiBold.woff") format("woff");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Raleway";
  src: url("/src/assets/fonts/Raleway-Bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Rubik";
  src: url("/src/assets/fonts/Rubik-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Rubik";
  src: url("/src/assets/fonts/Rubik-Light.woff2") format("woff2");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Rubik";
  src: url("/src/assets/fonts/Rubik-Medium.woff2") format("woff2");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

html {
  font-size: 62.5%;
}

body {
  line-height: 1;
  font-size: var(--fs-m);
  font-family: "Rubik", sans-serif;
  color: var(--fc-gray);
  font-weight: 400;
  background-color: var(--bg-white);
}

ol,
ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

button {
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
}

input {
  background: none;
  border: none;
  color: var(--fc-gray);
  outline: 0;
}

img {
  max-width: 100%;
  display: block;
}

input,
textarea {
  font-family: inherit;
}

::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px; 
  transition: background-color 0.3s;
  
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.5);
}

.customOverlay {
  background: rgba(36, 123, 160, 0.7);
}
.customModal {
  background: #b2dbbf;
  max-width: 500px;
  width: 100%;
}
`;
