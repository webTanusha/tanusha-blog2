export default function Icon({ path, color, viewBox }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox={viewBox}
    >
      <path d={path} fill={color} />
    </svg>
  );
}
