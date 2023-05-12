export default function TextSection(props) {
  return (
    <p className="leading-[30px]" style={{ color: `var(--${props.color})` }}>
      {props.children}
    </p>
  );
}
