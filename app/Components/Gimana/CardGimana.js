import Image from "next/image";
import TextSection from "../TextSection";

export default function CardGimana(props) {
  return (
    <div className="w-4/12 space-y-3">
      <div className="grid place-items-center rounded-[10px] bg-dark/5 py-[53px]">
        <Image src={props.img} alt={props.alt} />
      </div>
      <h6 className="font-semibold text-[22px] leading-[30px]">
        {props.title}
      </h6>
      <TextSection color="secondary">{props.desc}</TextSection>
    </div>
  );
}
