// 리팩토링 필요

// import { themes } from '../../lib/styles/theme';
// import { useState, useEffect } from 'react';
// import { ThemeProvider } from 'styled-components';

// export default function ThemeContainer() {
//   const [currentTheme, setCurrentTheme] = useState(themes.pinkTheme);

//   // react hook to get the theme selected by the user that is saved in local storage
//   useEffect(() => {
//     if (localStorage.getItem('new-theme') === 'undefined') {
//       localStorage.setItem('new-theme', JSON.stringify(themes.pinkTheme));
//     } else {
//       const newTheme = JSON.parse(localStorage.getItem('new-theme'));
//       if (newTheme) {
//         setCurrentTheme(newTheme);
//       }
//     }
//   }, []);

//   return <ThemeProvider theme={currentTheme} />;
// }
