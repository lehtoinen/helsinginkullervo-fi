import React from 'react';

const SIZE_PX = 100;
// const BASE_COLOR = '#EB4538';
// const DARK_GREY_COLOR = '#4a4242';
// const MID_GREY_COLOR = '#ded6d6';
// const LIGHT_GREY_COLOR = '#f9f2f1';
// const COMPLIMENTARY_COLOR = '#20A520';

// const BASE_COLOR = '#de2b26';
const BLACK_COLOR = '#453b3b';
// const MID_GREY_COLOR = '#ded6d6';
const WHITE_COLOR = '#fcfbf8';
// const COMPLIMENTARY_COLOR = '#D8C3A5';

// #dd2a26

const ColorPalette = () => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: 1000,
      boxShadow: '0 0 3px grey',
    }}
  >
    {[
      '#de2b26',
      '#e85a4e',
      '#e97f73',
      '#453b3b',
      '#93918f',
      '#fcfbf8',
      '#d9c4a5',
    ].map(color => (
      <div
        key={color}
        style={{
          // display: 'inline-block',
          padding: '5px',
          width: `${SIZE_PX}px`,
          height: `${SIZE_PX}px`,
          background: `${color}`,
          fontSize: '14px',
        }}
      >
        <div style={{ color: WHITE_COLOR }}>{color}</div>
        <div style={{ color: BLACK_COLOR }}>{color}</div>
      </div>
    ))}
  </div>
  // <div>
  //   <div
  //     style={{
  //       display: 'inline-block',
  //       padding: '5px',
  //       width: `${SIZE_PX}px`,
  //       height: `${SIZE_PX}px`,
  //       background: '#2f2f2f',
  //       color: '#fff',
  //     }}
  //   >
  //     {DARK_GREY_COLOR}
  //   </div>
  //   <div
  //     style={{
  //       position: 'absolute',
  //       display: 'inline-block',
  //       padding: '5px',
  //       top: 0,
  //       left: 0,
  //       width: `${SIZE_PX}px`,
  //       height: `${SIZE_PX}px`,
  //       background: `${BASE_COLOR}`,
  //       backgroundBlendMode: 'overlay',
  //       opacity: 0.05,
  //     }}
  //   />
  // </div>
  // <div>
  //   <div
  //     style={{
  //       display: 'inline-block',
  //       padding: '5px',
  //       width: `${SIZE_PX}px`,
  //       height: `${SIZE_PX}px`,
  //       background: `${BASE_COLOR}`,
  //       color: '#fff',
  //     }}
  //   >
  //     {BASE_COLOR}
  //   </div>
  //   <div
  //     style={{
  //       display: 'inline-block',
  //       padding: '5px',
  //       width: `${SIZE_PX}px`,
  //       height: `${SIZE_PX}px`,
  //       background: `#E85A4F`,
  //       color: '#fff',
  //     }}
  //   >
  //     {BASE_COLOR}
  //   </div>
  //   <div
  //     style={{
  //       display: 'inline-block',
  //       padding: '5px',
  //       width: `${SIZE_PX}px`,
  //       height: `${SIZE_PX}px`,
  //       background: `#E98074`,
  //       color: '#fff',
  //     }}
  //   >
  //     {BASE_COLOR}
  //   </div>
  //   {/* <div
  //     style={{
  //       display: 'inline-block',
  //       padding: '5px',
  //       width: `${SIZE_PX}px`,
  //       height: `${SIZE_PX}px`,
  //       background: `${BASE_COLOR}`,
  //       color: '#fff',
  //     }}
  //   >
  //     {BASE_COLOR}
  //   </div> */}
  //   {/* <div
  //     style={{
  //       display: 'inline-block',
  //       padding: '5px',
  //       width: `${SIZE_PX}px`,
  //       height: `${SIZE_PX}px`,
  //       background: `#E98074`,
  //       color: '#fff',
  //     }}
  //   >
  //     {BASE_COLOR}
  //   </div> */}
  //   <div
  //     style={{
  //       display: 'inline-block',
  //       padding: '5px',
  //       width: `${SIZE_PX}px`,
  //       height: `${SIZE_PX}px`,
  //       background: '#424242',
  //       color: '#fff',
  //     }}
  //   >
  //     {DARK_GREY_COLOR}
  //   </div>
  //   <div
  //     style={{
  //       display: 'inline-block',
  //       padding: '5px',
  //       width: `${SIZE_PX}px`,
  //       height: `${SIZE_PX}px`,
  //       background: '#8d8d8d',
  //       color: `${DARK_GREY_COLOR}`,
  //     }}
  //   >
  //     {MID_GREY_COLOR}
  //   </div>
  //   {/* <div
  //     style={{
  //       position: 'absolute',
  //       display: 'inline-block',
  //       padding: '5px',
  //       top: 0,
  //       left: `${2 * SIZE_PX}px`,
  //       width: `${2 * SIZE_PX}px`,
  //       height: `${SIZE_PX}px`,
  //       background: `${BASE_COLOR}`,
  //       backgroundBlendMode: 'overlay',
  //       opacity: 0.05,
  //     }}
  //   /> */}
  //   <div
  //     style={{
  //       display: 'inline-block',
  //       padding: '5px',
  //       width: `${SIZE_PX}px`,
  //       height: `${SIZE_PX}px`,
  //       background: '#ffffff',
  //       color: `${DARK_GREY_COLOR}`,
  //     }}
  //   >
  //     {LIGHT_GREY_COLOR}
  //   </div>
  //   {/* <div
  //     style={{
  //       position: 'absolute',
  //       display: 'inline-block',
  //       padding: '5px',
  //       top: 0,
  //       left: `${3 * SIZE_PX}px`,
  //       width: `${3 * SIZE_PX}px`,
  //       height: `${SIZE_PX}px`,
  //       background: `${COMPLIMENTARY_COLOR}`,
  //       // background: `${BASE_COLOR}`,
  //       backgroundBlendMode: 'overlay',
  //       opacity: 0.075,
  //     }}
  //   /> */}
  //   <div
  //     style={{
  //       display: 'inline-block',
  //       padding: '5px',
  //       top: 0,
  //       width: `${SIZE_PX}px`,
  //       height: `${SIZE_PX}px`,
  //       background: `${COMPLIMENTARY_COLOR}`,
  //       color: '#fff',
  //     }}
  //   >
  //     {COMPLIMENTARY_COLOR}
  //   </div>
  //   <div style={{ marginBottom: `${SIZE_PX}px` }} />
  // </div>
);

export default ColorPalette;
