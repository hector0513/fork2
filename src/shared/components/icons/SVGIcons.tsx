import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

/**
 * @param {SvgIconProps} props - Icon props.
 * @returns {JSX.Element} - Icon.
 */
export const TicketIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props} xmlns="http://www.w3.org/2000/svg" width="48" height="48">
    <path d="M2.40002 7.20005C2.40002 5.87457 3.47454 4.80005 4.80002 4.80005H19.2C20.5255 4.80005 21.6 5.87457 21.6 7.20005V9.60005C20.2745 9.60005 19.2 10.6746 19.2 12C19.2 13.3255 20.2745 14.4 21.6 14.4V16.8C21.6 18.1255 20.5255 19.2 19.2 19.2H4.80002C3.47454 19.2 2.40002 18.1255 2.40002 16.8V14.4C3.72551 14.4 4.80002 13.3255 4.80002 12C4.80002 10.6746 3.72551 9.60005 2.40002 9.60005V7.20005Z" />
  </SvgIcon>
);

/**
 * @param {SvgIconProps} props - Icon props.
 * @returns {JSX.Element} - Icon.
 */
export const DashBoardIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props} xmlns="http://www.w3.org/2000/svg" width="48" height="48">
    <path d="M5.99998 3.59998C4.67449 3.59998 3.59998 4.67449 3.59998 5.99998V8.39998C3.59998 9.72546 4.67449 10.8 5.99998 10.8H8.39998C9.72546 10.8 10.8 9.72546 10.8 8.39998V5.99998C10.8 4.67449 9.72546 3.59998 8.39998 3.59998H5.99998Z" />
    <path d="M5.99998 13.2C4.67449 13.2 3.59998 14.2745 3.59998 15.6V18C3.59998 19.3255 4.67449 20.4 5.99998 20.4H8.39998C9.72546 20.4 10.8 19.3255 10.8 18V15.6C10.8 14.2745 9.72546 13.2 8.39998 13.2H5.99998Z" />
    <path d="M13.2 5.99998C13.2 4.67449 14.2745 3.59998 15.6 3.59998H18C19.3255 3.59998 20.4 4.67449 20.4 5.99998V8.39998C20.4 9.72546 19.3255 10.8 18 10.8H15.6C14.2745 10.8 13.2 9.72546 13.2 8.39998V5.99998Z" />
    <path d="M13.2 15.6C13.2 14.2745 14.2745 13.2 15.6 13.2H18C19.3255 13.2 20.4 14.2745 20.4 15.6V18C20.4 19.3255 19.3255 20.4 18 20.4H15.6C14.2745 20.4 13.2 19.3255 13.2 18V15.6Z" />
  </SvgIcon>
);

/**
 * @param {SvgIconProps} props - Icon props.
 * @returns {JSX.Element} - Icon.
 */
export const PdfIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon
    {...props}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.6 9.6C9.6 6.94903 11.749 4.8 14.4 4.8H25.4059C26.6789 4.8 27.8998 5.30571 28.8 6.20589L36.9941 14.4C37.8943 15.3002 38.4 16.5211 38.4 17.7941V38.4C38.4 41.051 36.251 43.2 33.6 43.2H14.4C11.749 43.2 9.6 41.051 9.6 38.4V9.6Z"
      fill="#3A526A"
    />
  </SvgIcon>
);

/**
 * @param {SvgIconProps} props - Icon props.
 * @returns {JSX.Element} - Icon.
 */
export const ImagenIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon
    {...props}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.6 7.2C6.94903 7.2 4.8 9.34903 4.8 12V36C4.8 38.651 6.94903 40.8 9.6 40.8H38.4C41.051 40.8 43.2 38.651 43.2 36V12C43.2 9.34903 41.051 7.2 38.4 7.2H9.6ZM38.4 36H9.6L19.2 16.8L26.4 31.2L31.2 21.6L38.4 36Z"
      fill="#3A526A"
    />
  </SvgIcon>
);
