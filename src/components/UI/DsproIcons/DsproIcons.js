import Svg,{
    G,
    Path,
    Polygon,
    TSpan,
    Line,
    Circle,
    Polyline,
    Ellipse,
    Rect,
} from 'react-native-svg';
import React from 'react';
import { scale, moderateScale, verticalScale} from '../../../utility/scaling';
const DsproIcons = ({icon, width, height, styles, strokeColor, fillColor, strokeWidth}) => {

  icon = icon || 'carKey';
  width = scale(width) || 50;
  height = scale(height) || 50;
  styles = styles || { flex: 1, textAlign: 'center', alignItems: 'center', justifyContent: 'center'};
  strokeColor = strokeColor || '#333';
  fillColor = fillColor || '#333';
  strokeWidth = strokeWidth || 0.5;

  let viewBox = `0 0 ${width} ${height}`;
  let icons = [];
  let panicBarx = width * 0.83;
  let panicBarrectHeight = width * 0.06;
  let panicBary = panicBarrectHeight * 3.18;

  icons['carKey'] = (
    <Svg
      viewBox="0 0 25.55 27.43"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M6.54,16.84c-.07.88,0,3.58,0,4.65,0,.34,0,4.43,0,4.66a2.11,2.11,0,0,1-.84,0V15.75a26.32,26.32,0,0,1,2.64,0c0,.23,0,6.84,0,7.78a1.33,1.33,0,0,1,0,.53l-.8,1.72c0-.31,0-7.2,0-7.87,0-.33.07-1-.1-1.19a.47.47,0,0,0-.81.12ZM1.31,4.07c-.09-1,.6-1.34,1.32-1.71a9.3,9.3,0,0,1,7.58-.5,8.74,8.74,0,0,1,1.54.74c.18.12.41.21.48.28A1.35,1.35,0,0,1,12.68,4c0,.47-.08,1-.12,1.43-.17,1.87-.34,3.76-.48,5.65,0,.46-.08.92-.12,1.39s-.06,1-.12,1.4a.68.68,0,0,1-.29.48,1.1,1.1,0,0,1-.66.1H3.21c-.33,0-.9.06-1-.51-.08-.35-.09-1-.13-1.4L1.31,4.07ZM5.55,27.43H7.43c.28-.12.7-.09,1-.69.13-.25,1-2.19,1.07-2.38a10.84,10.84,0,0,0,0-1.71c0-.52,0-6.56,0-6.9,1-.13,1.9.26,2.79-.44.73-.57.72-1.29.81-2.44.17-2,.34-4,.51-6,.06-.76.24-2.38.25-3C14,2.3,12.86,1.64,11.8,1.1A8.58,8.58,0,0,0,10.67.6,11.4,11.4,0,0,0,8.72.1C8.55.06,8.15,0,8,0H5.84a5.45,5.45,0,0,1-.7.12A10.38,10.38,0,0,0,1.09,1.74,2.57,2.57,0,0,0,0,3.91c0,.49.07,1,.12,1.52L.49,9.9c.08,1,.18,2,.25,3,.08,1.15.08,1.82.82,2.42s1.73.36,2.8.43c0,1,0,2.17,0,3.23v6.43a2.52,2.52,0,0,0,.2,1.4A1.39,1.39,0,0,0,5.55,27.43Z"/>
          <Path
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M10.3,8.27a3.41,3.41,0,0,1-1.18,2.17,3.35,3.35,0,1,1,.44-4.72,3.38,3.38,0,0,1,.74,2.56Zm-7.57,0a4.27,4.27,0,0,0,8.5-.95A4.42,4.42,0,0,0,9.74,4.56a4.34,4.34,0,0,0-3.23-1A4.11,4.11,0,0,0,3.74,5.06,4.32,4.32,0,0,0,2.73,8.3Z"/>
          <Path
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M22.44,1.73a.63.63,0,0,0-.46.85l.52.84a12.28,12.28,0,0,1,.84,10.92,12.82,12.82,0,0,1-.91,1.8c-.16.26-.46.59-.43.93a.64.64,0,0,0,.82.56c.38-.1.95-1.18,1.15-1.56a13.48,13.48,0,0,0-.69-13.83C23.1,2,22.93,1.61,22.44,1.73Z"/>
          <Path
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M19.43,3.84a.62.62,0,0,0-.47.53c0,.35.4.86.66,1.36a8.42,8.42,0,0,1,1,4.14,8.51,8.51,0,0,1-1.48,4.63.65.65,0,0,0,.66,1c.28-.07.38-.28.52-.49s.24-.37.39-.64A9.22,9.22,0,0,0,21.3,13a9.77,9.77,0,0,0-.76-8.26C20.25,4.27,20,3.7,19.43,3.84Z"/>
          <Path
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M16.42,5.93A.65.65,0,0,0,16,6.8c.06.15.32.5.49.87A4.82,4.82,0,0,1,16.33,12c-.21.38-.45.58-.36,1a.69.69,0,0,0,.83.47c.45-.13.92-1.21,1.07-1.64a6.14,6.14,0,0,0-.6-5.45C17.11,6.13,16.89,5.79,16.42,5.93Z"/>
          <Path
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M6.57,9.31a4,4,0,0,1,.13-.85c0-.12,0-.14-.08-.23a.35.35,0,0,1,.64-.29c.15.23-.05.34,0,.55.09.5.41.86-.05.88a1.51,1.51,0,0,1-.63-.05Zm1.5-2.08a19.46,19.46,0,0,1-2.19,0c-.1-.84.19-1.63,1.09-1.64s1.25.75,1.1,1.61Zm-2.54-.1c-.19.09-.24.09-.24.36V9.28c0,.56-.07.67.52.67H8.2c.6,0,.53-.07.53-.67V7.49c0-.27-.06-.28-.27-.36a1.61,1.61,0,0,0-.35-1.23,1.47,1.47,0,0,0-2.22,0A1.69,1.69,0,0,0,5.53,7.13Z"/>
          <Path
            fill = '#fff'
            strokeWidth = {strokeWidth}
            d="M8.07,7.23c.16-.86-.29-1.62-1.1-1.61s-1.19.8-1.09,1.64A19.46,19.46,0,0,0,8.07,7.23Z"/>
          <Path
            fill = '#fff'
            strokeWidth = {strokeWidth}
            d="M6.57,9.31a1.51,1.51,0,0,0,.63.05c.46,0,.14-.38.05-.88,0-.21.16-.32,0-.55a.35.35,0,0,0-.64.29c0,.09.09.11.08.23A4,4,0,0,0,6.57,9.31Z"/>
          <Path
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M6.54,16.84a1.2,1.2,0,0,0-.05.56v8.74H5.68V15.76h2.6v8.29a1.33,1.33,0,0,0,0-.53c0-.94,0-7.55,0-7.78a26.32,26.32,0,0,0-2.64,0V26.14a2.11,2.11,0,0,0,.84,0c0-.22,0-4.32,0-4.66C6.52,20.42,6.47,17.71,6.54,16.84Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['carLockout'] = (
    <Svg
      viewBox='0 0 48.41 23.82'
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M46.74,20.67H44.45a.38.38,0,0,1,0-.76h2l1-3.05a1.15,1.15,0,0,0-.57-1.38l-.35-.17a.38.38,0,0,1-.2-.26l-.51-2.42a3.41,3.41,0,0,0-2.77-2.67L36.87,8.86a.39.39,0,0,1-.17-.08L27.84,1.63A3.44,3.44,0,0,0,25.69.87H10.33A3.43,3.43,0,0,0,7.55,2.29L4,7.18a.38.38,0,0,1-.31.16H1.25a.38.38,0,0,0-.33.58l1.59,2.65a.37.37,0,0,1,.05.2V15a.38.38,0,0,1-.38.38,1.16,1.16,0,0,0-1.13,1.4l.68,3.17h2a.38.38,0,0,1,0,.76H1.43a.38.38,0,0,1-.37-.3L.31,16.9a1.92,1.92,0,0,1,1.5-2.28V10.87L.27,8.31a1.14,1.14,0,0,1,1-1.73H3.52L6.93,1.85A4.2,4.2,0,0,1,10.33.11H25.69A4.2,4.2,0,0,1,28.32,1L37.1,8.13l6.12,1.06a4.17,4.17,0,0,1,3.38,3.27l.47,2.24.18.09a1.91,1.91,0,0,1,1,2.31l-1.1,3.31A.38.38,0,0,1,46.74,20.67Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M16.66,20.29h0Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M31.51,20.67H16.66a.38.38,0,0,1,0-.76H31.51a.38.38,0,1,1,0,.76Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M38,23.71a5.33,5.33,0,1,1,5.33-5.33A5.34,5.34,0,0,1,38,23.71Zm0-9.9h0a4.57,4.57,0,1,0,4.57,4.57A4.57,4.57,0,0,0,38,13.81Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M38,21.43a3,3,0,1,1,3-3,3,3,0,0,1-3,3Zm0-5.33h0a2.28,2.28,0,1,0,2.28,2.28A2.29,2.29,0,0,0,38,16.1Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M10.19,23.71a5.33,5.33,0,1,1,5.33-5.33,5.34,5.34,0,0,1-5.33,5.33Zm0-9.9h0a4.57,4.57,0,1,0,4.57,4.57A4.57,4.57,0,0,0,10.19,13.81Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M10.19,21.43a3,3,0,1,1,3-3,3,3,0,0,1-3,3Zm0-5.33h0a2.28,2.28,0,1,0,2.28,2.28A2.29,2.29,0,0,0,10.19,16.1Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M36.93,8.87H12.55a2.29,2.29,0,0,1-2.14-3.09l.86-2.28A2.3,2.3,0,0,1,13.41,2h16a.38.38,0,0,1,.24.08l7.54,6.09a.38.38,0,0,1-.24.68ZM12,3.76h0L11.13,6A1.52,1.52,0,0,0,12.55,8.1h23.3l-6.6-5.33H13.41A1.53,1.53,0,0,0,12,3.76Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M36.17,12.63a.38.38,0,0,1-.38-.38V10a.38.38,0,0,1,.76,0v2.25A.38.38,0,0,1,36.17,12.63Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M20.85,19.15a.38.38,0,0,1-.38-.38V10a.38.38,0,0,1,.76,0v8.76A.38.38,0,0,1,20.85,19.15Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M20.85,8.87a.38.38,0,0,1-.38-.38V2.39a.38.38,0,0,1,.76,0V8.48A.38.38,0,0,1,20.85,8.87Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M6.86,12.29H5.33a1.14,1.14,0,0,1-1.14-1.14V9.63A1.14,1.14,0,0,1,5.33,8.48H6.86A1.14,1.14,0,0,1,8,9.63v1.52a1.14,1.14,0,0,1-1.14,1.14Zm-1.52-3h0A.38.38,0,0,0,5,9.63v1.52a.38.38,0,0,0,.38.38H6.86a.38.38,0,0,0,.38-.38V9.63a.38.38,0,0,0-.38-.38Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M46.73,15.34H44.62a.38.38,0,0,1-.34-.21l-1-1.94a1.14,1.14,0,0,1,1-1.65H46a.38.38,0,0,1,.35.24,4.25,4.25,0,0,1,.21.69l.51,2.42a.38.38,0,0,1-.37.46Zm-1.88-.76h1.41l-.41-2a2.94,2.94,0,0,0-.09-.32H44.33a.38.38,0,0,0-.34.55Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['changeCarDoor'] = (
    <Svg
      viewBox="0 0 31.02 28.78"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M29.23,28.67H1.79A1.68,1.68,0,0,1,.11,27V14.24a3.09,3.09,0,0,1,1-2.29L13.4.9A3.07,3.07,0,0,1,15.46.11H29.23a1.68,1.68,0,0,1,1.68,1.68V27a1.68,1.68,0,0,1-1.68,1.68ZM15.46.67h0a2.51,2.51,0,0,0-1.69.65L1.5,12.36a2.52,2.52,0,0,0-.83,1.87V27a1.12,1.12,0,0,0,1.12,1.12H29.23A1.12,1.12,0,0,0,30.35,27V1.79A1.12,1.12,0,0,0,29.23.67Zm-1.87.44Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M27.27,17.75h-5.6a.84.84,0,0,1-.84-.84v-.56a.84.84,0,0,1,.84-.84h5.6a.84.84,0,0,1,.84.84v.56a.84.84,0,0,1-.84.84Zm-5.6-1.68h0a.28.28,0,0,0-.28.28v.56a.28.28,0,0,0,.28.28h5.6a.28.28,0,0,0,.28-.28v-.56a.28.28,0,0,0-.28-.28Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M29.51,12.9H11.59a.28.28,0,1,1,0-.56H29.51a.28.28,0,1,1,0,.56Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M5.43,12.9H4.77a.84.84,0,0,1-.56-1.46L14.45,2.22a1.68,1.68,0,0,1,1.12-.43H29.51a.28.28,0,1,1,0,.56H15.57a1.12,1.12,0,0,0-.75.29L4.59,11.85a.28.28,0,0,0,.19.49h.66a.28.28,0,0,1,0,.56Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M27.27,11.78A.28.28,0,0,1,27,11.5V3.19a.28.28,0,0,1,.56,0V11.5A.28.28,0,0,1,27.27,11.78Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M26.15,17.75a.28.28,0,0,1-.28-.28V15.79a.28.28,0,1,1,.56,0v1.68A.28.28,0,0,1,26.15,17.75Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M29.51,24.47h-28a.28.28,0,0,1,0-.56h28a.28.28,0,1,1,0,.56Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M10.47,15.14H8.79a2.52,2.52,0,1,1,0-5h1.68a.28.28,0,0,1,.28.28v4.48a.28.28,0,0,1-.28.28ZM8.79,10.66h0a2,2,0,1,0,0,3.92h1.4V10.66Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['home'] = (
    <Svg
      viewBox="0 0 20.42 15.25"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M17.16,15.15H12.49a.34.34,0,0,1-.34-.34V8.72H8.27v6.09a.34.34,0,0,1-.34.34H3.27a.34.34,0,0,1-.34-.34V5.92H.44a.34.34,0,0,1-.16-.63L10.05.15a.33.33,0,0,1,.31,0l9.77,5.14a.34.34,0,0,1-.16.63H17.49v8.89a.34.34,0,0,1-.34.34Zm-4.33-.67h4V5.58a.34.34,0,0,1,.34-.34h1.46L10.21.83,1.81,5.24H3.27a.34.34,0,0,1,.34.34v8.89h4V8.38A.34.34,0,0,1,7.93,8h4.56a.34.34,0,0,1,.34.34v6.09Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['stypes'] = (
    <Svg
      viewBox="0 0 19.49 19.26"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M6.67,19.15a.48.48,0,0,1-.41-.23L4.59,16.19l-3-1.11a.48.48,0,0,1-.31-.52l.48-3.17L.17,8.6A.48.48,0,0,1,.27,8l2.4-2.12.57-3.15a.48.48,0,0,1,.46-.39l3.2-.08,2.46-2a.48.48,0,0,1,.6,0l2.5,2,3.2,0a.48.48,0,0,1,.46.38l.64,3.14,2.44,2.07a.48.48,0,0,1,.11.59l-1.53,2.82.54,3.16a.48.48,0,0,1-.29.52l-3,1.17-1.62,2.77a.48.48,0,0,1-.56.21l-3-1-3,1.08a.47.47,0,0,1-.16,0ZM2.28,14.32h0l2.8,1a.48.48,0,0,1,.24.2L6.87,18.1l2.81-1a.48.48,0,0,1,.31,0l2.83.95,1.5-2.58a.48.48,0,0,1,.24-.2l2.77-1.09-.5-2.94a.48.48,0,0,1,.05-.31L18.3,8.3,16,6.37a.48.48,0,0,1-.16-.27l-.59-2.92-3,0a.48.48,0,0,1-.29-.1L9.68,1.2,7.38,3.1a.48.48,0,0,1-.29.11l-3,.08L3.58,6.22a.48.48,0,0,1-.15.27l-2.23,2,1.48,2.59a.48.48,0,0,1,.06.31l-.44,3Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M9.75,14a4.34,4.34,0,1,1,4.33-4.34A4.34,4.34,0,0,1,9.75,14Zm0-7.72h0a3.38,3.38,0,1,0,3.38,3.38A3.39,3.39,0,0,0,9.75,6.25Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['userProfile'] = (
    <Svg
      viewBox="0 0 16.49 16.97"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M8.25,9.16A4.51,4.51,0,0,1,3.78,4.64a4.47,4.47,0,1,1,8.94,0A4.5,4.5,0,0,1,8.25,9.16Zm0-8.22h0A3.67,3.67,0,0,0,4.61,4.64a3.63,3.63,0,1,0,7.27,0A3.67,3.67,0,0,0,8.25.95Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M16.39,16.86h-.84a7.37,7.37,0,0,0-7.3-7.41,7.37,7.37,0,0,0-7.3,7.41H.11A8.2,8.2,0,0,1,8.25,8.61a8.2,8.2,0,0,1,8.14,8.25Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['verifyAccount'] = (
    <Svg
      viewBox="0 0 16.49 16.97"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M14.32,14.74H.51a.41.41,0,0,1-.41-.41V.51A.41.41,0,0,1,.51.11H7V.92H.92v13h13V7.82h.81v6.52a.41.41,0,0,1-.41.41Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M9.08,12.77H6a.41.41,0,0,1-.41-.41V9.31A.41.41,0,0,1,5.74,9L12.56,2.2a.42.42,0,0,1,.57,0l3,3.05a.41.41,0,0,1,0,.57L9.36,12.65a.41.41,0,0,1-.29.12ZM6.43,12H8.91l6.42-6.42L12.85,3.06,6.43,9.48V12Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['onGoingJobs'] = (
    <Svg
      viewBox="0 0 16.63 13.45"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M10.14,13.34H3.95A3.82,3.82,0,0,1,.11,9.56V3.89A3.82,3.82,0,0,1,3.95.11h6.19V.93H3.95a3,3,0,0,0-3,3V9.56a3,3,0,0,0,3,3h6.19Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M12.91,10.44l-.58-.59,3.18-3.13L12.34,3.6,12.91,3l3.48,3.42a.41.41,0,0,1,0,.58Z"/>
          <Rect fill={fillColor} x="4.9" y="6.31" width="11.16" height="0.82"/>
        </G>
      </G>
    </Svg>
  );

  icons['newMessage'] = (
    <Svg
      viewBox="0 0 26.16 23.29"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M13.78,0C6.09,0,0,4.49,0,10,0,13.16,1.88,16,5,17.79c.71.42.79,3.54-3.2,5.43,0,0,5.65.89,9.23-3.63a19.14,19.14,0,0,0,2.74.4c7.69,0,12.38-4.43,12.38-10S21.47,0,13.78,0Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['workersList'] = (
    <Svg
      viewBox="0 0 17.7 16.46"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M8.69,16.35a.27.27,0,0,1-.15,0l-4-2.63-4,2.25a.27.27,0,0,1-.4-.24V3.81a.27.27,0,0,1,.11-.22L4.4.63a.27.27,0,0,1,.31,0l4,2.85L13.09.16a.27.27,0,0,1,.32,0L17.47,3a.27.27,0,0,1,.12.22V15.67a.27.27,0,0,1-.41.23l-3.92-2.36L8.84,16.31a.27.27,0,0,1-.14,0ZM4.56,13.09h0a.27.27,0,0,1,.15,0l4,2.63L13.11,13a.27.27,0,0,1,.28,0L17,15.19V3.38L13.26.71,8.86,4a.27.27,0,0,1-.32,0l-4-2.85L.65,4V15.22l3.77-2.1a.27.27,0,0,1,.13,0Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M4.56,12.33a.27.27,0,0,1-.27-.27V4.4a.27.27,0,1,1,.54,0v7.66a.27.27,0,0,1-.27.27Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M8.69,11.86a.27.27,0,0,1-.27-.27V4.86a.27.27,0,0,1,.54,0v6.73a.27.27,0,0,1-.27.27Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M13.25,12.42a.27.27,0,0,1-.27-.27V4.3a.27.27,0,0,1,.54,0v7.85a.27.27,0,0,1-.27.27Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['paymentMethods'] = (
    <Svg
      viewBox="0 0 20.1 13.01"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M19.66,12.9H.44a.33.33,0,0,1-.33-.33V.44A.33.33,0,0,1,.44.11H19.66A.33.33,0,0,1,20,.44V12.57a.33.33,0,0,1-.33.33ZM.77,12.24H19.32V.77H.77V12.24Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M19.66,3.27H.44a.33.33,0,0,1,0-.66H19.66a.33.33,0,0,1,0,.66Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M19.66,5.46H.44a.33.33,0,0,1,0-.66H19.66a.33.33,0,1,1,0,.66Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['mapScreen'] = (
    <Svg
      viewBox="0 0 17.72 18.96"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M6,18.86l-.11,0L.3,16.56a.3.3,0,0,1-.19-.28V3a.3.3,0,0,1,.42-.28L6.16,5a.3.3,0,0,1,.19.28V18.55a.3.3,0,0,1-.3.3ZM.71,16.07h0l5,2V5.51l-5-2V16.07Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M17.31,18.86l-.11,0-5.63-2.28a.3.3,0,0,1-.19-.28v-7l.3.36L12,9.22v6.86h0l5,2V5.51l-2.15-.87A3.15,3.15,0,0,0,15,4.05l2.42,1a.3.3,0,0,1,.19.28V18.55a.3.3,0,0,1-.3.3Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M11.68,10.13l-.24-.29c-.14-.17-3.36-4.22-3.36-6.13a3.6,3.6,0,1,1,7.2,0c0,1.91-3.23,6-3.37,6.13l-.24.29Zm0-9.42h0a3,3,0,0,0-3,3c0,1.3,2,4.13,3,5.45,1-1.32,3-4.15,3-5.45a3,3,0,0,0-3-3Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M6,18.86a.3.3,0,0,1-.3-.3V5.31A.3.3,0,0,1,5.93,5l2.2-.89h0v0h0v0h.1l-1.94.79h0V18.11l5-2V9.75h0l0,0,0,0v0h0l.24.29.24-.29h0v0l0,0,0,0h0v6.52a.3.3,0,0,1-.19.28L6.16,18.83l-.11,0Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M11.68,5.46a1.56,1.56,0,1,1,1.56-1.56,1.56,1.56,0,0,1-1.56,1.56Zm0-2.51h0a1,1,0,1,0,1,1,1,1,0,0,0-1-1Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['goToInbox'] = (
    <Svg
      viewBox="0 0 42.1 37.7"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M4.46,37.7l3.15-10A14.67,14.67,0,0,1,0,14.81,14.92,14.92,0,0,1,15,0H27.11a14.92,14.92,0,0,1,15,14.81,14.92,14.92,0,0,1-15,14.81h-7.8Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['marker'] = (
    <Svg
      viewBox="0 0 17.99 29.16"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M9,0A9,9,0,0,0,0,9c0,5,9,20.12,9,20.12S18,14,18,9A9,9,0,0,0,9,0ZM9,12.29H9a4,4,0,1,1,4-4A4,4,0,0,1,9,12.29Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['inbox'] = (
    <Svg
      viewBox="0 0 19.35 18.66"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M14.66,18.56a1.48,1.48,0,0,1-.7-.18l-4-2.13a.55.55,0,0,0-.51,0l-4,2.13a1.5,1.5,0,0,1-2.18-1.59L4,12.28a.56.56,0,0,0-.16-.49L.56,8.59A1.51,1.51,0,0,1,1.4,6L5.9,5.36a.55.55,0,0,0,.41-.3l2-4.11a1.5,1.5,0,0,1,2.7,0l2,4.11a.55.55,0,0,0,.41.3L18,6a1.51,1.51,0,0,1,.83,2.57l-3.26,3.2a.56.56,0,0,0-.16.49l.77,4.51a1.51,1.51,0,0,1-1.48,1.77Zm-5-3.33h0a1.5,1.5,0,0,1,.7.17l4,2.13a.55.55,0,0,0,.67-.13A.53.53,0,0,0,15.2,17l-.77-4.51a1.51,1.51,0,0,1,.43-1.33l3.26-3.2a.55.55,0,0,0,.14-.57A.54.54,0,0,0,17.82,7L13.31,6.3a1.51,1.51,0,0,1-1.13-.83l-2-4.11a.56.56,0,0,0-1,0l-2,4.11A1.5,1.5,0,0,1,6,6.3L1.53,7a.54.54,0,0,0-.44.37.55.55,0,0,0,.14.57l3.26,3.2a1.51,1.51,0,0,1,.43,1.33L4.15,17a.54.54,0,0,0,.12.45.55.55,0,0,0,.67.13L9,15.4a1.5,1.5,0,0,1,.7-.17Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['chatRoom'] = (
    <Svg
      viewBox="0 0 20.22 18.11"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Polygon points="14.57 6.01 5.65 6.01 5.65 5.01 14.57 5.01 14.57 6.01 14.57 6.01" />
          <Polygon points="14.57 9.28 5.65 9.28 5.65 8.28 14.57 8.28 14.57 9.28 14.57 9.28" />
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M2.23,18l1.5-4.76A7,7,0,0,1,.11,7.15a7.09,7.09,0,0,1,7.12-7H13a7.09,7.09,0,0,1,7.12,7,7.09,7.09,0,0,1-7.12,7H9.28L2.23,18Zm5-16.91h0a6.09,6.09,0,0,0-6.12,6,6,6,0,0,0,3.44,5.42l.39.19L3.92,16,9,13.18h4a6.09,6.09,0,0,0,6.12-6,6.09,6.09,0,0,0-6.12-6Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['afterPayment'] = (
    <Svg
      viewBox="0 0 18.38 18.49"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M9.19,18.38a9.13,9.13,0,1,1,9.08-9.13,9.12,9.12,0,0,1-9.08,9.13ZM9.19,1h0a8.22,8.22,0,1,0,8.17,8.22A8.2,8.2,0,0,0,9.19,1Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M13.17,9.72H9a.46.46,0,0,1-.46-.46V3.17h.91V8.8h3.71v.91Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['thankYou'] = (
    <Svg
      viewBox="0 0 18.45 18.45"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M18.34,9.22A9.11,9.11,0,1,1,9.22.11a9.11,9.11,0,0,1,9.11,9.11Zm-4.72-2.9a2.89,2.89,0,0,0-4.07,0l-.32.32L8.9,6.32a2.88,2.88,0,0,0-4.07,4.07l.32.32,4.07,4.07,4.07-4.07.32-.32a2.89,2.89,0,0,0,0-4.07Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['arrow'] = (
    <Svg
      viewBox="0 0 14.1 60.31"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Polyline points="1.4 0.53 12.6 30.16 1.4 59.78"/>
        </G>
      </G>
    </Svg>
  );

  icons['arrowDown'] = (
    <Svg
      viewBox="0 0 18.45 18.45"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M16.56.73,8.65,8.67a.41.41,0,0,1-.58,0L.15.73.73.15,8.36,7.8,16,.15Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['arrowLeft'] = (
    <Svg
      viewBox="0 0 9.19 17.2"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M8.18.16A.55.55,0,0,1,9,.94L8.18.16Zm-8,8,8-8L9,.94l-8,8H.16V8.18ZM.94,9a.55.55,0,0,1-.78-.78L.94,9ZM8.25,17,.16,9l.78-.78L9,16.26,8.25,17ZM9,16.26a.55.55,0,0,1-.78.78Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['arrowRight'] = (
    <Svg
      viewBox="0 0 9.19 17.2"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M.23.94A.55.55,0,0,1,1,.16L.23.94Zm8,8-8-8L1,.16l8,8V9ZM9,8.18A.55.55,0,0,1,8.25,9L9,8.18ZM.16,16.26,8.25,8.18,9,9,.94,17l-.78-.78ZM.94,17a.55.55,0,0,1-.78-.78Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['arrowUp'] = (
    <Svg
      viewBox="0 0 17.2 9.19"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M.94,9a.55.55,0,0,1-.78-.78L.94,9Zm8-8-8,8L.16,8.18l8-8H9V.94ZM8.18.16A.55.55,0,0,1,9,.94L8.18.16ZM16.26,9,8.18.94,9,.16,17,8.25,16.26,9ZM17,8.25a.55.55,0,0,1-.78.78Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['menu'] = (
    <Svg
      viewBox="0 0 15.5 12.12"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Rect fill={fillColor} width="15.5" height="0.78"/>
          <Rect fill={fillColor} y="5.67" width="15.5" height="0.78"/>
          <Rect fill={fillColor} y="11.34" width="15.5" height="0.78"/>
        </G>
      </G>
    </Svg>
  );

  icons['clear'] = (
    <Svg
      viewBox="0 0 11.93 11.93"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M10.15,11.62,6,7.44,1.78,11.62A1,1,0,0,1,.31,10.15L4.49,6,.31,1.78A1,1,0,0,1,1.78.31L6,4.49,10.15.31a1,1,0,1,1,1.48,1.48L7.44,6l4.18,4.18a1,1,0,1,1-1.48,1.48Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['signOut'] = (
    <Svg
      viewBox="0 0 17.69 19.71"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M8.85,19.6A8.85,8.85,0,0,1,3.11,4.11l.65.73a7.91,7.91,0,0,0-2.67,5.92,7.82,7.82,0,0,0,7.76,7.86,7.82,7.82,0,0,0,7.76-7.86,7.9,7.9,0,0,0-2.67-5.92l.65-.73A8.85,8.85,0,0,1,8.85,19.6Z"/>
            <Polygon
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            points="9.34 10.05 8.36 10.05 8.36 0.11 9.34 0.11 9.34 10.05 9.34 10.05" />
        </G>
      </G>
    </Svg>
  );

  icons['changeLocks'] = (
    <Svg
      viewBox="0 0 28.65 30.62"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M3.12,25.66h6V19.51h-6v6.15Zm6.84.87H2.25v-7.9H10Z"/>
          <Polygon fill={fillColor} points="11.83 25.8 9.53 25.8 9.53 24.93 10.96 24.93 10.96 23.9 13.15 23.9 14.68 22.37 16.01 23.72 17.35 22.37 18.75 23.79 19.91 22.86 19 22.15 10.91 22.15 10.91 21.15 9.53 21.15 9.53 20.28 11.79 20.28 11.79 21.28 19.3 21.28 21.31 22.85 18.68 24.96 17.35 23.61 16.01 24.96 14.68 23.61 13.52 24.77 11.83 24.77 11.83 25.8" />
          <Polygon fill={fillColor} points="7.01 24.31 4.08 24.31 4.08 23.44 6.14 23.44 6.14 21.88 4.08 21.88 4.08 21 7.01 21 7.01 24.31" />
          <Rect fill={fillColor} x="14.45" y="14.91" width="0.87" height="5.35"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M26.52,30.62H16.58a2.13,2.13,0,0,1-2.12-2.13V25.37h.87V28.5a1.25,1.25,0,0,0,1.25,1.25h9.95a1.25,1.25,0,0,0,1.25-1.25V2.13A1.25,1.25,0,0,0,26.52.87H16.58a1.25,1.25,0,0,0-1.25,1.25V7.06h-.87V2.13A2.13,2.13,0,0,1,16.58,0h9.95a2.13,2.13,0,0,1,2.12,2.13V28.5A2.13,2.13,0,0,1,26.52,30.62Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M11.44,11.42A35.43,35.43,0,0,1,18,12l2.35.44.28,0A1.37,1.37,0,0,0,22,11.17v0a1.36,1.36,0,0,0-1.13-1.31l-3.05-.58a34.67,34.67,0,0,0-12.78,0L2,9.82A1.36,1.36,0,0,0,.87,11.13v0a1.29,1.29,0,0,0,.41.94,1.45,1.45,0,0,0,1.26.37L4.89,12a35.43,35.43,0,0,1,6.55-.61Zm9.17,2a2.37,2.37,0,0,1-.44,0l-2.35-.44a34.67,34.67,0,0,0-12.78,0l-2.35.44a2.32,2.32,0,0,1-2-.59A2.16,2.16,0,0,1,0,11.17v0A2.23,2.23,0,0,1,1.84,9l3.05-.58a35.53,35.53,0,0,1,13.1,0L21,9a2.23,2.23,0,0,1,1.84,2.17v0A2.24,2.24,0,0,1,20.62,13.38Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M6.44,14.55l-.15-.86,1.17-.18.12.87-1.14.18ZM4.16,15,4,14.13l1.14-.22.17.86Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M7.57,14.37l-.12-.87a33.34,33.34,0,0,1,8.2-.11l-.1.87A32.46,32.46,0,0,0,7.57,14.37Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M20.81,15.6a4.39,4.39,0,0,1-3.15-1.32l.62-.61a3.55,3.55,0,1,0,1-5.68l-.38-.78a4.38,4.38,0,0,1,1.94-.45,4.42,4.42,0,0,1,0,8.84Z"/>
          <Polygon fill = {fillColor} points="23.13 25.38 20.41 25.38 20.41 24.51 22.25 24.51 22.25 21.1 20.41 21.1 20.41 20.23 23.13 20.23 23.13 25.38" />
        </G>
      </G>
    </Svg>
  );

  icons['logo'] = (
    <Svg
      viewBox="0 0 32.37 32.76"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M32,9.76,28.55,7.52v-4h0A1.45,1.45,0,0,0,27.11,2.1H24.85a1.44,1.44,0,0,0-1.43,1.44v.67l-6-3.84h0a2.4,2.4,0,0,0-2.55,0h0L.35,9.76a.78.78,0,0,0-.23,1.07.77.77,0,0,0,.65.35.79.79,0,0,0,.42-.12l1.07-.69V31.22H1.48a.77.77,0,1,0,0,1.54H30.89a.77.77,0,0,0,0-1.54h-.78V10.37l1.07.69A.77.77,0,1,0,32,9.76ZM25,3.65h2V6.53L25,5.21ZM14,25.33h4.31v5.89H14Zm14.53,5.89H19.62V25.16a1.11,1.11,0,0,0-1.11-1.11H13.86a1.11,1.11,0,0,0-1.11,1.11v6.06H3.81V9.37l11.94-7.7h0a.81.81,0,0,1,.87,0l7,4.53a.78.78,0,0,0,.26.17l3.36,2.17a.71.71,0,0,0,.18.12l1.11.71Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M19.43,9.33H12.94a1.05,1.05,0,0,0-1,1v3.54a1.06,1.06,0,0,0,1,1h6.49a1.06,1.06,0,0,0,1-1V10.37A1.05,1.05,0,0,0,19.43,9.33ZM13,13.81V10.47h2.58v3.34Zm3.71-3.34h2.58v3.34H16.75Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['houseLockout'] = (
    <Svg
      viewBox="0 0 37.45 32.1"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M26.11,8.11A.7.7,0,0,0,27,7l-.31-.27a.7.7,0,0,0-.93,1.06Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M.7,17.18H6.2V31.39a.71.71,0,0,0,.7.7h6a.7.7,0,0,0,0-1.41H7.61V17.18H29.84V30.69H27.28V24.11a3.39,3.39,0,1,0-6.78,0v6.58H18.44a.7.7,0,1,0,0,1.41h12.1a.7.7,0,0,0,.7-.7V17.18h5.49a.7.7,0,0,0,.46-1.23L28.95,8.72A.7.7,0,1,0,28,9.78l6.85,6H2.58L18.73,1.64,23.8,6.08A.7.7,0,1,0,24.72,5L19.19.17a.7.7,0,0,0-.93,0l-5.7,5V2.57a.71.71,0,0,0-.7-.7H8.28a.7.7,0,0,0-.7.7v7L.24,15.95A.7.7,0,0,0,.7,17.18ZM25.87,30.69h-4V24.11a2,2,0,0,1,4,0v6.58ZM9,3.27h2.17V6.4L9,8.3Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M15,32.1h1.2a.7.7,0,0,0,0-1.41H15a.7.7,0,1,0,0,1.41Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M11.27,23.56h5a.7.7,0,1,0,0-1.41h-5a.7.7,0,0,0,0,1.41Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M11.27,27.12h5a.7.7,0,1,0,0-1.41h-5a.7.7,0,1,0,0,1.41Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M24.26,10H13.19a.7.7,0,0,0,0,1.41H24.26a.7.7,0,0,0,0-1.41Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['keyExtraction'] = (
    <Svg
      viewBox="0 0 31.74 32.63"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M25.47,7.82h0a1.63,1.63,0,1,0-1.63-1.63h0a1.62,1.62,0,0,0,1.62,1.62Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M31.69,8.89a9.78,9.78,0,0,0-1.57-4.38,10.23,10.23,0,0,0-3.3-3.17A9.49,9.49,0,0,0,22.28,0h-.43a8.42,8.42,0,0,0-4.45,1.28,8,8,0,0,0-3.12,4,9.17,9.17,0,0,0-.19,6h0a2.17,2.17,0,0,1-.54,2.2L12.1,14.89a.72.72,0,0,0-.22.51.75.75,0,0,0,0,.1l.24,2.31-2.31-.26H9.75a.75.75,0,0,0-.53.22l-.45.44,1.09,1L10,19l2.87.31H13a.76.76,0,0,0,.54-.22.74.74,0,0,0,.22-.53s0,0,0-.07l-.31-2.88,1.2-1.19a3.67,3.67,0,0,0,.9-3.72h0a7.69,7.69,0,0,1,.17-5,6.55,6.55,0,0,1,2.52-3.21,7.16,7.16,0,0,1,3.66-1h.38a8.19,8.19,0,0,1,3.83,1.12,9,9,0,0,1,2.88,2.66,8.39,8.39,0,0,1,1.33,3.72,7.07,7.07,0,0,1,0,.75A7,7,0,0,1,29.93,12a6.3,6.3,0,0,1-.71,1.47,7.3,7.3,0,0,1-8.31,2.71h0a3.65,3.65,0,0,0-3.75.91h0l-4.61,4.6,1.09,1,4.58-4.57h0a2.18,2.18,0,0,1,2.23-.54h0a9.14,9.14,0,0,0,2.79.44,9.25,9.25,0,0,0,2.7-.41,8,8,0,0,0,5.33-5.14,8.57,8.57,0,0,0,.46-2.77c0-.28,0-.57,0-.85Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M4.87,30.29l-2.22.88H2.46A.24.24,0,0,1,2.34,31h0l-.6-1.78,2.36-.59a.73.73,0,0,0,.48-1.06L3.31,25.09l.9-2,1.7-.15a.72.72,0,0,0,.61-.43.73.73,0,0,0-.06-.74l-1-1.39.81-1.73L4.9,18.07l-1,2.08a.75.75,0,0,0,.11.79l.48.69-.85.07a.73.73,0,0,0-.61.43L1.81,24.79a.74.74,0,0,0,0,.65l1,2L.57,28A.75.75,0,0,0,0,28.7a.73.73,0,0,0,0,.21L.9,31.46h0a1.67,1.67,0,0,0,.9,1,1.75,1.75,0,0,0,1.33.08h0l2.49-1h0L11,20.74l-1.38-.6Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['keyExtractionFromCar'] = (
    <Svg
      viewBox="0 0 25.55 27.43"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M6.54,16.84c-.07.88,0,3.58,0,4.65,0,.34,0,4.43,0,4.66a2.11,2.11,0,0,1-.84,0V15.75a26.32,26.32,0,0,1,2.64,0c0,.23,0,6.84,0,7.78a1.33,1.33,0,0,1,0,.53l-.8,1.72c0-.31,0-7.2,0-7.87,0-.33.07-1-.1-1.19a.47.47,0,0,0-.81.12ZM1.31,4.07c-.09-1,.6-1.34,1.32-1.71a9.3,9.3,0,0,1,7.58-.5,8.74,8.74,0,0,1,1.54.74c.18.12.41.21.48.28A1.35,1.35,0,0,1,12.68,4c0,.47-.08,1-.12,1.43-.17,1.87-.34,3.76-.48,5.65,0,.46-.08.92-.12,1.39s-.06,1-.12,1.4a.68.68,0,0,1-.29.48,1.1,1.1,0,0,1-.66.1H3.21c-.33,0-.9.06-1-.51-.08-.35-.09-1-.13-1.4L1.31,4.07ZM5.55,27.43H7.43c.28-.12.7-.09,1-.69.13-.25,1-2.19,1.07-2.38a10.84,10.84,0,0,0,0-1.71c0-.52,0-6.56,0-6.9,1-.13,1.9.26,2.79-.44.73-.57.72-1.29.81-2.44.17-2,.34-4,.51-6,.06-.76.24-2.38.25-3C14,2.3,12.86,1.64,11.8,1.1A8.58,8.58,0,0,0,10.67.6,11.4,11.4,0,0,0,8.72.1C8.55.06,8.15,0,8,0H5.84a5.45,5.45,0,0,1-.7.12A10.38,10.38,0,0,0,1.09,1.74,2.57,2.57,0,0,0,0,3.91c0,.49.07,1,.12,1.52L.49,9.9c.08,1,.18,2,.25,3,.08,1.15.08,1.82.82,2.42s1.73.36,2.8.43c0,1,0,2.17,0,3.23v6.43a2.52,2.52,0,0,0,.2,1.4A1.39,1.39,0,0,0,5.55,27.43Z"/>
          <Path
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M10.3,8.27a3.41,3.41,0,0,1-1.18,2.17,3.35,3.35,0,1,1,.44-4.72,3.38,3.38,0,0,1,.74,2.56Zm-7.57,0a4.27,4.27,0,0,0,8.5-.95A4.42,4.42,0,0,0,9.74,4.56a4.34,4.34,0,0,0-3.23-1A4.11,4.11,0,0,0,3.74,5.06,4.32,4.32,0,0,0,2.73,8.3Z"/>
          <Path
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M22.44,1.73a.63.63,0,0,0-.46.85l.52.84a12.28,12.28,0,0,1,.84,10.92,12.82,12.82,0,0,1-.91,1.8c-.16.26-.46.59-.43.93a.64.64,0,0,0,.82.56c.38-.1.95-1.18,1.15-1.56a13.48,13.48,0,0,0-.69-13.83C23.1,2,22.93,1.61,22.44,1.73Z"/>
          <Path
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M19.43,3.84a.62.62,0,0,0-.47.53c0,.35.4.86.66,1.36a8.42,8.42,0,0,1,1,4.14,8.51,8.51,0,0,1-1.48,4.63.65.65,0,0,0,.66,1c.28-.07.38-.28.52-.49s.24-.37.39-.64A9.22,9.22,0,0,0,21.3,13a9.77,9.77,0,0,0-.76-8.26C20.25,4.27,20,3.7,19.43,3.84Z"/>
          <Path
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M16.42,5.93A.65.65,0,0,0,16,6.8c.06.15.32.5.49.87A4.82,4.82,0,0,1,16.33,12c-.21.38-.45.58-.36,1a.69.69,0,0,0,.83.47c.45-.13.92-1.21,1.07-1.64a6.14,6.14,0,0,0-.6-5.45C17.11,6.13,16.89,5.79,16.42,5.93Z"/>
          <Path
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M8.07,7.23c.16-.86-.29-1.62-1.1-1.61s-1.19.8-1.09,1.64A19.46,19.46,0,0,0,8.07,7.23Z"/>
          <Path
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M6.57,9.31a1.51,1.51,0,0,0,.63.05c.46,0,.14-.38.05-.88,0-.21.16-.32,0-.55a.35.35,0,0,0-.64.29c0,.09.09.11.08.23A4,4,0,0,0,6.57,9.31Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M6.54,16.84a1.2,1.2,0,0,0-.05.56v8.74H5.68V15.76h2.6v8.29a1.33,1.33,0,0,0,0-.53c0-.94,0-7.55,0-7.78a26.32,26.32,0,0,0-2.64,0V26.14a2.11,2.11,0,0,0,.84,0c0-.22,0-4.32,0-4.66C6.52,20.42,6.47,17.71,6.54,16.84Z"/>
          <Line x1="4.42" y1="5.02" x2="9.74" y2="10.34"/>
          <Line x1="4.42" y1="10.34" x2="9.74" y2="5.02"/>
        </G>
      </G>
    </Svg>
  );

  icons['lockoutGeneral'] = (
    <Svg
      viewBox="0 0 23.5 29.69"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M14.68,27.87H8.82a6.07,6.07,0,0,1-6.06-6.06V13.19h.8v8.62a5.27,5.27,0,0,0,5.26,5.26h5.87a5.27,5.27,0,0,0,5.26-5.26V13.19h.8v8.62A6.07,6.07,0,0,1,14.68,27.87Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M15.32,29.69h-.09v-.8h.09a6.5,6.5,0,0,0,6.49-6.49V13.31h.8V22.4A7.3,7.3,0,0,1,15.32,29.69Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M9.4,29.69H8.34v-.8H9.4v.8Zm2.14,0H10.47v-.8h1.07v.8Zm2.14,0H12.61v-.8h1.07v.8Zm1.55,0h-.48v-.8h.48Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M8.34,29.69H8.18A7.3,7.3,0,0,1,.89,22.4V13.31h.8V22.4a6.5,6.5,0,0,0,6.49,6.49h.16Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M10.89,24h1.71L12.16,22l.21-.16a1,1,0,1,0-1.24,0l.21.16L10.89,24Zm2.72.8H9.89l.56-2.43A1.83,1.83,0,0,1,9.9,21a1.85,1.85,0,0,1,3.7,0,1.82,1.82,0,0,1-.54,1.3Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M6.78,16.5H5.71v-.8H6.78v.8Zm2.14,0H7.85v-.8H8.92v.8Zm2.14,0H10v-.8h1.07v.8Zm2.14,0H12.13v-.8H13.2v.8Zm2.14,0H14.27v-.8h1.07v.8Zm2.14,0H16.4v-.8h1.07Z"/>
          <Rect fill = {fillColor} y="12.91" width="23.5" height="0.8"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M11,.8a.35.35,0,0,0-.36.34V6.47a.34.34,0,0,0,.34.34h0a.34.34,0,0,0,.34-.34V1.15A.34.34,0,0,0,11,.8Zm0,6.82h0A1.15,1.15,0,0,1,9.8,6.47V1.15a1.15,1.15,0,0,1,2.31,0V6.47A1.15,1.15,0,0,1,11,7.62Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M12.47.8a.35.35,0,0,0-.36.34V6.47a.34.34,0,0,0,.34.34h0a.34.34,0,0,0,.34-.34V1.15A.34.34,0,0,0,12.47.8Zm0,6.82h0a1.15,1.15,0,0,1-1.15-1.14V1.15a1.15,1.15,0,0,1,2.31,0V6.47A1.15,1.15,0,0,1,12.47,7.62Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M20.66,12.24h-.8V10.88A8,8,0,0,0,14.3,3.21l.25-.76a8.85,8.85,0,0,1,6.11,8.43Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M3.56,12.24h-.8V10.88A8.85,8.85,0,0,1,8.87,2.45l.25.76a8,8,0,0,0-5.56,7.67Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M18.28,12.24h-.8V11a5.75,5.75,0,0,0-3.23-5.15l.35-.72A6.55,6.55,0,0,1,18.28,11Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M5.94,12.24h-.8V11A6.5,6.5,0,0,1,8.82,5.16l.35.72A5.7,5.7,0,0,0,5.94,11Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['panicBar'] = (
    <Svg
      viewBox="0 0 39.42 12.56"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Rect stroke = {strokeColor} fill = {fillColor} strokeWidth = {strokeWidth} x="3.73" y="8.71" width="31.73" height="2.72"/>
          <Rect stroke = {strokeColor} fill = {fillColor} strokeWidth = {strokeWidth} x="36.23" y="2.77" width="0.63" height="9.79"/>
          <Rect stroke = {strokeColor} fill = {fillColor} strokeWidth = {strokeWidth} x="2.55" y="2.77" width="0.63" height="9.79"/>
          <Polygon fill = {strokeColor} points="33.68 0 39.42 0 39.42 6.39 37.88 6.39 37.88 1.72 35.22 1.72 35.22 6.39 33.68 6.39 33.68 0"/>
          <Polygon fill = {strokeColor} points="0 0 5.74 0 5.74 6.39 4.19 6.39 4.19 1.72 1.54 1.72 1.54 6.39 0 6.39 0 0"/>
        </G>
      </G>
    </Svg>
  );

  icons['uploadImage'] = (
    <Svg
      viewBox="0 0 23.32 18.28"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M7.46,0H3a.58.58,0,0,0-.58.57v1.5H8V.57A.57.57,0,0,0,7.46,0Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M22.62,2.5H.7a.7.7,0,0,0-.7.7V17.58a.7.7,0,0,0,.7.7H22.62a.7.7,0,0,0,.7-.7V3.19a.7.7,0,0,0-.7-.7Zm-11,14h0a6,6,0,1,1,6-6A6,6,0,0,1,11.66,16.52Z"/>
          <Ellipse stroke={strokeColor} fill={fillColor} strokeWidth={strokeWidth} cx="11.66" cy="10.54" rx="3.89" ry="3.88"/>
        </G>
      </G>
    </Svg>
  );

  icons['rekey'] = (
    <Svg
      viewBox="0 0 30.98 33.21"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Rect fill = {fillColor} x="19.8" y="13.94" width="0.95" height="4.45" transform="translate(-5.63 14.97) rotate(-35.93)"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M11,1.8,10.56,1a8.09,8.09,0,0,1,3.62-1l0,.95A7.14,7.14,0,0,0,11,1.8Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M16.37,1.22A7.2,7.2,0,0,0,15.21,1L15.31,0a8.13,8.13,0,0,1,1.32.26l-.26.91Zm2.13,1a7.12,7.12,0,0,0-1-.6l.41-.86A8,8,0,0,1,19,1.46l-.54.78ZM20.18,3.9a7.13,7.13,0,0,0-.77-.9l.67-.68a8.24,8.24,0,0,1,.87,1Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M30.84,30.23l-5-1.39.54-3.27-3.25-.5.53-3.24-3-.48-4-5.49A8.09,8.09,0,0,1,6.82,5.26l.89.33a7.14,7.14,0,0,0,9,9.27l.33-.11,4.15,5.73,3.53.56-.53,3.24,3.25.5-.55,3.38,3.06.84L30,26.55,19.93,12.62l.21-.28a7.11,7.11,0,0,0,0-8.44L21,3.34a8.06,8.06,0,0,1,.15,9.28L31,26.26Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M13.15,9.18a2.81,2.81,0,0,1-2.82-3l.95,0a1.84,1.84,0,0,0,.35,1.19,1.87,1.87,0,0,0,3-2.19,1.85,1.85,0,0,0-1.5-.77V3.55a2.83,2.83,0,0,1,2.26,1.16,2.82,2.82,0,0,1-2.28,4.47Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M15.38,33.21l-3.16-3.4,1.42-2.16L12.1,25.86,12,23.59l.65-1-.8-1-.26-3.59A7.14,7.14,0,0,1,6.54,10l.94.16a6.22,6.22,0,0,0-.07,1.5,6.15,6.15,0,0,0,4.77,5.57l.34.08.29,4,1.06,1.27L13,23.87,13,25.49l1.78,2.08-1.4,2.14,1.84,2L16.39,30l-.84-12.56.95-.06.86,12.88Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M1.88,12.81A6.83,6.83,0,0,1,11.77,3.4a6.85,6.85,0,0,1,1.87,5.09l-.95-.05a5.82,5.82,0,0,0-1.61-4.38,5.88,5.88,0,0,0-8.52,8.1Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M3.52,11.28a4.69,4.69,0,0,1,.17-6.63A4.6,4.6,0,0,1,7,3.37a4.69,4.69,0,0,1,4.51,4l-.94.15a3.74,3.74,0,1,0-6.4,3.16Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M2.75,13.58a6.86,6.86,0,0,1-.87-.77l.69-.65a5.91,5.91,0,0,0,.75.67l-.57.76ZM5.2,14.73a6.86,6.86,0,0,1-1.28-.45l.4-.86a5.87,5.87,0,0,0,1.1.39Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M28.29,20.49l-.74-1,.77-.56.74,1-.77.56Zm1.49,2-.74-1L29.8,21l.74,1Z"/>
          <Rect fill = {fillColor} x="24.97" y="11.51" width="0.95" height="8.48" transform="translate(-4.4 17.92) rotate(-35.93)"/>
        </G>
      </G>
    </Svg>
  );

  icons['safe'] = (
    <Svg
      viewBox="0 0 29.19 29.37"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Polygon fill = {fillColor} points="29.03 27.48 0 27.48 0 0 29.19 0 29.19 24.62 28.37 24.62 28.37 0.82 0.82 0.82 0.82 26.66 29.03 26.66 29.03 27.48"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M24.55,11.12h1.52v-3H24.55v3Zm2.34.82H23.73V7.3h3.16Z"/>
          <Rect fill = {fillColor} x="24.9" y="11.67" width="0.82" height="5.41"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M24.55,20.48h1.52v-3H24.55v3Zm2.34.82H23.73V16.67h3.16Z"/>
          <Polygon fill = {fillColor} points="3.07 24.47 3.07 3.64 25.68 3.64 25.68 7.71 24.86 7.71 24.86 4.46 3.89 4.46 3.89 23.65 24.97 23.63 24.97 20.96 25.79 20.96 25.79 24.44 3.07 24.47"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M15.28,9.26l-.5,0V8.42a5.48,5.48,0,0,1,.59,0Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M17,9.79a4.58,4.58,0,0,0-.81-.34l.24-.78a5.39,5.39,0,0,1,1,.4L17,9.79Zm1.36,1.12a4.67,4.67,0,0,0-.63-.62l.52-.63a5.47,5.47,0,0,1,.73.73l-.63.52Zm.84,1.54a4.52,4.52,0,0,0-.34-.81l.72-.39a5.37,5.37,0,0,1,.4,1Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M20.18,13.81h-.82a4.59,4.59,0,0,0,0-.5l.81-.09A5.48,5.48,0,0,1,20.18,13.81Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M9.42,14.48a5.4,5.4,0,0,1,5.36-6.06v.82a4.58,4.58,0,0,0-4.54,5.14Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M9.56,15.2a5.29,5.29,0,0,1-.14-.72l.81-.1a4.48,4.48,0,0,0,.12.61l-.79.21Zm1.08,2.08a5.45,5.45,0,0,1-.65-1l.73-.38a4.62,4.62,0,0,0,.55.83l-.63.52Zm1.85,1.43a5.38,5.38,0,0,1-1-.61l.5-.65a4.59,4.59,0,0,0,.85.52l-.35.74Zm2.29.51a5.44,5.44,0,0,1-1.17-.13l.18-.8a4.61,4.61,0,0,0,1,.11Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M14.78,19.21v-.82a4.58,4.58,0,0,0,4.58-4.58h.82A5.4,5.4,0,0,1,14.78,19.21Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M14.78,11.77a2,2,0,1,0,2,2,2,2,0,0,0-2-2Zm0,4.9a2.86,2.86,0,1,1,2.86-2.86A2.86,2.86,0,0,1,14.78,16.67Z"/>
          <Rect fill = {fillColor} x="6.22" y="11.58" width="0.82" height="3.98"/>
          <Rect fill = {fillColor} x="5.12" y="13.16" width="1.51" height="0.82"/>
          <Polygon fill={fillColor} points="7.27 29.37 4.29 29.37 3.66 27.18 4.45 26.95 4.91 28.55 6.65 28.55 7.11 26.95 7.9 27.18 7.27 29.37"/>
          <Polygon fill={fillColor} points="25.14 29.37 22.17 29.37 21.54 27.18 22.32 26.95 22.78 28.55 24.53 28.55 24.99 26.95 25.78 27.18 25.14 29.37"/>
        </G>
      </G>
    </Svg>
  );

  icons['storageUnitLockout'] = (
    <Svg
      viewBox="0 0 25.82 25.11"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            fillRule="evenodd"
            strokeWidth = {strokeWidth}
            d="M19.6,21.88h1.48c0,.18,0,2,0,2H19.61c0-.09,0-1.85,0-2ZM4.91,12.77c0-.12.21-.26.32-.3a15.22,15.22,0,0,1,1.92,0h6.53a.88.88,0,0,1,.55.1c.09.06.28.24.25.38s0,0,0,.15c0,1.74,0,3.6,0,5.34,0,.56,0,5.41,0,5.52H4.84c0-.13,0-5,0-5.59V13.42c0-.17-.06-.55.08-.65Zm-1.26.08a1.64,1.64,0,0,1,.19-.63A1.83,1.83,0,0,1,5,11.31a4.53,4.53,0,0,1,1.16-.07h7.42a2.1,2.1,0,0,1,1.33.3c1,.65.83,1.47.83,2.46v8.26c0,.54,0,1.11,0,1.65H18.6c0-.78,0-1.6,0-2.39,0-.39.14-.63.57-.63h1.19c.38,0,.83,0,1.2,0a.55.55,0,0,1,.41.19.64.64,0,0,1,.12.46c0,.78,0,1.6,0,2.38h1.26V10.26L22,9.38,19.45,7.64c-.41-.27-.89-.59-1.3-.87L12.94,3.27c-.07,0-.13,0-.18.08L9,5.87c-.55.36-1.4,1-1.95,1.32-.22.14-.43.29-.64.43l-.65.44L3.18,9.8,2.86,10a2.39,2.39,0,0,0-.3.21s0,0-.05.07v6.76c0,.67,0,6.74,0,6.85H3.64c0-.17,0-1.13,0-1.37V15.63c0-.91,0-1.86,0-2.77ZM1.32,9.58V8.83c.49-.35.94-.6,1.45-1s1-.7,1.45-1l2.9-1.94L10,3c.43-.29,1.06-.73,1.45-1,.24-.15.49-.33.73-.49s.53-.42.87-.31S15,2.48,15.28,2.66l3.28,2.19c1.1.73,2.18,1.48,3.27,2.19.72.47,1.48,1,2.19,1.46l.18.12c.09.05.1.08.1.2s0,.42,0,.61c-.07,0-.11-.05-.18-.09l-.18-.12L22.17,8c-.24-.16-.45-.32-.71-.48-.57-.36-1.18-.8-1.77-1.19l-1.08-.73-1.42-1L13.29,2a.73.73,0,0,0-.71.07l-2,1.3-.72.47-.71.47c-.22.16-.47.31-.71.47-.47.32-.95.63-1.43,1L6,6.49c-.24.15-.63.44-.89.59l-.18.13-.72.48c-.61.43-1.33.87-2,1.29L2,9.1a6,6,0,0,1-.73.48Zm23.25,1.52c.1-.08.62.06.7-.09a3.6,3.6,0,0,0,0-.75V8.7c0-.13,0-.28,0-.4s0-.09-.07-.13L20.09,4.6c-.7-.49-1.58-1.12-2.29-1.59-.45-.3-.91-.65-1.36-1C15.69,1.55,14.91,1,14.15.46A2,2,0,0,0,13.07,0a2.33,2.33,0,0,0-1.67.62L8.61,2.5C6.75,3.76,4.92,5,3.06,6.23l-.93.62L.51,7.95C.41,8,.37,8.06.25,8A.21.21,0,0,0,0,8.2c0,.16.07.15.08.28s0,.53,0,.77c0,.51,0,1.05,0,1.55,0,.09,0,.23.12.26H1c.1,0,.15-.11.27-.13v13H.75A.61.61,0,0,0,.39,25a.5.5,0,0,0,.38.1H20.68c.37,0,4.59,0,4.73,0a.6.6,0,0,0,0-1.12,1.14,1.14,0,0,0-.43,0c-.44,0-.46,0-.47-.1V12.67C24.55,12.49,24.53,11.15,24.57,11.09Z"/>
          <Path
            stroke = {strokeColor}
            fill = "#fff"
            fillRule="evenodd"
            strokeWidth = {strokeWidth}
            d="M13.79,21.7c-.14.36-.38.31-.8.31H6.2c-.45,0-.62-.32-.53-.58s.48-.31.8-.31h6.78c.21,0,.32,0,.43.14a.42.42,0,0,1,.1.43Zm-7.7-1.86a.45.45,0,1,1,0-.89h7.14a.45.45,0,1,1,0,.89Zm-.09-3c.2,0,4.19,0,4.5,0,.91,0,1.92,0,2.83,0a.44.44,0,0,1,.14.87,10,10,0,0,1-1.13,0H6.13A.44.44,0,0,1,5.7,17,.46.46,0,0,1,6,16.79Zm0-2.21a10,10,0,0,1,1.12,0h5.63c.34,0,.78-.07.95.19a.46.46,0,0,1-.29.7c-.19,0-6.26,0-6.76,0s-.74.07-.94-.19A.44.44,0,0,1,6,14.58Zm-1.06-1.8a5.94,5.94,0,0,0-.06,1.34c0,.79,0,9.63,0,9.78h9.63c0-.14,0-7.81,0-8.23,0-.91,0-1.86,0-2.76,0-.14-.16-.32-.25-.38a.88.88,0,0,0-.55-.1H7.15a15.22,15.22,0,0,0-1.92,0C5.12,12.51,4.93,12.65,4.91,12.77Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            fillRule="evenodd"
            strokeWidth = {strokeWidth}
            d="M6,14.58a.44.44,0,0,0-.29.69c.19.26.57.19.94.19s6.57,0,6.76,0a.46.46,0,0,0,.29-.7c-.16-.26-.6-.19-.95-.19H7.09A10,10,0,0,0,6,14.58Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            fillRule="evenodd"
            strokeWidth = {strokeWidth}
            d="M6.09,19.84h7.17a.45.45,0,1,0,0-.89H6.08A.45.45,0,1,0,6.09,19.84Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            fillRule="evenodd"
            strokeWidth = {strokeWidth}
            d="M6,16.79A.46.46,0,0,0,5.7,17a.44.44,0,0,0,.43.62h6.22a10,10,0,0,0,1.13,0,.44.44,0,0,0-.14-.87c-.9,0-1.91,0-2.83,0C10.19,16.78,6.2,16.75,6,16.79"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            fillRule="evenodd"
            strokeWidth = {strokeWidth}
            d="M13.79,21.7a.42.42,0,0,0-.1-.43c-.11-.13-.22-.14-.43-.14H6.47c-.32,0-.68,0-.8.31s.08.58.53.58H13C13.41,22,13.65,22.06,13.79,21.7Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            fillRule="evenodd"
            strokeWidth = {strokeWidth}
            d="M3.65,12.86a.63.63,0,0,0,0,.33v8c0,.33,0,2.61,0,2.74H2.52c0-.26,0-.59,0-.86l0-9.39c0-.28,0-3.21,0-3.41,0,0,0,0-.05.07v6.76c0,.67,0,6.74,0,6.85H3.64c0-.17,0-1.13,0-1.37V15.63C3.65,14.72,3.67,13.76,3.65,12.86Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['trunkLockout'] = (
    <Svg
      viewBox='0 0 29.77 23.81'
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill={fillColor}
            fillRule="evenodd"
            strokeWidth = {strokeWidth}
            d="M1.37,6.78a5.3,5.3,0,0,1,1,.4c.28.15.57.32.84.49a4.14,4.14,0,0,1,1.09.94.46.46,0,0,1-.11.5c-.16.15-.27.13-.54.13h-2c-.26,0-.23,0-.23-.12,0-.77,0-1.58,0-2.34ZM20.86,18a2.08,2.08,0,0,0,.39-.73,7,7,0,0,0,.26-.86,6.76,6.76,0,0,0,.09-2.1,4.6,4.6,0,0,0-.08-.48,4.35,4.35,0,0,0-.11-.46,7.81,7.81,0,0,0-.3-.83A1.9,1.9,0,0,0,20,11.36a2.74,2.74,0,0,0-.43-.12l-.44-.12c-.61-.14-1.19-.32-1.8-.45l-2.77-.59-1-.16c-.65-.12-1.32-.16-2-.27a4.33,4.33,0,0,0-.5-.06c-.16,0-.35,0-.5-.06A2.1,2.1,0,0,1,9,8.89L8.33,8.2l-.15-.13c-.32-.3-.88-.76-1.23-1-.1-.07-.21-.18-.32-.25L6,6.36A19.55,19.55,0,0,0,3.82,5.13l-.38-.18-.39-.18-.8-.33a3.33,3.33,0,0,0-.88-.24V5.27c0,.09.4.16.48.19A9.61,9.61,0,0,1,4.11,6.64a7.19,7.19,0,0,1,1.12.94A2,2,0,0,1,5.5,8a1.9,1.9,0,0,1-1.18,2.62A4.89,4.89,0,0,1,3,10.71H1.65c-.37,0-.28-.2-.28,1.09,0,2.29,0,4.6,0,6.89h6c0-.1,0-.21.06-.3a6.42,6.42,0,0,1,2.4-3.88A6.7,6.7,0,0,1,12,13.41a6.35,6.35,0,0,1,4.12.19,3.21,3.21,0,0,1,.5.22A6.13,6.13,0,0,1,18.4,15a6.83,6.83,0,0,1,1,1.25c.08.12.18.33.26.47l.23.51a8.44,8.44,0,0,1,.33,1.16c.18,0,.54-.3.66-.43ZM11.45,8.17A.57.57,0,0,1,11.59,8c.32-.3.69-.59,1-.85.51-.4,1-.76,1.57-1.1l.33-.21c.15-.11,1.19-.69,1.37-.77l.73-.35a17.91,17.91,0,0,1,2.31-.9l.68-.19c.17-.06.39-.11.57-.16s.45-.09.66-.15.34,0,.61-.18a.72.72,0,0,0-.33-1.27,3.3,3.3,0,0,0-.92.18c-.57.1-1.13.3-1.69.46s-1.06.38-1.57.57l-.37.16-.74.33a16.58,16.58,0,0,0-1.75.93l-.18.1-.49.31-.32.21c-.29.18-1.27.87-1.55,1.13s-.39.32-.59.48l-1,.9a.4.4,0,0,1-.15.11,2.92,2.92,0,0,1-.37-.34C9.21,7.16,9,7,8.72,6.76s-.8-.65-1.16-.93A20.29,20.29,0,0,0,5,4.2a18.16,18.16,0,0,0-1.9-.89A6.79,6.79,0,0,0,1.51,2.8c-.21,0-.42-.05-.64-.06A.73.73,0,0,0,0,3.3,9.88,9.88,0,0,0,0,4.66V19.31a.77.77,0,0,0,.15.54c.22.34.62.3,1.08.3H6.82a3.5,3.5,0,0,0,1.3-.1,1.16,1.16,0,0,0,.66-.73,4.53,4.53,0,0,0,.12-.59A2.45,2.45,0,0,1,9,18.46c0-.09,0-.19.07-.28A5.49,5.49,0,0,1,9.6,17a5.19,5.19,0,0,1,1.17-1.27,5.11,5.11,0,0,1,3.12-1.05,5.24,5.24,0,0,1,1.24.16,5.06,5.06,0,0,1,1.86.92,4.69,4.69,0,0,1,1.3,1.5c.08.17.16.28.24.47l.23.64c.15.51.12,1,.61,1.31.88.63,2.24-.25,2.74-1l.26-.44a5.87,5.87,0,0,0,.38-1A7.21,7.21,0,0,0,23,14.71a7.87,7.87,0,0,0-.92-3.25,3.07,3.07,0,0,0-1.94-1.55c-.64-.16-1.32-.38-2-.5l-.27-.07-.56-.13-.56-.13-1.16-.24c-1-.2-2-.35-3-.48l-.91-.12C11.65,8.22,11.53,8.24,11.45,8.17Z"/>
          <Path
            fill ={fillColor}
            d="M24,7.2c-.32,0-.52.06-.78.07l-.76.07L21,7.5c-.29,0-1,.09-1.09.11l-.36,0c-.26,0-.53,0-.54-.26s.25-.3.51-.32l1.82-.18.36,0c.42,0,1-.12,1.45-.15s.75-.08,1.11-.11l.17,0c.45,0,1.33-.17,1.7-.14s.61.53.73.89l.57,1.85c.09.31.59,1.84.66,2.15a8.58,8.58,0,0,1,.26.94,3.16,3.16,0,0,1,0,.8c-.22,1.08-.7,1.25-.72,2.52,0,2.14,0,4.3,0,6.43,0,.32-.12.38-.36.43s-.37-.15-.37-.42V15.57a8.83,8.83,0,0,0,0-1.17c0-.11-.06-.2-.09-.32-.12-.41-.26-.81-.38-1.24L25.83,11c-.17-.56-.42-1.31-.57-1.85-.05-.2-.13-.41-.19-.6l-.19-.63A1,1,0,0,0,24,7.2ZM25.81,5l-.9.08c-.55,0-1.25.15-1.78.18-.28,0-.58.08-.88.1l-.88.09c-.3,0-.61,0-.9.09s-.61.07-.9.09l-.22,0c-.12,0-.09,0-.19,0a1.63,1.63,0,0,0-.24,0,1.75,1.75,0,0,0-.8.43,2,2,0,0,0-.31.41,1.8,1.8,0,0,0-.19,1,1.69,1.69,0,0,0,.75,1.2,2.42,2.42,0,0,0,.32.16A2.83,2.83,0,0,0,20,9c.23,0,1-.11,1.33-.14l1.32-.14.46,0a1.81,1.81,0,0,1,.2,0c.3,0,.31-.09.36.08l.17.57c.09.32.27.84.34,1.12a3.89,3.89,0,0,0,.12.39c0,.13.07.24.11.38l.8,2.65a3.29,3.29,0,0,1,.25,1.7V21.4c0,.83-.07,1,.31,1.64a1.85,1.85,0,0,0,.49.48,1.77,1.77,0,0,0,2.19-.24,1.91,1.91,0,0,0,.39-.59,1.89,1.89,0,0,0,.11-.88V15.94a2.38,2.38,0,0,1,.1-.86,3.26,3.26,0,0,1,.14-.35,4.15,4.15,0,0,0,.57-1.88,4.37,4.37,0,0,0,0-.93c0-.14-.05-.28-.09-.4s-.08-.23-.12-.38l-.58-1.88-.12-.36c0-.06,0-.12-.05-.19s0-.1-.06-.18-.08-.26-.12-.38l-.47-1.49a2.23,2.23,0,0,0-.62-1.07A2,2,0,0,0,25.81,5Z"/>
          <Path
            fill ={fillColor}
            d="M16.58,19.93a3.11,3.11,0,0,1-.12.58,2.78,2.78,0,0,1-2,1.84,1.52,1.52,0,0,1-.3.05l-.14,0A2.78,2.78,0,0,1,12.88,17a2.75,2.75,0,0,1,2.28.19,2.79,2.79,0,0,1,1.27,1.5,2.64,2.64,0,0,1,.15,1.22Zm-3.12-4.42a3.75,3.75,0,0,0-.87.17,4.84,4.84,0,0,0-.73.31,4.32,4.32,0,0,0-.63.41,4.17,4.17,0,0,0,1.41,7.26,4.28,4.28,0,0,0,1.56.15,3.09,3.09,0,0,0,.87-.17,2.57,2.57,0,0,0,.38-.14,4.27,4.27,0,0,0,1.51-1.09,4.18,4.18,0,0,0,1-3.1,4.16,4.16,0,0,0-2.49-3.47l-.58-.2A4.38,4.38,0,0,0,13.46,15.51Z"/>
          <Path
            fill ={fillColor}
            d="M24.38,0A3.45,3.45,0,0,0,24,.12a2.26,2.26,0,0,0-1,.65,2.23,2.23,0,0,0-.54,1.62,2.25,2.25,0,1,0,4-1.6,2.26,2.26,0,0,0-.95-.66A2.36,2.36,0,0,0,25,0a4.19,4.19,0,0,0-.66,0Zm.14,1.4a.86.86,0,0,1,1,.64.85.85,0,1,1-1.66.37.76.76,0,0,1,0-.39A.84.84,0,0,1,24.52,1.41Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['footer'] = (
    <Svg
      viewBox='0 0 411 683'
      height='100%'
      width='100%'>
      <G>
       <Path
       stroke = {strokeColor}
       fill = {fillColor}
       strokeWidth = {strokeWidth}
       d="M67.91,474.97c-1.54,0 -2.79,1.25 -2.79,2.79c0,1.54 1.25,2.79 2.79,2.79c1.54,0 2.79,-1.25 2.79,-2.79c0,-1.54 -1.25,-2.79 -2.79,-2.79zM413.6,634.5c-6.28,-6.96 -13.31,-14.73 -19.83,-13.23c-13.47,3.11 -11.08,41.91 -24.23,44.09c-2.36,0.39 -7.08,-2.13 -16.52,-7.16c-10.96,-5.85 -10.94,-7.44 -15.42,-8.27c-11.35,-2.1 -21.88,6.16 -23.13,7.16c-6.72,5.42 -5.83,9.22 -11.22,11.27c-7.89,3.01 -16.89,-2.45 -19.62,-4.11c-10.45,-6.34 -9.59,-13.24 -15.42,-14.33c-10.59,-1.97 -17.17,20.05 -29.74,19.29c-9.89,-0.6 -12.17,-14.6 -21.48,-14.33c-8.7,0.25 -9.44,12.58 -20.93,17.63c-15.37,6.76 -34.81,-6.15 -39.66,-9.37c-14.41,-9.57 -15.39,-18.01 -28.09,-32.52c-1.62,-1.86 -20.91,-23.45 -47.92,-33.62c-5.26,-1.98 -46.56,-16.85 -79.86,3.31v82.66h413.07zM402.59,621.28c-13.47,3.11 -11.08,41.91 -24.23,44.09c-2.36,0.39 -7.08,-2.13 -16.52,-7.16c-10.96,-5.85 -10.94,-7.44 -15.42,-8.27c-11.35,-2.1 -21.88,6.16 -23.13,7.16c-6.72,5.42 -5.83,9.22 -11.22,11.27c-7.89,3.01 -16.89,-2.45 -19.62,-4.11c-10.45,-6.34 -9.59,-13.24 -15.42,-14.33c-10.59,-1.97 -17.17,20.05 -29.74,19.29c-9.89,-0.6 -12.17,-14.6 -21.48,-14.33c-8.7,0.25 -9.44,12.58 -20.93,17.63c-15.37,6.76 -34.81,-6.15 -39.66,-9.37c-14.41,-9.57 -15.39,-18.01 -28.09,-32.52c-1.62,-1.86 -20.91,-23.45 -47.91,-33.62c-5.26,-1.98 -46.56,-16.85 -79.86,3.31v82.66h404.26v-57.45c-3.69,-3.11 -7.43,-5.1 -11.01,-4.27zM61.63,4.85c-0.2,0.2 -0.2,0.52 0,0.72l4.54,4.54c0.21,0.2 0.52,0.2 0.72,0c0.2,-0.2 0.2,-0.52 0,-0.72l-3.67,-3.67h12.11c0.28,0 0.51,-0.23 0.51,-0.51c0,-0.28 -0.23,-0.51 -0.51,-0.51h-12.11l3.67,-3.67c0.2,-0.2 0.2,-0.52 0,-0.71c-0.2,-0.21 -0.52,-0.21 -0.72,0z"
       />
      </G>
    </Svg>
  );

  icons['typeHandle'] = (
    <Svg
      viewBox="0 0 19.92 22"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M6.76,7.81a15.08,15.08,0,0,1,10.77.13c.63.26,1.58.84,2.22-.15a1.24,1.24,0,0,0,0-1.28,1.92,1.92,0,0,0-1-.64A17.45,17.45,0,0,0,6,5.54c-.37.13-.27.07-.58-.1A2.47,2.47,0,0,0,1.85,7.6,2.43,2.43,0,0,0,3,9.69,2.46,2.46,0,0,0,6.76,7.81Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M5.24,16.29c0,.5,0,1,0,1.5s0,.84-.37,1.1a1,1,0,0,1-1.11,0c-.69-.5-.22-1.83-.39-2.54,0-.09-.09-.13-.17-.21a1.46,1.46,0,0,1,1-2.39v.51c-.14.09-.44.27-.47.5.13.15.35.22.5.39,0,.13-.2,1,.14.77.13-.07.05-.35.07-.49s.11-.12.13-.36a2,2,0,0,0-.45-.35c0-.15.26-.2.32-.33a3.33,3.33,0,0,0,0-.63,1.44,1.44,0,0,1,.79,2.54ZM.17,18.77a1,1,0,0,0,.05.2l0,.08a.22.22,0,0,0,.06.08A2.88,2.88,0,0,0,.82,20.2,4.28,4.28,0,0,0,8,19.9a4.62,4.62,0,0,0,.59-2.57V7.86a7,7,0,0,0-1.25.33c-.15.08-.16.38-.23.55A3,3,0,1,1,5.64,4.92c.27.14.21.11.53,0a14.7,14.7,0,0,1,2.4-.64A4.26,4.26,0,0,0,1.75.85L1.6,1A4.61,4.61,0,0,0,.42,2.49C-.15,3.78,0,5.48,0,7.05V15A20,20,0,0,0,.17,18.77Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['knob'] = (
    <Svg
      viewBox="0 0 14.97 27.1"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Rect
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            x="2"
            width="10.98"
            height="27.1"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M7.49,1a7,7,0,1,1-7,7,7,7,0,0,1,7-7Zm0-.5A7.49,7.49,0,1,0,15,8,7.49,7.49,0,0,0,7.49.5Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M7.49,3a5,5,0,1,1-5,5,5,5,0,0,1,5-5Zm0-.36A5.35,5.35,0,1,0,12.84,8,5.35,5.35,0,0,0,7.49,2.64Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M7.49,5.86A2.13,2.13,0,1,1,5.36,8,2.13,2.13,0,0,1,7.49,5.86Zm0-.15A2.28,2.28,0,1,0,9.77,8,2.28,2.28,0,0,0,7.49,5.7Z"/>
          <Circle
            fill='#fff'
            cx="7.49"
            cy="7.99"
            r="7.49"/>
          <Circle
            fill='#000'
            cx="7.49"
            cy="7.99"
            r="6.99"/>
          <Circle
            fill='#fff'
            cx="7.49"
            cy="7.99"
            r="5.35"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M7.49,4.19A3.79,3.79,0,1,1,3.69,8,3.79,3.79,0,0,1,7.49,4.19Zm0,1.66A2.13,2.13,0,1,0,9.62,8,2.13,2.13,0,0,0,7.49,5.86Z"/>
          <Path
            stroke = {strokeColor}
            fill='#fff'
            strokeWidth = {strokeWidth}
            d="M7.49,19.59A1.52,1.52,0,0,0,6,21.11a1.5,1.5,0,0,0,.76,1.31.38.38,0,0,1,.16.46l-.75,2H8.84l-.76-2a.38.38,0,0,1,.16-.46A1.5,1.5,0,0,0,9,21.11,1.52,1.52,0,0,0,7.49,19.59Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['deadBolt'] = (
    <Svg
      viewBox="0 0 18.97 18.97"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Circle fill={fillColor} cx="9.48" cy="9.48" r="9.48"/>
          <Circle fill='#fff' cx="9.48" cy="9.48" r="7.26"/>
          <Circle fill='#fff' cx="9.48" cy="9.48" r="5.44"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M9.48,6.52A1.69,1.69,0,0,0,7.79,8.21a1.67,1.67,0,0,0,.84,1.45.42.42,0,0,1,.18.51L8,12.44h3l-.84-2.26a.42.42,0,0,1,.18-.51,1.67,1.67,0,0,0,.84-1.45A1.69,1.69,0,0,0,9.48,6.52Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['keyPad'] = (
    <Svg
      viewBox="0 0 22.79 21.89"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M16.24,16.44l-.59-.95a.94.94,0,0,1,.3-1.3,1.25,1.25,0,0,1,1.73.4l.26.41-.56.35-.26-.41a.59.59,0,0,0-.82-.19.28.28,0,0,0-.09.39l.6.95Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M17.69,15.87l-.47-.76A1.09,1.09,0,1,1,19.08,14l.28.45-.56.35-.28-.45a.44.44,0,1,0-.74.46l.47.76Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M19.05,21.89a3.74,3.74,0,0,1-1.91-.52L13.23,19a1.09,1.09,0,0,1-.43-1.47,1.09,1.09,0,0,1,1.48-.46l.86.46-2.48-3.95a1.09,1.09,0,0,1,.34-1.5,1.09,1.09,0,0,1,.84-.15,1.08,1.08,0,0,1,.68.48l2.34,3.73-.56.35L14,12.82a.43.43,0,0,0-.59-.14.44.44,0,0,0-.2.28.43.43,0,0,0,.05.32l3,4.86a.38.38,0,0,1-.5.53l-1.8-1a.43.43,0,0,0-.58.17.44.44,0,0,0,0,.34.43.43,0,0,0,.21.26l3.93,2.33a3.08,3.08,0,0,0,4.21-4.25L20,13.79a.44.44,0,0,0-.74.47l.33.52-.56.35-.33-.52a1.1,1.1,0,1,1,1.86-1.17l1.68,2.77a3.74,3.74,0,0,1-3.2,5.68Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M12,19.62H0V1.57A1.57,1.57,0,0,1,1.57,0H20.08a1.57,1.57,0,0,1,1.57,1.57V12.92H21V1.57a.91.91,0,0,0-.91-.91H1.57a.91.91,0,0,0-.91.91V19H12Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M3.08,7.06H18.24v-4H3.08v4Zm15.82.66H2.42V2.4H18.9Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M15,9.26h-.88V8.6H15v.66Zm1.76,0H15.9V8.6h.88v.66Zm1.76,0h-.88V8.6h.88Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M11.6,13.85a2.27,2.27,0,1,1,3.94-1.52h-.66a1.61,1.61,0,1,0-2.8,1.08Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M3.08,12H9V10.78H3.08V12Zm6.54.66H2.42V10.12h7.2Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M3.08,13.89H9V12.66H3.08v1.22Zm6.54.66H2.42V12h7.2Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M3.08,15.77H9V14.55H3.08v1.22Zm6.54.66H2.42V13.89h7.2Z"/>
          <Rect x="4.58" y="10.45" width="0.66" height="5.74"/>
          <Rect x="6.79" y="10.45" width="0.66" height="5.74"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M12.22,21.16h-.88V20.5h.88v.66Zm1.76,0H13.1V20.5H14Z"/>
          <Rect x="0.33" y="20.5" width="11.01" height="0.66"/>
        </G>
      </G>
    </Svg>
  );

  icons['mailBox'] = (
    <Svg
      viewBox="0 0 18.42 21.25"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill="#fff"
            strokeWidth = {strokeWidth}
            d="M7.84,15.23h1V20.5h-1V15.23ZM.75,13.65H17.68v.87H.75v-.87ZM9.21,11c.17.11,1.33,1.49,1.58,1.49.62,0,1.5-1.58,2-1.7.17.11.78.8,1,1.07a13.06,13.06,0,0,1,1.07,1.09H9.21V11ZM15.38,8l-2.15,2.17a19,19,0,0,1,1.61,1.63,4.52,4.52,0,0,0,.55.53V8Zm-4.55,3.5c.2-.13,2.66-2.64,3.06-3l1-1H9.38c0,.22-.1.46-.12.71s0,.45,0,.74c0,1.18-.1.87.38,1.36l1.23,1.26Zm2.57-7.1a4.42,4.42,0,0,0-2.71,1,4.48,4.48,0,0,0-.7.79,5.24,5.24,0,0,0-.28.47h5.15c.55,0,1.29-.13,1.29.41v5.77h1.54V8.47a4,4,0,0,0-.43-1.65A4.21,4.21,0,0,0,13.4,4.44ZM8.47,9.13a5.23,5.23,0,0,1,1-3.43,6.7,6.7,0,0,1,.85-.89,3.93,3.93,0,0,0,.5-.37H7.88V8.67A1.23,1.23,0,0,1,6.72,10H6.51A1.24,1.24,0,0,1,5.44,8.76V4.44a4.58,4.58,0,0,0-2.79.7,4,4,0,0,0-.84.74c-.09.12-.15.17-.24.3A4.26,4.26,0,0,0,.75,8.47v4.44H8.47V9.13ZM3.82,1.29a.53.53,0,0,1,.5-.54H6.76c.17,0,.37.24.37.54V8.71c0,.42-.22.54-.54.54s-.42-.48-.41-.91v-4c0-.79.17-1.78-.48-2.22s-1.89.07-1.89-.81ZM5.44,3.11v.58A5.26,5.26,0,0,0,1.57,5.05,5.06,5.06,0,0,0,0,8.51v6.35c0,.17.14.37.29.37H7.1V21a.37.37,0,0,0,.29.29H9.21c.25,0,.37-.2.37-.46V15.23h8.55c.15,0,.29-.2.29-.37V8.51A5,5,0,0,0,16.7,4.92a3.23,3.23,0,0,0-.54-.41,4,4,0,0,0-.81-.43,5.52,5.52,0,0,0-2.15-.38H7.88V1.41a1.48,1.48,0,0,0-.28-1A1.2,1.2,0,0,0,6.76,0H4.32A1.29,1.29,0,0,0,3.25,1.93c.53.89,1.32.56,1.82.67A.45.45,0,0,1,5.44,3.11Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['camera'] = (
    <Svg
      viewBox="0 0 29.17 21.2"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M9.1,2.9V0H3.43V2.9H0V21.2H29.17V2.9Zm-4-1.19H7.39V2.9H5.14ZM27.46,19.49H1.71V4.61H27.46Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M5.41,6.66H7.12V17.47H5.41Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M17.29,18.34A6.27,6.27,0,1,0,11,12.07,6.28,6.28,0,0,0,17.29,18.34Zm0-10.83a4.56,4.56,0,1,1-4.55,4.56A4.56,4.56,0,0,1,17.29,7.51Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M16.15,10.93h2.28v2.28H16.15Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['pictures'] = (
    <Svg
      viewBox="0 0 6.37 5.58"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M3.23,2a.65.65,0,1,0,.65.65A.65.65,0,0,0,3.23,2Zm0,1a.34.34,0,0,1,0-.68h0a.34.34,0,1,1,0,.68Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M5.82.49,1.59,0a.53.53,0,0,0-.45.13.59.59,0,0,0-.23.4l-.07.63H.6a.63.63,0,0,0-.6.65V5a.59.59,0,0,0,.57.6H4.84A.63.63,0,0,0,5.49,5V4.86a.81.81,0,0,0,.3-.13A.64.64,0,0,0,6,4.31l.36-3.14A.62.62,0,0,0,5.82.49ZM5.18,5a.32.32,0,0,1-.34.29H.6A.27.27,0,0,1,.31,5V4.41l1.2-.88a.35.35,0,0,1,.48,0l.84.74a.71.71,0,0,0,.46.17.69.69,0,0,0,.37-.1l1.52-.88V5Zm0-1.86L3.5,4.1a.41.41,0,0,1-.46,0l-.85-.75a.69.69,0,0,0-.86,0L.31,4V1.82A.32.32,0,0,1,.6,1.48H4.84a.36.36,0,0,1,.34.34v1.3Zm.88-2h0L5.69,4.28a.23.23,0,0,1-.1.2s-.1,0-.1.07V1.82a.66.66,0,0,0-.65-.65H1.15l.06-.6a.37.37,0,0,1,.12-.2A.32.32,0,0,1,1.56.31L5.78.79A.32.32,0,0,1,6.06,1.13Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['googleDrive'] = (
    <Svg
      viewBox="0 0 6.37 5.22"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M5.33,5.22l1-1.48L4.17,0h-2L0,3.74,1,5.22Zm-.19-.37H1.42L2,3.91h3.8Zm-1-1.31H2.22L3.19,2Zm1.65,0H4.61L2.64.37H4ZM2.31.55,3,1.6,1.1,4.66.44,3.72Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['takePicture'] = (
    <Svg
      viewBox="0 0 6.37 5.05"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M6,.44H.37A.38.38,0,0,0,0,.81V4.68a.37.37,0,0,0,.37.37H6a.37.37,0,0,0,.37-.37V.81A.38.38,0,0,0,6,.44Zm.15,4.24A.15.15,0,0,1,6,4.83H.37a.15.15,0,0,1-.15-.15V.81A.15.15,0,0,1,.37.66H6a.15.15,0,0,1,.15.15Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M3.29.88A1.87,1.87,0,1,0,5.16,2.75,1.87,1.87,0,0,0,3.29.88Zm0,3.51A1.65,1.65,0,1,1,4.94,2.75,1.65,1.65,0,0,1,3.29,4.39Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M2.2.22H4.28A.11.11,0,0,0,4.39.11.11.11,0,0,0,4.28,0H2.2a.11.11,0,0,0-.11.11A.11.11,0,0,0,2.2.22Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['regular-key'] = (
    <Svg
      viewBox="0 0 20.25 21.7"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Rect x="12.94" y="9.11" width="0.62" height="2.9" transform="translate(-3.68 9.78) rotate(-35.93)"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M7.2,1.18,6.9.63A5.29,5.29,0,0,1,9.26,0l0,.62A4.66,4.66,0,0,0,7.2,1.18Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M10.7.8A4.72,4.72,0,0,0,9.94.65L10,0a5.3,5.3,0,0,1,.86.17L10.7.8Zm1.39.66a4.67,4.67,0,0,0-.67-.39l.27-.56a5.2,5.2,0,0,1,.76.44l-.36.51Zm1.1,1.08a4.67,4.67,0,0,0-.5-.59l.44-.44a5.37,5.37,0,0,1,.57.67Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M20.15,19.75l-3.3-.91.35-2.14-2.12-.33.35-2.12-1.95-.31-2.6-3.59A5.29,5.29,0,0,1,4.46,3.43L5,3.65a4.67,4.67,0,0,0,5.87,6.06l.22-.07,2.71,3.74,2.31.37-.35,2.12,2.12.33-.36,2.21,2,.55.06-1.6L13,8.25l.14-.18a4.65,4.65,0,0,0,0-5.52l.5-.36a5.26,5.26,0,0,1,.1,6.06l6.46,8.91Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M8.6,6A1.84,1.84,0,0,1,6.75,4.07l.62,0a1.2,1.2,0,0,0,.23.77,1.22,1.22,0,1,0,1-1.94V2.32a1.85,1.85,0,0,1,1.48.76A1.84,1.84,0,0,1,8.6,6Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M10,21.7,8,19.48l.93-1.41-1-1.17,0-1.48.43-.63-.52-.63-.17-2.35A4.66,4.66,0,0,1,4.27,6.54l.61.1A4,4,0,0,0,8,11.26l.22.05.19,2.6.69.83-.57.85,0,1.06L9.68,18l-.92,1.4L10,20.71l.74-1.11-.55-8.21.62,0,.56,8.42Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M1.23,8.37A4.46,4.46,0,1,1,7.69,2.22,4.48,4.48,0,0,1,8.92,5.55l-.62,0A3.8,3.8,0,0,0,7.24,2.65a3.84,3.84,0,0,0-5.57,5.3Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M2.3,7.37A3.07,3.07,0,0,1,2.41,3,3,3,0,0,1,4.59,2.2,3.06,3.06,0,0,1,7.54,4.78l-.61.1A2.44,2.44,0,1,0,2.75,6.94Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M1.8,8.88a4.51,4.51,0,0,1-.57-.51l.45-.43a3.87,3.87,0,0,0,.49.44l-.37.5Zm1.6.75a4.5,4.5,0,0,1-.84-.3l.26-.56A3.86,3.86,0,0,0,3.54,9Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M18.48,13.39,18,12.72l.5-.36L19,13l-.5.36Zm1,1.34L19,14.06l.5-.36.48.67Z"/>
          <Rect x="16.31" y="7.52" width="0.62" height="5.54" transform="translate(-2.88 11.71) rotate(-35.93)"/>
        </G>
      </G>
    </Svg>
  );

  icons['remote-key'] = (
    <Svg
      viewBox="0 0 8.66 21.35"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M6.65,12.94a1,1,0,0,0,1-.94L8,1.69a1,1,0,0,0-1-1H1.65a1,1,0,0,0-1,1L1,12a1,1,0,0,0,1,.94ZM1.65,0H7A1.65,1.65,0,0,1,8.65,1.71L8.29,12A1.64,1.64,0,0,1,6.65,13.6H2A1.64,1.64,0,0,1,.36,12L0,1.71A1.65,1.65,0,0,1,1.65,0Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M4.53,7.75A1.06,1.06,0,0,0,5.59,6.69V4.18A1.06,1.06,0,0,0,4.53,3.12H4.12A1.06,1.06,0,0,0,3.06,4.18v2.5A1.06,1.06,0,0,0,4.12,7.75Zm-.41-5.3h.41A1.73,1.73,0,0,1,6.26,4.18v2.5A1.73,1.73,0,0,1,4.53,8.42H4.12A1.73,1.73,0,0,1,2.39,6.69V4.18A1.73,1.73,0,0,1,4.12,2.45Z"/>
          <Rect stroke = {strokeColor} fill = {fillColor} strokeWidth = {strokeWidth} x="2.84" y="5.1" width="3.09" height="0.67"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M5.67,11.51a.42.42,0,1,0-.42-.42.42.42,0,0,0,.42.42Zm0-1.51a1.09,1.09,0,1,1-1.09,1.09A1.09,1.09,0,0,1,5.67,10Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M4.22,14.16c0,.6,0,2.43,0,3.16,0,.23,0,3,0,3.16a1.43,1.43,0,0,1-.57,0V13.43a17.79,17.79,0,0,1,1.79,0c0,.16,0,4.65,0,5.28a.91.91,0,0,1,0,.36l-.54,1.17c0-.21,0-4.89,0-5.34,0-.22,0-.67-.07-.81a.32.32,0,0,0-.55.08Zm-.68,7.19H4.82c.19-.08.47-.06.69-.47.09-.17.7-1.49.73-1.61a7.34,7.34,0,0,0,0-1.16c0-.35,0-4.46,0-4.69H2.74c0,.71,0,1.47,0,2.19V20a1.71,1.71,0,0,0,.13,1A1,1,0,0,0,3.54,21.35Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['push-to-start'] = (
    <Svg
      viewBox="0 0 13.03 19.99"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M3.19,11.4c-.38,0-.62-.49-.88-.92A2.71,2.71,0,0,0,1.95,10,1.18,1.18,0,0,0,.19,11.51l4.15,7.95c.09.14.21.53.37.53h6.17c.17,0,.2-.2.2-.39l.1-1.66c.08-.54-.13-.4.22-1a10.68,10.68,0,0,0,1.5-3.22c.3-1.18.15-2.92-1-3.5a2,2,0,0,0-.69-.21c-.35-.06-.37-.05-.58-.32-.8-1-1.69-.53-2.09-.53-.16,0-.14-.24-.58-.6a1.53,1.53,0,0,0-1.3-.26c-.64.09-.55.39-.55-1.29V5.54c0-.73.06-1.29-.56-1.66a1.24,1.24,0,0,0-1.09-.07A1.16,1.16,0,0,0,4.08,4a1.18,1.18,0,0,0-.34.83c-.05,1.07,0,3.46,0,4.69,0,.5.09,1.38-.12,1.64A.49.49,0,0,1,3.19,11.4Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M1.24,3.51a3.69,3.69,0,0,0,.7,2.39c.58.8.94.16.94-.08S2.1,5.15,2.1,3.63A2.86,2.86,0,1,1,7.45,5.12c-.24.4-.39.47-.39.78,0,.1.32,1,1.1-.27a3.74,3.74,0,0,0-.26-4.2A3.45,3.45,0,0,0,7.18.74,3.49,3.49,0,0,0,6.3.25,3.52,3.52,0,0,0,5.2,0H4.77A4.09,4.09,0,0,0,3.35.35,3.76,3.76,0,0,0,1.24,3.51Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M3,3.67A1.87,1.87,0,0,0,3,4.26l.07-.13A1.91,1.91,0,0,1,4.92,2.9a1.93,1.93,0,0,1,1.9,1.35H6.9a2.19,2.19,0,0,0-.17-1.43,1.94,1.94,0,0,0-.95-.93A2,2,0,0,0,3,3.67Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['remote-only'] = (
    <Svg
      viewBox="0 0 12.69 19.94"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M2.95,1A1.43,1.43,0,0,0,1.51,2.36L1,17.47A1.44,1.44,0,0,0,2.41,19h7.86a1.43,1.43,0,0,0,1.43-1.49L11.17,2.36A1.43,1.43,0,0,0,9.74,1Zm7.33,19H2.41A2.41,2.41,0,0,1,0,17.43L.54,2.32A2.41,2.41,0,0,1,2.95,0H9.74a2.41,2.41,0,0,1,2.41,2.32l.53,15.12a2.41,2.41,0,0,1-2.41,2.5Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M6,8.58a1.56,1.56,0,0,0-1.56,1.56v3.67A1.56,1.56,0,0,0,6,15.37h.6A1.56,1.56,0,0,0,8.2,13.81V10.14A1.56,1.56,0,0,0,6.64,8.58Zm.6,7.76H6a2.54,2.54,0,0,1-2.54-2.54V10.14A2.54,2.54,0,0,1,6,7.6h.6a2.54,2.54,0,0,1,2.54,2.54v3.67A2.54,2.54,0,0,1,6.64,16.35Z"/>
          <Rect x="4" y="11.49" width="4.53" height="0.98"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M4.37,3.07A.62.62,0,1,0,5,3.69a.62.62,0,0,0-.62-.62Zm0,2.22A1.6,1.6,0,1,1,6,3.69,1.6,1.6,0,0,1,4.37,5.29Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['lock'] = (
    <Svg
      viewBox="0 0 22.03 29.76"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
        <Path
          stroke = {strokeColor}
          fill = {fillColor}
          strokeWidth = {strokeWidth}
          d="M22,13.54a1.87,1.87,0,0,0-1.63-1.85V9.4h0a9.4,9.4,0,1,0-18.79,0v2.3A1.86,1.86,0,0,0,0,13.54V27.82a1.93,1.93,0,0,0,1.86,1.94H20.17A1.93,1.93,0,0,0,22,27.82V13.54ZM1.86,28.36a.55.55,0,0,1-.45-.54V13.54a.45.45,0,0,1,.45-.45H20.17a.45.45,0,0,1,.45.45V27.82a.55.55,0,0,1-.45.54ZM5.2,9.4a5.82,5.82,0,1,1,11.63,0v2.28H5.2Zm5.81-8a8,8,0,0,1,8,8v2.28h-.75V9.4h0a7.23,7.23,0,1,0-14.45,0v2.28H3V9.4A8,8,0,0,1,11,1.41Z"/>
        <Path
          stroke = {strokeColor}
          fill = {fillColor}
          strokeWidth = {strokeWidth}
          d="M11,16.07a2.13,2.13,0,1,0,2.13,2.13A2.13,2.13,0,0,0,11,16.07Zm0,3.17a1,1,0,0,1,0-2.08,1,1,0,0,1,0,2.08Z"/>
        <Path
          stroke = {strokeColor}
          fill = {fillColor}
          strokeWidth = {strokeWidth}
          d="M4.79,16.07A2.13,2.13,0,1,0,6.92,18.2,2.13,2.13,0,0,0,4.79,16.07Zm0,3.17a1,1,0,0,1,0-2.08,1,1,0,1,1,0,2.08Z"/>
        <Path
          stroke = {strokeColor}
          fill = {fillColor}
          strokeWidth = {strokeWidth}
          d="M17.22,16.07a2.13,2.13,0,1,0,2.13,2.13A2.13,2.13,0,0,0,17.22,16.07Zm0,3.17a1,1,0,1,1,1-1A1,1,0,0,1,17.22,19.24Z"/>
        <Path
          stroke = {strokeColor}
          fill = {fillColor}
          strokeWidth = {strokeWidth}
          d="M11,21.12a2.13,2.13,0,1,0,2.13,2.12A2.13,2.13,0,0,0,11,21.12Zm0,3.17a1,1,0,1,1,1-1.05A1,1,0,0,1,11,24.29Z"/>
        <Path
          stroke = {strokeColor}
          fill = {fillColor}
          strokeWidth = {strokeWidth}
          d="M4.79,21.12a2.13,2.13,0,1,0,2.13,2.12A2.13,2.13,0,0,0,4.79,21.12Zm0,3.17a1,1,0,1,1,1-1.05A1,1,0,0,1,4.79,24.29Z"/>
        <Path
          stroke = {strokeColor}
          fill = {fillColor}
          strokeWidth = {strokeWidth}
          d="M17.22,21.12a2.13,2.13,0,1,0,2.13,2.12A2.13,2.13,0,0,0,17.22,21.12Zm0,3.17a1,1,0,1,1,1-1.05A1,1,0,0,1,17.22,24.29Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['pictureTaker'] = (
    <Svg
      viewBox="0 0 6.37 5.05"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M6,.44H.37A.38.38,0,0,0,0,.81V4.68a.37.37,0,0,0,.37.37H6a.37.37,0,0,0,.37-.37V.81A.38.38,0,0,0,6,.44Zm.15,4.24A.15.15,0,0,1,6,4.83H.37a.15.15,0,0,1-.15-.15V.81A.15.15,0,0,1,.37.66H6a.15.15,0,0,1,.15.15Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M3.29.88A1.87,1.87,0,1,0,5.16,2.75,1.87,1.87,0,0,0,3.29.88Zm0,3.51A1.65,1.65,0,1,1,4.94,2.75,1.65,1.65,0,0,1,3.29,4.39Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M2.2.22H4.28A.11.11,0,0,0,4.39.11.11.11,0,0,0,4.28,0H2.2a.11.11,0,0,0-.11.11A.11.11,0,0,0,2.2.22Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['pictureIcon'] = (
    <Svg
      viewBox="0 0 83 83"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Rect fill='#fff' width="83" height="83" rx="5.67" ry="5.67"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M57.34,61.74H25.66a7.12,7.12,0,0,1-7.14-7.08V34.89a7.12,7.12,0,0,1,7.14-7.08h7.12v-.52a4,4,0,0,1,4-4h9.47a4,4,0,0,1,4,4v.52h7.12a7.12,7.12,0,0,1,7.14,7.08V54.66a7.12,7.12,0,0,1-7.14,7.08ZM25.66,30.11h0a4.82,4.82,0,0,0-4.84,4.78V54.66a4.82,4.82,0,0,0,4.84,4.78H57.34a4.82,4.82,0,0,0,4.84-4.78V34.89a4.82,4.82,0,0,0-4.84-4.78H47.92V27.29a1.68,1.68,0,0,0-1.69-1.66H36.77a1.68,1.68,0,0,0-1.69,1.66v2.82Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M41.5,54.48a9.71,9.71,0,1,1,9.79-9.71,9.76,9.76,0,0,1-9.79,9.71Zm0-17.12h0A7.41,7.41,0,1,0,49,44.77,7.46,7.46,0,0,0,41.5,37.36Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['chatIcon'] = (
    <Svg
      viewBox="0 0 26.4 23.64"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Rect fill="#f8981e" x="7.31" y="6.47" width="11.78" height="1.32" />
          <Rect fill="#f8981e" x="7.31" y="10.79" width="11.78" height="1.32" />
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M2.8,23.64l2-6.28A9.2,9.2,0,0,1,0,9.29,9.35,9.35,0,0,1,9.4,0H17a9.36,9.36,0,0,1,9.4,9.29A9.35,9.35,0,0,1,17,18.58H12.11L2.8,23.64ZM9.4,1.32h0a8,8,0,0,0-8.08,8,7.91,7.91,0,0,0,4.53,7.15l.51.25L5,20.92l6.74-3.66H17a8,8,0,0,0,8.08-8,8,8,0,0,0-8.08-8Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['phone'] = (
    <Svg
      viewBox="0 0 22.38 22.08"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M13.94,17l0,0a20.79,20.79,0,0,1-5-3.54,21.51,21.51,0,0,1-3.54-5L5.23,8.2l1.29.34a19.33,19.33,0,0,0,3.06,4.21,18.34,18.34,0,0,0,4,2.95Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M15.5,21.05a8.37,8.37,0,0,0,4.24-.53A4.15,4.15,0,0,0,21,19.73a1.09,1.09,0,0,0,.4-.76,1,1,0,0,0-.36-.67l-3.43-3.43h0a.78.78,0,0,0-.59-.22.93.93,0,0,0-.62.27h0l-2,2-.05.05-.28-1.07,1.63-1.63h0A1.89,1.89,0,0,1,17,13.69a1.72,1.72,0,0,1,1.3.5h0l3.43,3.43A1.92,1.92,0,0,1,22.38,19a2,2,0,0,1-.68,1.46,5.09,5.09,0,0,1-1.59,1,9.44,9.44,0,0,1-4.34.64Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M1.1,7.09a16.5,16.5,0,0,0,4.2,7.23c2.79,3.06,6.39,5.6,9.25,6.51L15,21l.27,1a6.88,6.88,0,0,1-1-.24c-3-1-6.78-3.6-9.67-6.78C2.26,12.41.48,9.5.08,6.82Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M1,6c0,.19,0,.38.05.57L0,6.31Q0,6.18,0,6A8.8,8.8,0,0,1,1.06,2,5.15,5.15,0,0,1,2.18.53,1.81,1.81,0,0,1,3.76,0a1.91,1.91,0,0,1,.95.55L8.14,4a1.72,1.72,0,0,1,.5,1.27A1.88,1.88,0,0,1,8.1,6.57h0L6.6,8.07,5.53,7.78,7.42,5.9h0a.92.92,0,0,0,.27-.63.78.78,0,0,0-.23-.58L4,1.26A1,1,0,0,0,3.56,1a.91.91,0,0,0-.76.28,4.21,4.21,0,0,0-.9,1.2A7.77,7.77,0,0,0,1,6Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['lockicon'] = (
    <Svg
      viewBox="0 0 13.31 16.4"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M8,16.4H5.34A5.38,5.38,0,0,1,0,11V4.56H13.31V11A5.38,5.38,0,0,1,8,16.4ZM.82,5.38h0V11a4.56,4.56,0,0,0,4.52,4.58H8A4.56,4.56,0,0,0,12.49,11V5.38Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M10.8,5H10V3.39A2.56,2.56,0,0,0,7.44.82H5.87A2.56,2.56,0,0,0,3.33,3.39V5H2.51V3.39A3.38,3.38,0,0,1,5.87,0H7.44A3.38,3.38,0,0,1,10.8,3.39Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M6.65,10.89a1.71,1.71,0,1,1,1.7-1.71,1.71,1.71,0,0,1-1.7,1.71Zm0-2.61h0a.89.89,0,1,0,.88.89A.89.89,0,0,0,6.65,8.28Z"/>
          <Rect fill={fillColor} x="6.24" y="10.48" width="0.82" height="2.81"/>
        </G>
      </G>
    </Svg>
  );

  icons['emailicon'] = (
    <Svg
      viewBox="0 0 16.38 16.4"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M14.38,16.4H.41A.41.41,0,0,1,0,16V2a.41.41,0,0,1,.41-.41H7v.82H.82V15.58H14V9.4h.82V16A.41.41,0,0,1,14.38,16.4Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M9.07,10.81H6a.41.41,0,0,1-.41-.41V7.31A.41.41,0,0,1,5.7,7L12.6.12a.42.42,0,0,1,.58,0L16.26,3.2a.41.41,0,0,1,0,.58l-6.9,6.91a.41.41,0,0,1-.29.12ZM6.4,10H8.9l6.49-6.5L12.89,1,6.4,7.48Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['whiteFrame'] = (
    <Svg
      viewBox="0 0 97.14 107.46"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Polygon fill = {fillColor} points="97.03 0.11 0.11 0.11 0.11 97.03 35.34 97.03 45.75 107.3 56.19 97.03 97.03 97.03 97.03 0.11"/>
        </G>
      </G>
    </Svg>
  );

  icons['cash'] = (
    <Svg
      viewBox="0 0 42.96 46.54"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
        <Path
        fill = {fillColor}
        fillRule="evenodd"
         d="M6.86,11.84c2.16-.47,3.8,2.78,1.73,3.2A2.44,2.44,0,0,1,6.24,14c-.57-.87-.41-1.91.62-2.13Zm17.3,19.51.44.25-.09.18c.11,0,0-.06.1,0l0,0,0,0,0,0,0,.05c-.06-.21-.1-.12,0-.31s-.15-2.45-.22-2.76c-.37-1.81-1.83-.9-3.46-4-.15-.29-.29-.78-.43-1-.25,0,.06,0-.41.29-.28.16-.16.07-.28.25l-.24.26,0,0-.06,0,0,0-.19.19,0,0,0,0-.51.52,0,0-.15.12a.68.68,0,0,1-.08.08c-.18.12.18.1-.25.07.11-.29,0,0,.12-.21a.64.64,0,0,1,.14-.18l.14-.13.16-.17c.19-.2.13-.1.35-.23a.75.75,0,0,0,.33-.37,1.85,1.85,0,0,1-.92-.12c-.27.18.06,0-.22.15,0,0-.35-.1.11-.08l-.21,0c-.35-.06-1.07,0-1.56,0a8.22,8.22,0,0,1-3.45-1.26,8.33,8.33,0,0,1-3-3.22c-1.21-2.36-.78-5.19,2-6.15A8.43,8.43,0,0,1,15,13.53c.18,0,.19,0,.32,0,.39-.09-.17,0,.2-.08s.33.06.47-.32l-.1-.09c-.19-.15-.21-.11-.33-.22l0,0-.13-.16c-.17-.22-.09-.19-.06-.26.2-.05.22.1.23.12a.05.05,0,0,1,0,0h.08c.21,0,.06.05.22.06-.06-.11-4.43-3.1-5.1-3.58-1-.76-.31,0-2.45.33a8.33,8.33,0,0,1-1.62,0l-.79,1.16c-.27.38-.51.76-.79,1.15-.56.79-1.08,1.56-1.61,2.34.06.2.23.45.34.69a5,5,0,0,1,.29,2.84l8.68,6c1.38.91,3,2.12,4.35,3l4.35,3a5.38,5.38,0,0,1,2.54-.7,8.43,8.43,0,0,1,.21,2C24.29,31.29,24.21,31.12,24.16,31.35Z"/>
        <Path
        fill = {fillColor}
        fillRule="evenodd"
         d="M23,30.78s-.12-.34-.13-.4,0-.25.12-.34c.24.12.08.06.16.26.28-.26,0-.18,0-.63a.47.47,0,0,1,.25-.24,4.26,4.26,0,0,1,.46-.06c.11,0,.07,0,.17.29s.09.2,0,.45c-.37,0-.14,0-.27-.26-.32.39.16.25-.06.69-.12.24-.53.26-.76.24Zm5.6-8.32c.25-.33,0-.21,0-.58s.19-.3.43-.34.34-.1.44.21.18.36-.06.52l-.2-.22a.07.07,0,0,0,0,0c-.12.45.07.17,0,.62s-.74.39-.8.25l0-.08a.69.69,0,0,1-.06-.6c.33,0,.15,0,.27.26ZM2.54,16c.16-.26.14-.05,0-.36-.15-.52.23-.58.75-.59.14.22.27.61,0,.75-.23-.15-.07-.07-.16-.27-.29.43.48.88-.81.95a1,1,0,0,1-.11-.74c.37,0,.14,0,.27.26ZM8,8.11c.27-.36-.14-.35.08-.71a.79.79,0,0,1,.75-.2c.07.14,0,.08.07.21.11.32.15.36,0,.51-.3,0-.08,0-.21-.26-.16.26-.14.06-.05.36.14.5-.21.6-.75.59-.11-.21-.27-.6,0-.75.24.15.05.08.16.26Zm16.2,23.24c.05-.23.13-.05.07-.64a8.43,8.43,0,0,0-.21-2,5.38,5.38,0,0,0-2.54.7l-4.35-3c-1.35-.88-3-2.09-4.35-3l-8.68-6a5,5,0,0,0-.29-2.84c-.1-.24-.28-.49-.34-.69.53-.78,1-1.55,1.61-2.34.28-.39.52-.77.79-1.15l.79-1.16a8.33,8.33,0,0,0,1.62,0C10.42,9,9.69,8.22,10.73,9c.66.48,5,3.47,5.1,3.58a10,10,0,0,1,1.32.87l8.32,5.75c.21.14.43.32.62.43.47.37,1,.69,1.48,1,0,.62-.25,2.56.59,3.19.48.36.44.47.67.66L29.93,23c.94-1.37.2-1.38-1.81-2.8l-1.6-1.1-.65-.43L11.69,8.78l-.13-.08c-.11-.05,0,0-.15-.05l-.64-.47a33.64,33.64,0,0,0-2.89-2,8.88,8.88,0,0,1-.82,1.25l-6,8.75c3.76,2.56,7.65,5.35,11.41,7.88,1,.64,1.88,1.31,2.84,2l7.88,5.43C23.61,31.7,23.87,31.48,24.16,31.35Z"/>
        <Path
        fill = {fillColor}
        fillRule="evenodd"
         d="M11.59,7.56A3.45,3.45,0,0,0,11,7.08C10.79,7,8.55,5.44,8.37,5.25c-.4,0-.6-.2-1,.08A27.91,27.91,0,0,0,5.75,7.6l-1,1.56c-.36.51-.68,1-1,1.51s-.72,1-1,1.55A42.88,42.88,0,0,0,0,16a1,1,0,0,0,.28.9,6.6,6.6,0,0,1,1.06.7l1,.69c.63.42,5.85,4,6,4.17a4.27,4.27,0,0,1,.93.58L21,31.22l.89.62.45.31.23.15.12.09c.06.06.05,0,.08.09l.3.2c.41.16.73.41,1.22.07.22-.15.21-.21.15-.52l-.15-.67c-.74.53-1.11.29-1.74-.15-2.34-1.61-5-3.43-7.29-5-1-.69-1.95-1.32-2.91-2s-1.94-1.32-2.91-2c-2.61-1.86-5.39-3.7-8-5.55-.86-.61-1-.29.14-1.85l4-5.79L6,8.48c.31-.43.58-.86.88-1.28l.44-.64c.59-.84.34-.91,1.69.07L12.46,9c2.94,2.06,6.18,4.21,9.08,6.29l4.58,3.14.69.52a2.28,2.28,0,0,1,.45.3,30.56,30.56,0,0,1,3.17,2.29c.48.79-.17,1.45-.62,2.08-.22.3-.4.59-.65.93s-.22.24-.13.55a5.41,5.41,0,0,0,.19.62c.11-.11.16-.25.27-.31.12-.27,1.12-1.7,1.37-2,.51-.71,1.28-1.52.47-2.19s-3.13-2.09-3.93-2.73L26.68,18c0-.08-.1-.11-.2-.18l-.26-.17-.48-.34c-.92-.63-6.68-4.53-6.87-4.79Z"/>
        <Path
        fill = {fillColor}
        fillRule="evenodd"
         d="M15,19.06c-.22-.4-1-1.33,0-2.28s1.61-.36,1.87-.44.23-.27.6-.19a.54.54,0,0,1,.4.43c.05.38-.18.3,0,.57a1.73,1.73,0,0,1,.4,1.2c0,.45-.28.92-.8.72s-.12-.75-.37-1.08a6.12,6.12,0,0,0-.6.85c.07.19.27.33.39.64a1.52,1.52,0,0,1-.82,1.95c-1,.46-1.1-.12-1.57.21a.53.53,0,0,1-.72-.08c-.21-.26-.09-.45,0-.74A1.61,1.61,0,0,1,13.39,19a.55.55,0,0,1,.82-.1c.32.29,0,.61.19,1a5.43,5.43,0,0,0,.62-.86ZM13.39,14.5c-3.13.39-3.39,3.46-1.75,5.7a7.39,7.39,0,0,0,6.44,3,3.56,3.56,0,0,0,1.74-.57c.21-.19.11-.72.13-1a1.88,1.88,0,0,1,.26-1,3.35,3.35,0,0,1,.22-.38c.1-.14.21-.21.29-.31s.08-.21,0-.45a6,6,0,0,0-1-2C18.72,16.17,16.21,14.15,13.39,14.5Z"/>
        <Path
        fill = {fillColor}
        fillRule="evenodd"
         d="M13.39,14.5c2.82-.35,5.33,1.67,6.34,3a6,6,0,0,1,1,2c.06.24.1.28,0,.45s-.19.18-.29.31a3.35,3.35,0,0,0-.22.38,1.88,1.88,0,0,0-.26,1c0,.33.08.86-.13,1a3.56,3.56,0,0,1-1.74.57,7.39,7.39,0,0,1-6.44-3C10,18,10.26,14.89,13.39,14.5Zm1.59-1,1.25.34a8.64,8.64,0,0,1,1.12.45,9.05,9.05,0,0,1,1.86,1.23,7.2,7.2,0,0,1,2.46,3.78c-.18.1-.47.23-.63.3-.1-.22-.18-.57-.28-.82a7.89,7.89,0,0,0-3.91-3.92c-2.41-1.08-5.45-.92-6.3,1.39-.58,1.57.25,3.41,1.24,4.59.09.1.18.18.26.28l1.17,1.05a8.49,8.49,0,0,0,5.17,1.43A3.4,3.4,0,0,0,20,23l.07.16s0,.13,0,.18,0,.25.07.38c-.64.54-1.56.54-1.85.72l.21,0c-.46,0-.11.07-.11.08.28-.13-.05,0,.22-.15a1.85,1.85,0,0,0,.92.12.75.75,0,0,1-.33.37c-.23.14-.17,0-.35.23l-.16.17-.14.13a.64.64,0,0,0-.14.18c-.13.2,0-.08-.12.21.43,0,.07,0,.25-.07a.68.68,0,0,0,.08-.08l.15-.12,0,0,.51-.52,0,0,0,0,.19-.19,0,0,.06,0,0,0,.24-.26c.12-.18,0-.09.28-.25.46-.26.15-.3.41-.29-.22-1.15-.67-3,.54-3.8,1-.66,1.78-.07,2.54.52a3.15,3.15,0,0,1,.61.53c.05-.27-.08-.14,0-.3s.07,0,.09,0c-.3-.08-.22-.28-.39-.34H24c-.26-.05.05,0-.15,0l.16-.24c.1,0,.09,0,.09,0l.24-.08a.49.49,0,0,0-.07.17c0,.2,0,.06,0,.15s.07.28.27.27h.12c.07,0,.08.05.21-.05l0-.09v0c-.11-.29-.3-.37-.4-.73.51.16,0-.11.49-.12.12,0,0-.07.13,0l0,0,.21.32-.38.38c.15.09,0,0,.11.32,0-.18-.07-.09.19-.11,0,0,0,0,0,0L25,20.47c.21-.13.13-.15.18-.2l.3-.23c-.28-.22.17.19-.06-.09l0-.06,0,0-.06,0c-.12-.12,0,0-.11-.16l-.07-.11-.21,0a1,1,0,0,0,0-.11.45.45,0,0,0,0,0v0c0-.13-.16-.14-.22-.29l.33.16.06,0h.06l.13.2s0,0,0,.06,0,0,0,.06l0,.13c.23,0,.23-.1.32.11,0,0,0,.13,0-.16l-.07,0h-.2c.08-.22,0-.09.16-.27v.1l0,0,.06.05c.1.07.21,0,.27.25.05-.09-.07,0,.11-.08l.17-.07c-.19-.12-.41-.29-.62-.43l-8.32-5.75a10,10,0,0,0-1.32-.87c-.16,0,0,0-.22-.06h-.08a.05.05,0,0,0,0,0s0-.17-.23-.12c0,.06-.11,0,.06.26l.13.16,0,0c.12.12.15.07.33.22l.1.09c-.14.38-.12.26-.47.32s.2,0-.2.08C15.17,13.54,15.16,13.51,15,13.53Z"/>
        <Path
        fill = {fillColor}
        fillRule="evenodd"
         d="M18.3,24.43c.29-.18,1.21-.18,1.85-.72,0-.14,0-.25-.07-.38s0-.13,0-.18L20,23a3.4,3.4,0,0,1-1.59.64,8.49,8.49,0,0,1-5.17-1.43L12,21.15c-.08-.1-.18-.18-.26-.28-1-1.18-1.82-3-1.24-4.59.85-2.31,3.9-2.47,6.3-1.39a7.89,7.89,0,0,1,3.91,3.92c.1.25.18.6.28.82.16-.08.46-.2.63-.3a7.2,7.2,0,0,0-2.46-3.78,9.05,9.05,0,0,0-1.86-1.23,8.64,8.64,0,0,0-1.12-.45L15,13.53a8.43,8.43,0,0,0-2.73.24c-2.74,1-3.17,3.78-2,6.15a8.33,8.33,0,0,0,3,3.22,8.22,8.22,0,0,0,3.45,1.26C17.23,24.46,17.95,24.38,18.3,24.43Z"/>
        <Path
        fill = {fillColor}
        fillRule="evenodd"
         d="M8.79,5c.05.25.4.38.57.48L11,3.72c.19-.22.3-.49.64-.5L14.59,6c.61.49,2.67,2.53,3.46,3.25a6.26,6.26,0,0,1,.51.46l3,2.81a4.41,4.41,0,0,1,.48.44l2,1.87c.7.63,3.19,3,3.53,3.22l.15.12c.77.47,1.66,1.17,2.47,1.7a6.67,6.67,0,0,0,.85.57c-.12-.18-1.9-1.8-2.32-2.23-.2-.2-.42-.34-.61-.53L24,13.8c-.45-.4-2.15-2-2.33-2.24-.18-.06-1.82-1.66-2-1.84L18.13,8.3c-.76-.64-1.38-1.34-2-1.9-.2-.16-.33-.34-.52-.51L14.06,4.47a2.78,2.78,0,0,0-.26-.22L13.55,4c-.21-.09-.22-.12-.37-.31-.29-.34-.71-.53-1-1-.39-.1-.6-.4-1.16,0C10.8,2.82,9,4.92,8.79,5Z"/>
        <Path
        fill = {fillColor}
        fillRule="evenodd"
         d="M15.35,20.54l.42-.64c.06-.06,0,0,.11-.08.09.46-.08.65-.53.72Zm.35-2.46c-.28-.34.1-.67.49-.7l-.49.7Zm-.67,1a5.43,5.43,0,0,1-.62.86c-.15-.38.13-.7-.19-1a.55.55,0,0,0-.82.1,1.61,1.61,0,0,0,.36,1.81c-.06.28-.18.48,0,.74a.53.53,0,0,0,.72.08c.47-.33.61.25,1.57-.21a1.52,1.52,0,0,0,.82-1.95c-.12-.31-.32-.46-.39-.64a6.12,6.12,0,0,1,.6-.85c.25.33-.18.87.37,1.08s.77-.27.8-.72a1.73,1.73,0,0,0-.4-1.2c-.19-.28,0-.19,0-.57a.54.54,0,0,0-.4-.43c-.37-.08-.45.14-.6.19s-1-.37-1.87.44S14.8,18.66,15,19.06Z"/>
        <Path
        fill = {fillColor}
        fillRule="evenodd"
        d="M15.21,2.87c.38-.21-.07-.4.3-.66.21-.16.59,0,.77,0,0,.46,0,.63-.2.71-.28-.17,0-.09-.13-.22s.1-.09-.06,0,0,.3-.13.51-.6.16-.83.07a1.17,1.17,0,0,1,0-.45c0-.23.06-.25.29-.27l0,.3Zm-1.34.81c1.72.69,1.61.54,3.29.39l2.63,3.59c.33.44,2.59,3.41,2.63,3.63.24.13,1.13,1.52,1.4,1.8.1.1.17.16.28.26s.15.16.26.28.39.32.58.5.15.18.26.28l1.42,1.28c-.62-1-2.59-3.44-3.37-4.57L16.47,2a5.81,5.81,0,0,0-.72-.88l-2.63,2A2.27,2.27,0,0,0,13.87,3.68Z"/>
        <Path
        fill = {fillColor}
        fillRule="evenodd"
        d="M8.07,14.43c0-.34,0-.38.32-.78s.94-.05.6.44-.43.78-.93.33Zm.1-1c.24-.4-.33-1.14-.92,0-.22.42.28,1.1.92,0ZM6.81,12.3c.05,0,.1-.15.45.05a2.55,2.55,0,0,1-.48.83c-.12.17-.09.18-.3.22,0-.21.36-.7.5-.88,0,0,0,0,0,0l-.14-.19Zm.05-.47c-1,.22-1.2,1.26-.62,2.13A2.44,2.44,0,0,0,8.59,15C10.66,14.62,9,11.37,6.86,11.84Z"/>
        <Path
        fill = {fillColor}
        fillRule="evenodd"
        d="M21.64,22.25a3.4,3.4,0,0,1,.65.48c.47.16.8.49,1.47.38a1.2,1.2,0,0,0,1-.79c-.13-.28-.84-.78-.91-.95a.87.87,0,0,1-.51-.4c-.36-.08-.81-.76-1.52-.61a1.54,1.54,0,0,0-.94,1.2A7,7,0,0,1,21.64,22.25Z"/>
        <Path
        fill = {fillColor}
        fillRule="evenodd"
        d="M29.52,25.93c0,.15,0,0-.07.18s0,0-.09.21c.23-.1.25-.2.48-.47a1.64,1.64,0,0,1,.47-.43,6.42,6.42,0,0,1,.88-1L32.49,23c.63-.65-.05-1.47-.51-1.71a1.36,1.36,0,0,1-.2,1.43l-2.22,3.15S29.53,25.93,29.52,25.93Z"/>
        <Path
        fill = {fillColor}
        fillRule="evenodd"
        d="M30.72,25.57a21.69,21.69,0,0,0,2.36-1.78.84.84,0,0,0,0-1,2.19,2.19,0,0,1-.54.74l-1.25,1.34-.3.34C30.85,25.41,30.8,25.35,30.72,25.57Z"/>
        <Path
        fill = {fillColor}
        fillRule="evenodd"
        d="M15.21,2.87l0-.3c-.23,0-.27,0-.29.27a1.17,1.17,0,0,0,0,.45c.23.09.69.22.83-.07s0-.46.13-.51,0,0,.06,0-.15.05.13.22c.22-.08.25-.25.2-.71-.18-.07-.55-.2-.77,0C15.14,2.48,15.59,2.67,15.21,2.87Z"/>
        <Path
        fill = {fillColor}
        fillRule="evenodd"
        d="M23,30.78c.23,0,.65,0,.76-.24.22-.44-.26-.31.06-.69.13.28-.1.25.27.26.08-.25.05-.21,0-.45s-.05-.26-.17-.29a4.26,4.26,0,0,0-.46.06.47.47,0,0,0-.25.24c-.06.45.23.37,0,.63-.08-.2.07-.13-.16-.26-.16.09-.17.15-.12.34S22.94,30.75,23,30.78Z"/>
        <Path
        fill = {fillColor}
        fillRule="evenodd"
        d="M2.54,16c-.13-.22.1-.26-.27-.26a1,1,0,0,0,.11.74c1.29-.07.52-.51.81-.95.09.2-.07.13.16.27.26-.14.12-.53,0-.75-.52,0-.9.07-.75.59C2.68,15.92,2.71,15.71,2.54,16Z"/>
        <Path
        fill = {fillColor}
        fillRule="evenodd"
        d="M8,8.11C7.85,7.93,8,8,7.8,7.85c-.26.15-.09.54,0,.75.54,0,.9-.09.75-.59-.09-.3-.1-.1.05-.36.13.24-.09.22.21.26.18-.15.14-.19,0-.51,0-.13,0-.07-.07-.21A.79.79,0,0,0,8,7.4C7.82,7.77,8.23,7.75,8,8.11Z"/>
        <Path
        fill = {fillColor}
        fillRule="evenodd"
        d="M28.55,22.46c-.13-.22.06-.24-.27-.26a.69.69,0,0,0,.06.6l0,.08c.06.14.69.06.8-.25s-.14-.18,0-.62a.07.07,0,0,1,0,0l.2.22c.23-.16.13-.28.06-.52s0-.26-.44-.21-.41.1-.43.34S28.81,22.13,28.55,22.46Z"/>
        <Path
        fill = {fillColor}
        fillRule="evenodd"
        d="M11.31,5.42c-.07-.14,0-.18-.16-.28-.22.15-.16.52-.06.72a1,1,0,0,0,.65,0c.24-.13.17-.38.13-.64L12,5.07c.05.2-.1.26.2.29a1,1,0,0,0,0-.71l-.19,0h-.22a.48.48,0,0,0-.38.14C11.19,5.1,11.67,5.14,11.31,5.42Z"/>
        <Path
        fill = {fillColor}
        fillRule="evenodd"
        d="M8.31,14.38c-.08-.23.07-.36.16-.49.28-.43.53-.2.36.09s-.28.48-.52.4Zm-.24,0c.5.44.61.12.93-.33s-.23-.92-.6-.44S8,14.09,8.07,14.43Z"/>
        <Path
        fill = {fillColor}
        fillRule="evenodd"
        d="M7.74,13.12c.23-.21.34,0,.21.25-.46.79-.61.34-.52.14a1.78,1.78,0,0,1,.31-.4Zm.43.32c.24-.4-.33-1.14-.92,0C7,13.85,7.52,14.53,8.17,13.44Z"/>
        <Path
        fill = {fillColor}
        fillRule="evenodd"
        d="M31.23,38.2a1.78,1.78,0,0,0,.48-.55.44.44,0,0,0-.44-.23c-.17,0-.3.07-.51.09l0,.59.36.09C31.33,38.21,31.13,38.14,31.23,38.2Z"/>
        <Path
        fill = {fillColor}
        fillRule="evenodd"
         d="M11.31,5.42c.36-.28-.13-.32.16-.69a.48.48,0,0,1,.38-.14h.22l.19,0a1,1,0,0,1,0,.71c-.3,0-.15-.1-.2-.29l-.16.16c0,.26.11.5-.13.64a1,1,0,0,1-.65,0c-.11-.2-.16-.57.06-.72.18.09.09.14.16.28ZM14.19,6c0-.12.05,0-.07-.13L14,5.77a1.34,1.34,0,0,0-.25-.18c-.21-.18-.34-.37-.55-.54a4.51,4.51,0,0,1-.54-.49l-1.07-1a10.29,10.29,0,0,0-1,1l-.51.51c-.17.17-.29.36-.46.53a13.83,13.83,0,0,0,1.47,1,6.78,6.78,0,0,0,2.41-.37,4.79,4.79,0,0,0,.76.75L17.34,10c.29.27.48.39.79.73l1.18,1.09.21.18.12.17A16.1,16.1,0,0,1,21,13.35l.67.63c.41.29,3.5,2.46,3.75,2.56-.1-.2-.17-.22-.36-.38-.54-.45-1-1-1.41-1.35l-3.49-3.27-.35-.3-2.08-2c-.22-.24-.48-.39-.71-.64-.48-.52-2-1.85-2.63-2.46Z"/>
        <Path
        fill = {fillColor}
        fillRule="evenodd"
        d="M7.26,12.35c-.36-.21-.4-.09-.45-.05l.14.19s0,0,0,0c-.13.18-.52.67-.5.88.21,0,.19,0,.3-.22A2.55,2.55,0,0,0,7.26,12.35Z"/>
        <Path
        fill = {fillColor}
        fillRule="evenodd"
        d="M7.74,13.12a1.78,1.78,0,0,0-.31.4c-.1.2.06.65.52-.14C8.09,13.14,8,12.9,7.74,13.12Z"/>
        <Path
        fill = {fillColor}
        fillRule="evenodd"
        d="M8.31,14.38c.24.07.42-.23.52-.4s-.08-.51-.36-.09C8.38,14,8.23,14.16,8.31,14.38Z"/>
        <Path
        fill = {fillColor}
        fillRule="evenodd"
        d="M15.7,18.08l.49-.7C15.8,17.41,15.41,17.74,15.7,18.08Z"/>
        <Path
        fill = {fillColor}
        fillRule="evenodd"
        d="M15.35,20.54c.44-.07.62-.26.53-.72-.07.05,0,0-.11.08Z"/>
        <Path
        fill = {fillColor}
        fillRule="evenodd"
         d="M23.34,21a.87.87,0,0,0,.51.4c.06.17.78.67.91.95a1.2,1.2,0,0,1-1,.79c-.67.11-1-.23-1.47-.38a3.4,3.4,0,0,0-.65-.48,7,7,0,0,0-.76-.68,1.54,1.54,0,0,1,.94-1.2c.71-.15,1.16.53,1.52.61ZM36,34.06a4.14,4.14,0,0,0,.65-.37,2.84,2.84,0,0,1,.88-.36c0-.09,0-.05,0-.19a1.18,1.18,0,0,0-.05-.23c0-.15-.07-.24-.1-.38-.06-.3-.15-.57-.19-.88-.22-.76-.38-1.8-.54-2.61-.36-1.87-.67-3.42-1.12-5.26a7.33,7.33,0,0,1-.2-1.41c-.1-1.12-.25-3.18-1-3.87A28.86,28.86,0,0,0,28,15.21c.16.39,2.22,3.44,2.37,3.86l-1.76-2.36c-.88-1.18-2.25-2.95-3.07-4.13q-.2-.29-.44-.59a26.15,26.15,0,0,1-1.74-2.42c-.22-.12-4.23-5.66-4.85-6.47a9.33,9.33,0,0,1-.67-.94l-.53-.67c-.48-.65-1.12-2-2.1-1.31-.39.27-2.58,2-2.88,2.11a.84.84,0,0,0,0,.17,1.81,1.81,0,0,1,.46.36l1.47-1.06a7.87,7.87,0,0,1,1.52-1c.34.4.6.79.92,1.22C18.87,4.69,27.63,16.7,28.06,17.08a5.62,5.62,0,0,1,.56.52l2.86,2.7c-.07.11-.13.15-.21.27.15.24.45.22.6.61l.37-.21c.19.2.41.33.59.55s.27.48.42.71c.63,1,.64,1.54-.36,2.27l-2,1.48-.07.53c.09.5-.2,1.77-.55,2-.55.06-.73-.31-.87-.77s-.25-.88-.37-1.32-.22-.88-.34-1.27a1.62,1.62,0,0,0-.72-1L26.07,22.7l-.45-.36a2.69,2.69,0,0,1-.43-.38,3.12,3.12,0,0,0-.89-.84,3.15,3.15,0,0,0-.61-.53c-.76-.59-1.58-1.17-2.54-.52-1.2.82-.76,2.65-.54,3.8.13.21.28.71.43,1,1.63,3.1,3.09,2.19,3.46,4,.06.31.24,2.52.22,2.76l.36,1.56A15.2,15.2,0,0,0,27.37,38l2,2.27c.24.07.2-.06.48-.43l1.35-1.65c-.1-.05.1,0-.08,0l-.36-.09,0-.59c.2,0,.33-.09.51-.09a.44.44,0,0,1,.44.23c.14-.06.25-.23.35-.33l2.69-2.37A8.92,8.92,0,0,1,36,34.06Zm-6.53,7.34A8.18,8.18,0,0,1,31,39.09c.08-.09.1-.14.2-.24l3-2.95c.29-.25.63-.51,1-.77s.63-.48,1-.7c.5-.32,1.68-1.07,2.46-.83.3.1.26.15.49.38a21.45,21.45,0,0,1,3.37,4.31A2.19,2.19,0,0,1,43,39.56c-.35,1-1.78,1.45-2.75,2.06-.31.2-.59.41-.92.64-.64.45-1.24.9-1.84,1.36a13.24,13.24,0,0,0-1.73,1.46c-2.37,2.29-2.06,1.55-3.49,0L30.69,43.4C29.72,42.45,29.68,42.44,29.47,41.39Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['search'] = (
    <Svg
      viewBox="0 0 20.08 20"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M8.44,16.82a8.41,8.41,0,1,1,8.44-8.41,8.43,8.43,0,0,1-8.44,8.41ZM8.44,1h0a7.41,7.41,0,1,0,7.44,7.41A7.43,7.43,0,0,0,8.44,1Z"/>
          <Rect
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            x="16.37" y="12.78" width="1" height="8.05" transform="translate(-6.94 16.9) rotate(-45.12)"/>
        </G>
      </G>
    </Svg>
  );

  icons['twitter'] = (
    <Svg
      viewBox="0 0 22.33 22.33"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Circle
            fill="#ffaa54"
            cx="11.16" cy="11.16" r="11.16"/>
          <Circle
            fill="#ffaa54"
            cx="11.16" cy="11.16" r="11.16"/>
          <Path
            fill={fillColor}
            fillRule="evenodd"
            d="M19.48,8a5.35,5.35,0,0,1-1.53.42A2.68,2.68,0,0,0,19.12,7a5.35,5.35,0,0,1-1.69.65,2.67,2.67,0,0,0-4.62,1.82,2.77,2.77,0,0,0,.07.61,7.57,7.57,0,0,1-5.5-2.79,2.67,2.67,0,0,0,.83,3.56A2.67,2.67,0,0,1,7,10.49v0a2.67,2.67,0,0,0,2.14,2.62,2.62,2.62,0,0,1-.7.09,2.76,2.76,0,0,1-.5,0A2.67,2.67,0,0,0,10.42,15a5.36,5.36,0,0,1-3.31,1.14,5.17,5.17,0,0,1-.64,0A7.59,7.59,0,0,0,18.15,9.75c0-.12,0-.23,0-.35A5.42,5.42,0,0,0,19.48,8Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['facebook'] = (
    <Svg
      viewBox="0 0 22.39 22.38"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Circle
            fill="#ffaa54"
            cx="11.19" cy="11.19" r="11.19"/>
          <Circle
            fill="#ffaa54"
            cx="11.19" cy="11.19" r="11.19"/>
          <Path
            fill="#fff"
            fillRule="evenodd"
            d="M14,11.63H12v7.32H9V11.63H7.54V9.06H9V7.39A2.84,2.84,0,0,1,12,4.34h2.24v2.5H12.65a.62.62,0,0,0-.64.7V9.06h2.26Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['googlePlus'] = (
    <Svg
      viewBox="0 0 22.39 22.38"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Circle
            fill="#ffaa54"
            cx="11.19" cy="11.19" r="11.19"/>
          <Circle
            fill="#ffaa54"
            cx="11.19" cy="11.19" r="11.19"/>
          <Path
            fill = {fillColor}
            d="M3.93,12.09a4.64,4.64,0,0,1,7.69-3.47c-.38.41-.76.83-1.17,1.21a3.25,3.25,0,0,0-2.73-.53,2.91,2.91,0,1,0,2,5.48A2.55,2.55,0,0,0,11.19,13c-.88,0-1.76,0-2.64,0,0-.52,0-1,0-1.57,1.47,0,2.94,0,4.41,0A5.21,5.21,0,0,1,12,15.13a4.55,4.55,0,0,1-5,1.33A4.61,4.61,0,0,1,3.93,12.09Z"/>
          <Path
            fill = {fillColor}
            d="M15.82,10.11h1.31c0,.44,0,.88,0,1.32h1.32v1.31H17.14c0,.44,0,.88,0,1.32H15.82c0-.44,0-.88,0-1.32H14.49V11.43h1.32C15.81,11,15.81,10.55,15.82,10.11Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['ptichka'] = (
    <Svg
      viewBox="0 0 173.79 128.76"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            fill = {fillColor}
            d="M54.22,108.45l-44-45.07L0,74l54,54.75c3.59-1.64.1.22,2-1.25L173.79,9.73,164.09,0Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['doublePtichka'] = (
    <Svg
      viewBox="0 0 218.36 128.76"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            fill = {fillColor}
            d="M54.22,108.45l-44-45.07L0,74l54,54.75c3.59-1.64.1.22,2-1.25L173.79,9.73,164.09,0Z"/>
          <Path
            fill = {fillColor}
            d="M98.79,108.45l-44-45.07L44.57,74l54,54.75c3.59-1.64.1.22,2-1.25L218.36,9.73,208.66,0Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['starFull'] = (
    <Svg
      viewBox="0 0 13.09 12.45"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Polygon
            fillRule="evenodd"
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            points="8.26 4.56 12.93 4.73 9.21 7.74 10.5 12.24 6.48 9.63 2.6 12.25 3.84 7.62 0.15 4.74 4.94 4.49 6.54 0.09 8.26 4.56"/>
        </G>
      </G>
    </Svg>
  );

  icons['starEmpty'] = (
    <Svg
      viewBox="0 0 13.09 12.45"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Polygon
            fillRule="evenodd"
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            points="8.26 4.56 12.93 4.73 9.21 7.74 10.5 12.24 6.48 9.63 2.6 12.25 3.84 7.62 0.15 4.74 4.94 4.49 6.54 0.09 8.26 4.56"/>
        </G>
      </G>
    </Svg>
  );

  icons['starHalf'] = (
    <Svg
      viewBox="0 0 13 12.44"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Polygon
            fillRule="evenodd"
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            points="4.75 4.55 0.07 4.71 3.79 7.73 2.5 12.23 6.46 9.66 6.46 0.09 4.75 4.55"/>
          <Polygon
            fillRule="evenodd"
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            points="8.17 4.55 12.85 4.71 9.12 7.73 10.41 12.23 6.46 9.66 6.46 0.09 8.17 4.55"/>
        </G>
      </G>
    </Svg>
  );

  icons['plus'] = (
    <Svg
      viewBox="0 0 16.06 16.05"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M15,9.07H9.08V15A1,1,0,0,1,7,15V9.07H1A1,1,0,1,1,1,7H7V1A1,1,0,1,1,9.08,1V7H15a1,1,0,1,1,0,2.09Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['trash'] = (
    <Svg
      viewBox="0 0 13.69 16.36"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M6.18,14V6.28C6.18,5,7.51,5,7.51,6.28V14c0,1.31-1.32,1.31-1.32,0Zm3.31,1c-.93,0-.64-.87-.59-1.55l.34-4.59c0-.32.1-1,.11-1.29,0-.49,0-.81.08-1.32.05-.79.28-.89.73-.89.91,0,.46,1.4.44,2.13,0,1.68-.4,4.77-.51,6.62,0,.5-.08.88-.59.88Zm-6-9.63c.45,0,.68.09.73.89l.52,7.13c0,.32.06.31.08.66,0,.88-.22,1-.67,1-.78,0-.54-1-.7-2.16-.13-.87-.09-1.78-.19-2.68S3.12,8.31,3.1,7.46s-.47-2.13.44-2.13Zm.44,11H9.71A1.4,1.4,0,0,0,11,15.77c.4-.57.55-3.88.7-5l.69-6.88h-11l1,10.22C2.45,15.21,2.51,16.36,4,16.36Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M3.9.62v.74H.67c-.78,0-.66.86-.66,1.32H13.69c0-1.66,0-1.32-3.9-1.32C9.79.81,9.95,0,8.9,0,8,0,4.63-.1,4.2.18A.74.74,0,0,0,3.9.62Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['profileSettings'] = (
    <Svg
      viewBox="0 0 17.62 15.39"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            fill = {fillColor}
            d="M12.94,15.34c1.49,0,1.21-.82,1.2-2.11V6.7c0-1.31-.25-1.93.47-2.63s1.07-1,1.65-1.62c.34-.34,1.37-1.05,1.36-1.68A.71.71,0,0,0,16.8,0c-.66,0-2.19,1.76-2.56,2.22-.37-.65-.25-.93-1.3-.93h.15c-2.48,0-6.67-.29-8.94.18-.34.93-.28,1.42.79,1.47h7.56c0,1.46-.28,1.28-1.09,2.08s-4,4.12-4.58,4.48c-.66-.6-1.35-1.28-2-2-.32-.33-.52-.81-1.08-.8A.79.79,0,0,0,3,7.83s3.23,3.91,4.15,3.64c.53-.15,4.27-4.58,5.34-5.13v7.35l-10.78,0c0-1.67,0-3.35,0-5S2.25,4.76.29,5.33c-.39.84-.38,9,0,9.89C2.42,15.5,10.38,15.34,12.94,15.34Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['editTech'] = (
    <Svg
      viewBox="0 0 17.89 17.86"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M.08,14.28H6c1.66,0,1.09.14,3.55-2.33a25.13,25.13,0,0,0,2-2C10.15,8.74,6,8.73,4,9.4A7.6,7.6,0,0,0,.21,12.17,3.8,3.8,0,0,0,.08,14.28Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M6.54.07c-4.74,1-3.27,7.84,1.33,7a3.56,3.56,0,0,0-1.33-7Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M8.07,17.85H9.79c.77,0,.72-.17,1.13-.6l5.17-5.12-2.2-2.28a14.37,14.37,0,0,0-1.74,1.66L8.72,15C7.74,15.93,8.17,15.62,8.07,17.85Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M14.64,9.16l2.16,2.17C18,10,18.38,10.25,17,8.89c-.26-.26-.76-.95-1.26-.8A3.58,3.58,0,0,0,14.64,9.16Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['plus'] = (
    <Svg
      viewBox="0 0 16.06 16.05"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M15,9.07H9.08V15A1,1,0,0,1,7,15V9.07H1A1,1,0,1,1,1,7H7V1A1,1,0,1,1,9.08,1V7H15a1,1,0,1,1,0,2.09Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['editable'] = (
    <Svg
      viewBox="0 0 16.38 16.4"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M14.38,16.4H.41A.41.41,0,0,1,0,16V2a.41.41,0,0,1,.41-.41H7v.82H.82V15.58H14V9.4h.82V16A.41.41,0,0,1,14.38,16.4Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M9.07,10.81H6a.41.41,0,0,1-.41-.41V7.31A.41.41,0,0,1,5.7,7L12.6.12a.42.42,0,0,1,.58,0L16.26,3.2a.41.41,0,0,1,0,.58l-6.9,6.91a.41.41,0,0,1-.29.12ZM6.4,10H8.9l6.49-6.5L12.89,1,6.4,7.48Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['list'] = (
    <Svg
      viewBox="0 0 20.92 16.64"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M3,6.41c.7.48.28.43,1.89.43H17.4c1.09,0,4,.46,3.41-1.31-.38-1.09-3.15-.65-4.35-.65h-10C4.73,4.88,2.65,4.32,3,6.41Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M3,10.23c-.3,2,1.32,1.53,4.19,1.53H18.48c.94,0,1.93.18,2.28-.56.45-.94-.3-1.4-1.2-1.4H4.17C3.33,9.8,3.51,9.85,3,10.23Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M4.17,1.94H19.56c1.82,0,1.8-1.94,0-1.94H4.17C2.37,0,2.37,1.94,4.17,1.94Z"/>
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M4.17,16.63H19.56c1.8,0,1.85-1.94,0-1.94H4.17C2.37,14.7,2.37,16.63,4.17,16.63Z"/>
          <Polygon
            fillRule="evenodd"
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            points="0.01 1.92 1.9 1.94 1.9 1.77 1.9 0 0 0.01 0.01 1.92"/>
          <Polygon
            fillRule="evenodd"
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            points="0.01 16.62 1.9 16.64 1.9 16.48 1.9 14.7 1.74 14.7 0 14.7 0.01 16.62"/>
          <Polygon
            fillRule="evenodd"
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            points="0.01 11.73 1.9 11.76 1.87 9.79 0.06 9.8 0.01 11.73"/>
          <Polygon
            fillRule="evenodd"
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            points="0.03 6.83 1.83 6.84 1.91 4.88 0.02 4.89 0.03 6.83"/>
        </G>
      </G>
    </Svg>
  );

  icons['workingDots'] = (
    <Svg
      viewBox="0 0 25.5 25.5"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            fill="#f4a000"
            d="M12.75,25.5A12.75,12.75,0,1,0,0,12.75,12.77,12.77,0,0,0,12.75,25.5Z"/>
          <Path
            fillRule="evenodd"
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M9.79,18.87,3.87,13a.31.31,0,0,1,0-.43l5.92-5.9.43.43-5.7,5.69,5.7,5.69Z"/>
          <Path
            fillRule="evenodd"
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M15.71,18.87,21.63,13a.31.31,0,0,0,0-.43l-5.92-5.9-.43.43L21,12.75l-5.7,5.69Z"/>
          <Circle
            fillRule="evenodd"
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            cx="10.34" cy="12.69" r="0.71"/>
          <Circle
            fillRule="evenodd"
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            cx="12.75" cy="12.69" r="0.71"/>
          <Circle
            fillRule="evenodd"
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            cx="15.16" cy="12.69" r="0.71"/>
        </G>
      </G>
    </Svg>
  );

  return icons[icon];

}

export default DsproIcons;
