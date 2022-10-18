import { Global } from '@mantine/core';
// import bold from './GreycliffCF-Bold.woff2';
// import heavy from './GreycliffCF-Heavy.woff2';


// /* latin-ext */
// @font-face {
//   font-family: 'Montserrat';
//   font-style: normal;
//   font-weight: 400;
//   src: url(https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw3aXp-p7K4KLjztg.woff2) format('woff2');
//   unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
// }
/* latin */
// @font-face {
//   font-family: 'Montserrat';
//   font-style: normal;
//   font-weight: 400;
//   src: url(https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw5aXp-p7K4KLg.woff2) format('woff2');
//   unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
// }

// /* latin-ext */
// @font-face {
//   font-family: 'Playfair Display';
//   font-style: normal;
//   font-weight: 400;
//   src: url(https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDZbtPK-F2qC0usEw.woff2) format('woff2');
//   unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
// }
// /* latin */

export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Playfair Display',
            fontStyle: 'normal',
            fontWeight: 400,
            src: `url(https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtPK-F2qC0s.woff2) format('woff2')`,
          }
        },
        {
          '@font-face': {              
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: 400,
            src: `url(https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw5aXp-p7K4KLg.woff2) format('woff2')`,
          }
        },
        // {
        //   '@font-face': {
        //     fontFamily: 'Greycliff CF',
        //     src: `url('${bold}') format("woff2")`,
        //     fontWeight: 700,
        //     fontStyle: 'normal',
        //   },
        // },
        // {
        //   '@font-face': {
        //     fontFamily: 'Greycliff CF',
        //     src: `url('${heavy}') format("woff2")`,
        //     fontWeight: 900,
        //     fontStyle: 'normal',
        //   },
        // },
      ]}
    />
  );
}