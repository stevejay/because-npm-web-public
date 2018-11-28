import * as React from "react";

interface IProps {
  className: string;
}

const TwitterImage = ({ className }: IProps) => (
  <svg className={className} viewBox="0 0 24 24" version="1.1">
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path
        fill="none"
        stroke="#AB9879"
        strokeWidth="2"
        d="M5,1 L19,1 L19,1 C21.209139,1 23,2.790861 23,5 L23,13 L23,13 C23,15.209139 21.209139,17 19,17 L7,17 L1,22 L1,5 L1,5 C1,2.790861 2.790861,1 5,1 Z M5,7 L18,7 M5,11 L14,11"
        transform="matrix(-1 0 0 1 24 0)"
      />
    </g>
  </svg>
);

// const TwitterImage = ({ className }: IProps) => (
//   <svg className={className} viewBox="0 0 311 253" version="1.1">
//     <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
//       <path
//         d="M97.80328,253 C215.16224,253 279.35264,155.655754 279.35264,71.2392621 C279.35264,68.4743667 279.35264,65.7219258 279.16604,62.9819393 C291.653702,53.9388738 302.433262,42.7419009 311,29.9152846 C299.354655,35.0814266 287.001116,38.4693809 274.35176,39.9660531 C287.671815,31.9825054 297.640977,19.4257694 302.40396,4.63268231 C289.878839,12.0736799 276.176038,17.3177239 261.88688,20.1385147 C242.10831,-0.917106967 210.680349,-6.07054441 185.225993,7.56795417 C159.771637,21.2064528 146.621261,50.2450591 153.14884,78.4005904 C101.844983,75.8256201 54.0452787,51.5652038 21.6456,11.6570112 C4.71006709,40.8458967 13.3604093,78.187114 41.40032,96.9328624 C31.2460605,96.6315579 21.3131954,93.8891507 12.44,88.9370837 C12.44,89.1986279 12.44,89.4726266 12.44,89.7466252 C12.4483116,120.155406 33.8585885,146.346465 63.6306,152.36777 C54.2367778,154.932647 44.3807025,155.30758 34.81956,153.463765 C43.1785922,179.486448 67.1333875,197.313311 94.43204,197.826636 C71.8377039,215.604565 43.9263803,225.255492 15.18924,225.226501 C10.1125204,225.216743 5.04073857,224.909005 0,224.304869 C29.1797112,243.052312 63.1319227,252.996474 97.80328,252.950182"
//         id="Shape"
//         fill="#AB9879"
//         fillRule="nonzero"
//       />
//     </g>
//   </svg>
// );

export default TwitterImage;