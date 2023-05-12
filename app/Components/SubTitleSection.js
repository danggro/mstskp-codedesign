export default function SubTitleSection(props) {
  return (
    <h2
      className="font-bold text-4xl leading-[54px]"
      style={{ color: `var(--${props.color})`, margin: `${props.margin}` }}
    >
      {props.children}
    </h2>
  );
}
