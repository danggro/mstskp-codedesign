export default function ItemFooter(props) {
  return (
    <div>
      <h5 className="text-sm font-bold tracking-widest uppercase">
        {props.title}
      </h5>
      <ul className="mt-5 space-y-2">{props.children}</ul>
    </div>
  );
}
