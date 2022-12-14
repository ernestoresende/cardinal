import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler() {
  const interRegular = fetch(
    new URL("../../assets/fonts/Inter-Regular.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  const interBold = fetch(
    new URL("../../assets/fonts/Inter-Bold.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  try {
    const fontRegular = await interRegular;
    const fontBold = await interBold;

    return new ImageResponse(
      (
        <div tw="bg-white flex h-full w-full">
          <svg
            style={{
              position: "absolute",
              top: 0,
            }}
            width={1540}
            viewBox="0 0 1540 1537"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_500_368)">
              <path
                d="M361.5 1277C640.68 1277 867 1048.89 867 767.5C867 486.111 640.68 258 361.5 258C82.32 258 -144 486.111 -144 767.5C-144 1048.89 82.32 1277 361.5 1277Z"
                fill="#1F89DB"
                fill-opacity="0.06"
              />
              <path
                d="M1259.29 1250.03C1508.53 1250.03 1710.58 1046.31 1710.58 795.005C1710.58 543.703 1508.53 339.982 1259.29 339.982C1010.05 339.982 808 543.703 808 795.005C808 1046.31 1010.05 1250.03 1259.29 1250.03Z"
                fill="#F42A8B"
                fill-opacity="0.06"
              />
              <path
                d="M91 640C399.175 640 649 388.16 649 77.5C649 -233.16 399.175 -485 91 -485C-217.175 -485 -467 -233.16 -467 77.5C-467 388.16 -217.175 640 91 640Z"
                fill="#F42A8B"
                fill-opacity="0.06"
              />
              <path
                d="M1441.24 805C1681.76 805 1876.74 608.453 1876.74 366C1876.74 123.547 1681.76 -73 1441.24 -73C1200.72 -73 1005.74 123.547 1005.74 366C1005.74 608.453 1200.72 805 1441.24 805Z"
                fill="#1F89DB"
                fill-opacity="0.06"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_500_368"
                x="-727"
                y="-745"
                width="2863.74"
                height="2282"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="130"
                  result="effect1_foregroundBlur_500_368"
                />
              </filter>
            </defs>
          </svg>
          <div
            style={{ fontFamily: "Inter" }}
            tw="flex h-full w-full items-center justify-center flex-col"
          >
            <svg
              style={{ marginBottom: 28 }}
              width={600}
              viewBox="0 0 600 117"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100.485 48.3124H70.9676C70.7583 45.8618 70.2 43.6387 69.2929 41.6432C68.4206 39.6477 67.1995 37.9322 65.6294 36.4969C64.0942 35.0265 62.2275 33.9062 60.0294 33.136C57.8313 32.3308 55.3366 31.9282 52.5454 31.9282C47.6607 31.9282 43.5261 33.1185 40.1417 35.4991C36.7922 37.8797 34.2452 41.2931 32.5007 45.7392C30.791 50.1854 29.9362 55.5242 29.9362 61.7558C29.9362 68.3375 30.8085 73.8514 32.553 78.2976C34.3324 82.7087 36.8969 86.0346 40.2464 88.2751C43.5959 90.4807 47.6258 91.5835 52.336 91.5835C55.0226 91.5835 57.4301 91.2509 59.5584 90.5857C61.6867 89.8855 63.5359 88.8878 65.106 87.5925C66.6761 86.2971 67.9496 84.7392 68.9265 82.9188C69.9384 81.0633 70.6187 78.9802 70.9676 76.6697L100.485 76.8797C100.136 81.4309 98.8627 86.0696 96.6646 90.7958C94.4665 95.487 91.3438 99.8281 87.2965 103.819C83.2841 107.775 78.3121 110.961 72.3807 113.377C66.4493 115.792 59.5584 117 51.708 117C41.8688 117 33.0415 114.882 25.226 110.646C17.4453 106.41 11.2871 100.178 6.75135 91.9511C2.25045 83.724 0 73.6589 0 61.7558C0 49.7828 2.30278 39.7002 6.90835 31.5081C11.5139 23.281 17.7245 17.0669 25.54 12.8658C33.3555 8.62971 42.0782 6.51167 51.708 6.51167C58.4768 6.51167 64.7048 7.4394 70.3919 9.29488C76.0791 11.1504 81.0685 13.8636 85.3601 17.4345C89.6516 20.9704 93.1058 25.329 95.7226 30.5103C98.3394 35.6916 99.9269 41.6257 100.485 48.3124Z"
                fill="url(#paint0_linear_873_39)"
              />
              <path
                d="M135.032 116.79C129.903 116.79 125.367 115.95 121.424 114.269C117.517 112.554 114.446 109.963 112.213 106.497C109.98 103.031 108.864 98.6203 108.864 93.2639C108.864 88.8528 109.614 85.0893 111.114 81.9735C112.614 78.8227 114.708 76.2496 117.394 74.254C120.081 72.2585 123.204 70.7356 126.763 69.6854C130.356 68.6351 134.229 67.9524 138.381 67.6373C142.882 67.2873 146.493 66.8671 149.215 66.377C151.971 65.8519 153.96 65.1342 155.181 64.224C156.402 63.2787 157.013 62.0359 157.013 60.4955V60.2855C157.013 58.1849 156.21 56.5745 154.605 55.4542C153 54.3339 150.942 53.7738 148.43 53.7738C145.673 53.7738 143.423 54.3864 141.678 55.6118C139.969 56.8021 138.939 58.64 138.59 61.1257H112.004C112.353 56.2244 113.905 51.7083 116.662 47.5772C119.453 43.4111 123.518 40.0853 128.856 37.5996C134.194 35.079 140.858 33.8187 148.848 33.8187C154.605 33.8187 159.769 34.5013 164.34 35.8667C168.91 37.197 172.801 39.07 176.011 41.4856C179.221 43.8662 181.663 46.667 183.338 49.8878C185.047 53.0736 185.902 56.5395 185.902 60.2855V115.53H158.897V104.187H158.269C156.664 107.197 154.71 109.631 152.407 111.486C150.139 113.342 147.54 114.689 144.609 115.53C141.713 116.37 138.521 116.79 135.032 116.79ZM144.452 98.5153C146.65 98.5153 148.709 98.0601 150.628 97.1499C152.582 96.2397 154.169 94.9268 155.39 93.2114C156.612 91.496 157.222 89.4129 157.222 86.9623V80.2406C156.455 80.5556 155.635 80.8532 154.762 81.1333C153.925 81.4134 153.018 81.6759 152.041 81.921C151.099 82.1661 150.087 82.3936 149.005 82.6037C147.959 82.8137 146.86 83.0063 145.708 83.1813C143.475 83.5314 141.643 84.1091 140.213 84.9143C138.817 85.6845 137.771 86.6472 137.073 87.8025C136.41 88.9228 136.078 90.1831 136.078 91.5835C136.078 93.8241 136.863 95.5395 138.433 96.7298C140.004 97.9201 142.01 98.5153 144.452 98.5153Z"
                fill="url(#paint1_linear_873_39)"
              />
              <path
                d="M198.232 115.53V34.8689H226.284V50.2029H227.122C228.587 44.5314 230.907 40.3829 234.082 37.7572C237.292 35.1315 241.043 33.8187 245.335 33.8187C246.591 33.8187 247.829 33.9237 249.05 34.1338C250.306 34.3088 251.51 34.5714 252.662 34.9215V59.6553C251.231 59.1652 249.469 58.7976 247.376 58.5525C245.282 58.3074 243.485 58.1849 241.985 58.1849C239.159 58.1849 236.612 58.8326 234.344 60.1279C232.111 61.3882 230.349 63.1737 229.058 65.4843C227.767 67.7599 227.122 70.4381 227.122 73.5188V115.53H198.232Z"
                fill="url(#paint2_linear_873_39)"
              />
              <path
                d="M285.154 116.58C279.432 116.58 274.163 115.075 269.348 112.064C264.568 109.053 260.73 104.484 257.834 98.3577C254.973 92.2311 253.543 84.5117 253.543 75.1993C253.543 65.4668 255.043 57.5548 258.044 51.4632C261.079 45.3716 264.987 40.908 269.767 38.0723C274.582 35.2365 279.641 33.8187 284.945 33.8187C288.922 33.8187 292.411 34.5189 295.412 35.9192C298.412 37.2846 300.924 39.1225 302.948 41.4331C304.972 43.7087 306.507 46.2118 307.554 48.9425H307.972V7.98204H336.862V115.53H308.182V102.296H307.554C306.437 105.027 304.832 107.478 302.739 109.648C300.68 111.784 298.168 113.482 295.202 114.742C292.272 115.967 288.922 116.58 285.154 116.58ZM295.83 94.3142C298.482 94.3142 300.75 93.544 302.634 92.0036C304.553 90.4282 306.018 88.2226 307.03 85.3869C308.077 82.5162 308.6 79.1203 308.6 75.1993C308.6 71.2083 308.077 67.7949 307.03 64.9592C306.018 62.0884 304.553 59.9004 302.634 58.395C300.75 56.8546 298.482 56.0844 295.83 56.0844C293.179 56.0844 290.911 56.8546 289.027 58.395C287.178 59.9004 285.747 62.0884 284.735 64.9592C283.758 67.7949 283.27 71.2083 283.27 75.1993C283.27 79.1903 283.758 82.6212 284.735 85.4919C285.747 88.3276 287.178 90.5157 289.027 92.0561C290.911 93.5615 293.179 94.3142 295.83 94.3142Z"
                fill="url(#paint3_linear_873_39)"
              />
              <path
                d="M349.571 115.53V34.8689H378.461V115.53H349.571ZM364.016 26.4668C360.108 26.4668 356.759 25.1715 353.967 22.5808C351.176 19.9901 349.78 16.8743 349.78 13.2334C349.78 9.59246 351.176 6.47666 353.967 3.88599C356.759 1.29533 360.108 0 364.016 0C367.959 0 371.308 1.29533 374.064 3.88599C376.856 6.47666 378.251 9.59246 378.251 13.2334C378.251 16.8743 376.856 19.9901 374.064 22.5808C371.308 25.1715 367.959 26.4668 364.016 26.4668Z"
                fill="url(#paint4_linear_873_39)"
              />
              <path
                d="M420.596 70.158V115.53H391.706V34.8689H419.13V50.2029H419.968C421.712 45.0916 424.783 41.083 429.179 38.1773C433.61 35.2715 438.774 33.8187 444.67 33.8187C450.358 33.8187 455.295 35.1315 459.481 37.7572C463.703 40.3478 466.966 43.9188 469.268 48.4699C471.606 53.0211 472.757 58.2199 472.723 64.0664V115.53H443.833V70.158C443.868 66.167 442.856 63.0337 440.798 60.7581C438.774 58.4825 435.948 57.3447 432.319 57.3447C429.947 57.3447 427.871 57.8698 426.091 58.9201C424.347 59.9354 423.003 61.4057 422.061 63.3312C421.119 65.2217 420.631 67.4973 420.596 70.158Z"
                fill="url(#paint5_linear_873_39)"
              />
              <path
                d="M507.91 116.79C502.781 116.79 498.245 115.95 494.303 114.269C490.395 112.554 487.325 109.963 485.092 106.497C482.859 103.031 481.742 98.6203 481.742 93.2639C481.742 88.8528 482.492 85.0893 483.993 81.9735C485.493 78.8227 487.586 76.2496 490.273 74.254C492.959 72.2585 496.082 70.7356 499.641 69.6854C503.235 68.6351 507.108 67.9524 511.26 67.6373C515.761 67.2873 519.372 66.8671 522.093 66.377C524.85 65.8519 526.838 65.1342 528.06 64.224C529.281 63.2787 529.891 62.0359 529.891 60.4955V60.2855C529.891 58.1849 529.089 56.5745 527.484 55.4542C525.879 54.3339 523.82 53.7738 521.308 53.7738C518.552 53.7738 516.301 54.3864 514.557 55.6118C512.847 56.8021 511.818 58.64 511.469 61.1257H484.882C485.231 56.2244 486.784 51.7083 489.54 47.5772C492.331 43.4111 496.396 40.0853 501.734 37.5996C507.073 35.079 513.737 33.8187 521.727 33.8187C527.484 33.8187 532.648 34.5013 537.218 35.8667C541.789 37.197 545.679 39.07 548.889 41.4856C552.099 43.8662 554.542 46.667 556.216 49.8878C557.926 53.0736 558.781 56.5395 558.781 60.2855V115.53H531.775V104.187H531.147C529.542 107.197 527.588 109.631 525.286 111.486C523.018 113.342 520.418 114.689 517.488 115.53C514.592 116.37 511.399 116.79 507.91 116.79ZM517.331 98.5153C519.529 98.5153 521.587 98.0601 523.506 97.1499C525.46 96.2397 527.048 94.9268 528.269 93.2114C529.49 91.496 530.101 89.4129 530.101 86.9623V80.2406C529.333 80.5556 528.513 80.8532 527.641 81.1333C526.803 81.4134 525.896 81.6759 524.919 81.921C523.977 82.1661 522.965 82.3936 521.884 82.6037C520.837 82.8137 519.738 83.0063 518.587 83.1813C516.354 83.5314 514.522 84.1091 513.091 84.9143C511.696 85.6845 510.649 86.6472 509.951 87.8025C509.288 88.9228 508.957 90.1831 508.957 91.5835C508.957 93.8241 509.742 95.5395 511.312 96.7298C512.882 97.9201 514.888 98.5153 517.331 98.5153Z"
                fill="url(#paint6_linear_873_39)"
              />
              <path
                d="M600 7.98204V115.53H571.111V7.98204H600Z"
                fill="url(#paint7_linear_873_39)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_873_39"
                  x1="226.663"
                  y1="-24.9543"
                  x2="556.453"
                  y2="25.1874"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F42A8B" />
                  <stop offset="1" stop-color="#9D4CCE" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_873_39"
                  x1="226.663"
                  y1="-24.9543"
                  x2="556.453"
                  y2="25.1874"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F42A8B" />
                  <stop offset="1" stop-color="#9D4CCE" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_873_39"
                  x1="226.663"
                  y1="-24.9543"
                  x2="556.453"
                  y2="25.1874"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F42A8B" />
                  <stop offset="1" stop-color="#9D4CCE" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_873_39"
                  x1="226.663"
                  y1="-24.9543"
                  x2="556.453"
                  y2="25.1874"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F42A8B" />
                  <stop offset="1" stop-color="#9D4CCE" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_873_39"
                  x1="226.663"
                  y1="-24.9543"
                  x2="556.453"
                  y2="25.1874"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F42A8B" />
                  <stop offset="1" stop-color="#9D4CCE" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_873_39"
                  x1="226.663"
                  y1="-24.9543"
                  x2="556.453"
                  y2="25.1874"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F42A8B" />
                  <stop offset="1" stop-color="#9D4CCE" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_873_39"
                  x1="226.663"
                  y1="-24.9543"
                  x2="556.453"
                  y2="25.1874"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F42A8B" />
                  <stop offset="1" stop-color="#9D4CCE" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear_873_39"
                  x1="226.663"
                  y1="-24.9543"
                  x2="556.453"
                  y2="25.1874"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F42A8B" />
                  <stop offset="1" stop-color="#9D4CCE" />
                </linearGradient>
              </defs>
            </svg>
            <p tw="text-5xl text-slate-800">
              Open source template for <span tw="font-bold mx-2">Next.js</span> &{" "}
              <span tw="font-bold mx-2">GraphQL</span>
            </p>
          </div>
        </div>
      ),
      {
        fonts: [
          {
            name: "Inter",
            data: fontRegular,
            weight: 400,
            style: "normal",
          },
          {
            name: "Inter",
            data: fontBold,
            weight: 700,
            style: "normal",
          },
        ],
      },
    );
  } catch {}
}
