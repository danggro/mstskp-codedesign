export default function TitleSection(props) {
  return (
    <div className={`items-center gap-[10px] ${!props.noline && "flex"}`}>
      {!props.noline && (
        <span
          className="block w-[45px] h-[2px]"
          style={{ backgroundColor: `var(--${props.color})` }}
        ></span>
      )}
      <h6
        className="font-semibold tracking-widest uppercase"
        style={{ color: `var(--${props.color})` }}
      >
        {props.children}
      </h6>
    </div>
  );
}
