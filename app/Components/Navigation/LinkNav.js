export default function LinkNav(props) {
  return (
    <li>
      <a
        href={props.href}
        className={` ${
          props.active
            ? "text-white font-bold"
            : "text-white/60 hover:underline hover:text-white"
        }`}
      >
        {props.children}
      </a>
    </li>
  );
}
