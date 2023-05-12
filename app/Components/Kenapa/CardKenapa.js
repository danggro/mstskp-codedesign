export default function CardKenapa(props) {
  return (
    <div className="w-[287px] group p-[35px] rounded-[10px] hover:bg-dark space-y-5">
      <div className="flex items-center gap-5">
        <div className="bg-[#FFE9D6] rounded-[5px] p-[10px] grid place-items-center text-primary group-hover:text-white group-hover:bg-white/10">
          {props.icon}
        </div>
        <h6 className="text-lg font-semibold leading-[30px] text-dark group-hover:text-white">
          {props.title}
        </h6>
      </div>
      <p className="text-dark/60 leading-[30px] group-hover:text-white">
        {props.desc}
      </p>
    </div>
  );
}
