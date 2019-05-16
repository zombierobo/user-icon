import * as React from "react";
import SvgWrapper from '../svg-wrapper';

import { getConfig } from "../config";

interface IconFileData {
  svg: JSX.Element;
  hyphenCaseName: string;
  isSolid: boolean;
  hasBadge: boolean;
  hasAlert: boolean;
}

interface ActualProps {
  size: number;
  dir: 'up' | 'down' | 'left' | 'right';
  solid: boolean;
  badged: boolean | { colorKey?: string; fill?: string };
  alerted: boolean | { colorKey?: string; fill?: string };
  colorKey: string;
  fill: string;
}

type Props = Partial<ActualProps>;

const colorKeyToFillColor = (colorKey: string): string =>
  getConfig().colorMap[colorKey];

const User = (props: Props) => {
  const allIcons: IconFileData[] = [
    {
      svg: (
        <svg
          version="1.1"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          preserveAspectRatio="xMidYMid meet"
        >
          <title>user-line</title>
          <path
            d="M18,17a7,7,0,1,0-7-7A7,7,0,0,0,18,17ZM18,5a5,5,0,1,1-5,5A5,5,0,0,1,18,5Z"
            className="clr-i-outline clr-i-outline-path-1"
          />
          <path
            d="M30.47,24.37a17.16,17.16,0,0,0-24.93,0A2,2,0,0,0,5,25.74V31a2,2,0,0,0,2,2H29a2,2,0,0,0,2-2V25.74A2,2,0,0,0,30.47,24.37ZM29,31H7V25.73a15.17,15.17,0,0,1,22,0h0Z"
            className="clr-i-outline clr-i-outline-path-2"
          />
          <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
        </svg>
      ),
      hyphenCaseName: "user",
      isSolid: false,
      hasBadge: false,
      hasAlert: false
    },
    {
      svg: (
        <svg
          version="1.1"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          preserveAspectRatio="xMidYMid meet"
        >
          <title>user-outline-alerted</title>
          <path
            d="M30.47,24.37a17.16,17.16,0,0,0-24.93,0A2,2,0,0,0,5,25.74V31a2,2,0,0,0,2,2H29a2,2,0,0,0,2-2V25.74A2,2,0,0,0,30.47,24.37ZM29,31H7V25.73a15.17,15.17,0,0,1,22,0h0Z"
            className="clr-i-outline--alerted clr-i-outline-path-1--alerted"
          />
          <path
            d="M18,17a7,7,0,0,0,4.45-1.6h-.22A3.68,3.68,0,0,1,20,14.6a5,5,0,1,1,1.24-8.42l1-1.76A7,7,0,1,0,18,17Z"
            className="clr-i-outline--alerted clr-i-outline-path-2--alerted"
          />
          <path
            d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"
            className="clr-i-outline--alerted clr-i-outline-path-3--alerted clr-i-alert"
          />
          <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
        </svg>
      ),
      hyphenCaseName: "user",
      isSolid: false,
      hasBadge: false,
      hasAlert: true
    },
    {
      svg: (
        <svg
          version="1.1"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          preserveAspectRatio="xMidYMid meet"
        >
          <title>user-outline-badged</title>
          <path
            d="M30.47,24.37a17.16,17.16,0,0,0-24.93,0A2,2,0,0,0,5,25.74V31a2,2,0,0,0,2,2H29a2,2,0,0,0,2-2V25.74A2,2,0,0,0,30.47,24.37ZM29,31H7V25.73a15.17,15.17,0,0,1,22,0h0Z"
            className="clr-i-outline--badged clr-i-outline-path-1--badged"
          />
          <path
            d="M18,17a7,7,0,0,0,6.85-5.56,7.4,7.4,0,0,1-2.24-6.69A7,7,0,1,0,18,17ZM18,5a5,5,0,1,1-5,5A5,5,0,0,1,18,5Z"
            className="clr-i-outline--badged clr-i-outline-path-2--badged"
          />
          <circle
            cx="30"
            cy="6"
            r="5"
            className="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge"
          />
          <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
        </svg>
      ),
      hyphenCaseName: "user",
      isSolid: false,
      hasBadge: true,
      hasAlert: false
    },
    {
      svg: (
        <svg
          version="1.1"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          preserveAspectRatio="xMidYMid meet"
        >
          <title>user-solid-alerted</title>
          <path
            d="M30.61,24.52a17.16,17.16,0,0,0-25.22,0,1.51,1.51,0,0,0-.39,1v6A1.5,1.5,0,0,0,6.5,33h23A1.5,1.5,0,0,0,31,31.5v-6A1.51,1.51,0,0,0,30.61,24.52Z"
            className="clr-i-solid--alerted clr-i-solid-path-1--alerted"
          />
          <path
            d="M18,17a7,7,0,0,0,4.45-1.6h-.22A3.68,3.68,0,0,1,19,9.89l3.16-5.47A7,7,0,1,0,18,17Z"
            className="clr-i-solid--alerted clr-i-solid-path-2--alerted"
          />
          <path
            d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"
            className="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert"
          />
          <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
        </svg>
      ),
      hyphenCaseName: "user",
      isSolid: true,
      hasBadge: false,
      hasAlert: true
    },
    {
      svg: (
        <svg
          version="1.1"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          preserveAspectRatio="xMidYMid meet"
        >
          <title>user-solid-badged</title>
          <path
            d="M30.61,24.52a17.16,17.16,0,0,0-25.22,0,1.51,1.51,0,0,0-.39,1v6A1.5,1.5,0,0,0,6.5,33h23A1.5,1.5,0,0,0,31,31.5v-6A1.51,1.51,0,0,0,30.61,24.52Z"
            className="clr-i-solid--badged clr-i-solid-path-1--badged"
          />
          <path
            d="M18,17a7,7,0,0,0,6.85-5.56,7.4,7.4,0,0,1-2.24-6.69A7,7,0,1,0,18,17Z"
            className="clr-i-solid--badged clr-i-solid-path-2--badged"
          />
          <circle
            cx="30"
            cy="6"
            r="5"
            className="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge"
          />
          <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
        </svg>
      ),
      hyphenCaseName: "user",
      isSolid: true,
      hasBadge: true,
      hasAlert: false
    },
    {
      svg: (
        <svg
          version="1.1"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          preserveAspectRatio="xMidYMid meet"
        >
          <title>user-solid</title>
          <path
            d="M30.61,24.52a17.16,17.16,0,0,0-25.22,0,1.51,1.51,0,0,0-.39,1v6A1.5,1.5,0,0,0,6.5,33h23A1.5,1.5,0,0,0,31,31.5v-6A1.51,1.51,0,0,0,30.61,24.52Z"
            className="clr-i-solid clr-i-solid-path-1"
          />
          <circle
            cx="18"
            cy="10"
            r="7"
            className="clr-i-solid clr-i-solid-path-2"
          />
          <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
        </svg>
      ),
      hyphenCaseName: "user",
      isSolid: true,
      hasBadge: false,
      hasAlert: false
    }
  ];

  const targetSvg = allIcons.find(
    i =>
      (props.solid ? i.isSolid : true) &&
      (props.alerted ? i.hasAlert : !i.hasAlert) &&
      (props.badged ? i.hasBadge : !i.hasBadge) &&
      true
  );

  const { iconSize, fillOpts } = getConfig();
  const { fill, alertColorKey, badgeColorKey } = fillOpts;

  return (
    <SvgWrapper
      height={props.size ? `${props.size}px` : `${iconSize}px`}
      width={props.size ? `${props.size}px` : `${iconSize}px`}
      transform={
        props.dir === 'down'
          ? 'rotate(180deg)'
          : props.dir === 'right'
          ? 'rotate(90deg)'
          : props.dir === 'left'
          ? 'rotate(270deg)'
          : undefined
      }
      fill={
        props.fill
          ? props.fill
          : props.colorKey
          ? colorKeyToFillColor(props.colorKey)
          : fill
      }
      alertFill={
        props.alerted
          ? props.alerted === true
            ? colorKeyToFillColor(alertColorKey)
            : props.alerted.colorKey
            ? colorKeyToFillColor(props.alerted.colorKey)
            : props.alerted.fill
          : undefined
      }
      badgeFill={
        props.badged
          ? props.badged === true
            ? colorKeyToFillColor(badgeColorKey)
            : props.badged.colorKey
            ? colorKeyToFillColor(props.badged.colorKey)
            : props.badged.fill
          : undefined
      }
    >
      {targetSvg ? targetSvg.svg : undefined}
    </SvgWrapper>
  );
};

export default User;
