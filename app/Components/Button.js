export default function Button(props) {
  const variants = {
    "small-white": "px-[25px] py-[10px] bg-white text-dark text-lg",
    "medium-orange":
      "px-10 py-[25px] bg-primary text-white text-lg shadow-[0px_30px_60px_0_rgba(252,136,29,0.25)]",
    "large-dark":
      "px-[30px] py-5 bg-dark text-white shadow-[0px_30px_60px_0_rgba(13,14,37,0.2);]",
  };
  const pickedVariant = variants[props.variant];
  return (
    <button
      className={`${pickedVariant} w-fit hover:opacity-75 font-bold  rounded-full`}
    >
      {props.children}
    </button>
  );
}
