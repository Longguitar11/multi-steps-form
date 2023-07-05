import { SVGProps } from "react";

type SortIconProps = { direction?: "up" | "down" };
const SortIcon = ({
  direction,
  ...others
}: SortIconProps & SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...others}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.52743 0.721792C5.55067 0.693903 5.57631 0.668126 5.60405 0.644758L5.63879 0.617519C5.89853 0.42831 6.26341 0.470779 6.47258 0.721792L9.60604 4.48197C9.69904 4.59357 9.75 4.73451 9.75 4.8801C9.75 5.22246 9.47397 5.5 9.13347 5.5H2.86655C2.72175 5.5 2.58158 5.44876 2.47059 5.35526C2.20959 5.13538 2.17529 4.7444 2.39397 4.48197L5.52743 0.721792Z"
        fill={direction === "up" ? "#004FF0" : "#9B9B9B"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.52743 11.2782C5.55067 11.3061 5.57631 11.3319 5.60405 11.3552L5.63879 11.3825C5.89853 11.5717 6.26341 11.5292 6.47258 11.2782L9.60604 7.51803C9.69904 7.40643 9.75 7.26549 9.75 7.1199C9.75 6.77754 9.47397 6.5 9.13347 6.5H2.86655C2.72175 6.5 2.58158 6.55124 2.47059 6.64474C2.20959 6.86462 2.17529 7.2556 2.39397 7.51803L5.52743 11.2782Z"
        fill={direction === "down" ? "#004FF0" : "#9B9B9B"}
      />
    </svg>
  );
};

export default SortIcon;
