export default function Button({ title, extraStyle }) {
  return (
    <button
      className={`${extraStyle ? extraStyle : ""} btn btn-primary text-white`}
    >
      {title}
    </button>
  );
}
