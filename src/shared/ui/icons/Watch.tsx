import type { FC, SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGSVGElement> {}

const Watch: FC<Props> = ({ width = 20, height = 20, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 20C9.0915 20 8.21405 19.8807 7.36765 19.6422C6.52124 19.4036 5.72549 19.0637 4.98039 18.6225C4.23529 18.1814 3.55882 17.6569 2.95098 17.049C2.34314 16.4412 1.81863 15.7647 1.37745 15.0196C0.936275 14.2745 0.596405 13.4788 0.357843 12.6324C0.119281 11.7859 0 10.9085 0 10C0 9.08497 0.119281 8.20588 0.357843 7.36274C0.596405 6.51961 0.934641 5.72549 1.37255 4.98039C1.81046 4.23529 2.33333 3.55882 2.94118 2.95098C3.54902 2.34314 4.22549 1.81863 4.97059 1.37745C5.71569 0.936274 6.51144 0.596405 7.35784 0.357841C8.20425 0.11928 9.0817 0 9.9902 0C10.9052 0 11.7859 0.11928 12.6324 0.357841C13.4788 0.596405 14.2729 0.936274 15.0147 1.37745C15.7565 1.81863 16.433 2.34314 17.0441 2.95098C17.6552 3.55882 18.1814 4.23529 18.6225 4.98039C19.0637 5.72549 19.4036 6.51961 19.6422 7.36274C19.8807 8.20588 20 9.08497 20 10C20 10.9085 19.8807 11.7859 19.6422 12.6324C19.4036 13.4788 19.0637 14.2745 18.6225 15.0196C18.1814 15.7647 17.6569 16.4412 17.049 17.049C16.4412 17.6569 15.7647 18.1814 15.0196 18.6225C14.2745 19.0637 13.4804 19.4036 12.6373 19.6422C11.7941 19.8807 10.915 20 10 20ZM10 18.3333C10.9281 18.3333 11.8088 18.1944 12.6422 17.9167C13.4755 17.6389 14.2386 17.2451 14.9314 16.7353C15.6242 16.2255 16.2255 15.6242 16.7353 14.9314C17.2451 14.2386 17.6389 13.4755 17.9167 12.6422C18.1944 11.8088 18.3333 10.9281 18.3333 10C18.3333 9.07189 18.1928 8.19118 17.9118 7.35784C17.6307 6.52451 17.2353 5.76144 16.7255 5.06863C16.2157 4.37582 15.6144 3.77451 14.9216 3.26471C14.2288 2.7549 13.4657 2.36111 12.6324 2.08333C11.799 1.80556 10.9183 1.66667 9.9902 1.66667C9.06209 1.66667 8.18301 1.80556 7.35294 2.08333C6.52288 2.36111 5.76144 2.7549 5.06863 3.26471C4.37582 3.77451 3.77614 4.37582 3.26961 5.06863C2.76307 5.76144 2.37092 6.52451 2.09314 7.35784C1.81536 8.19118 1.67647 9.07189 1.67647 10C1.67647 10.9281 1.81536 11.8088 2.09314 12.6422C2.37092 13.4755 2.76307 14.2386 3.26961 14.9314C3.77614 15.6242 4.37582 16.2255 5.06863 16.7353C5.76144 17.2451 6.52451 17.6389 7.35784 17.9167C8.19118 18.1944 9.0719 18.3333 10 18.3333ZM8.27451 13.6078C8.13072 13.6928 7.98856 13.7304 7.84804 13.7206C7.70752 13.7108 7.58987 13.6601 7.4951 13.5686C7.40033 13.4771 7.35294 13.3595 7.35294 13.2157V6.79412C7.35294 6.64379 7.40196 6.52614 7.5 6.44118C7.59804 6.35621 7.71895 6.30882 7.86275 6.29902C8.00654 6.28922 8.14379 6.32353 8.27451 6.40196L13.5294 9.5098C13.6536 9.5817 13.7369 9.68137 13.7794 9.80882C13.8219 9.93627 13.8235 10.0637 13.7843 10.1912C13.7451 10.3186 13.6601 10.4216 13.5294 10.5L8.27451 13.6078Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Watch;
