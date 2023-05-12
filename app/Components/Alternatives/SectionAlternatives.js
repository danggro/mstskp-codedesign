import Image from "next/image";
import Container from "../Container";
import SubTitleSection from "../SubTitleSection";
import TextSection from "../TextSection";
import TitleSection from "../TitleSection";
import BGAlternatives from "./BGAlternatives";
import ArrowR from "./ArrowR";
import Alternatives1 from "@/public/alternatives/alternatives-1.png";
import Alternatives2 from "@/public/alternatives/alternatives-2.png";

export default function SectionAlternatives() {
  return (
    <section className="relative" id="alternatives">
      <div className="absolute top-0 -z-40">
        <BGAlternatives />
      </div>
      <Container>
        <div className="flex items-center pt-[200px] gap-8">
          <div className="w-6/12">
            <TitleSection color="white">Alternatives</TitleSection>
            <SubTitleSection color="white" margin="10px 0 0 0">
              Karena Tool Kita Ini Nggak Ada Apa-Apanya, Inilah Alternatifnya!
            </SubTitleSection>
          </div>
          <div className="w-6/12">
            <TextSection color="white">
              Seperti yang lo tau sendiri ya, tool ini tuh nggak ada apa-apanya.
              Barangkali lo udah serius gitu butuh tool untuk sosial media, maka
              dari itu kita kasih 2 alternatif yang bisa lo pake untuk sosial
              media lo.
            </TextSection>
          </div>
        </div>
        <div className="absolute bg-white z-10 top-[418px] left-[130px] right-[130px] p-[65px] shadow-[0px_40px_60px_0_rgba(13,14,37,0.1)] rounded-[20px] flex gap-[30px] text-dark">
          <div className="w-6/12">
            <Image src={Alternatives1} alt="Alternatives1" />
            <p className="text-[22px] leading-[30px] my-[25px] pr-5">
              Buffer.com - Buffer is the most intuitive, affordable, and
              authentic way to reach more people on social media.
            </p>
            <a
              href="#"
              className="flex w-fit hover:underline gap-[15px] items-center font-semibold leading-[30px]"
            >
              Learn More
              <ArrowR />
            </a>
          </div>
          <div className="w-6/12">
            <Image src={Alternatives2} alt="Alternatives2" />
            <p className="text-[22px] leading-[30px] my-[25px] pr-5">
              Sendible.com - Grow your audience, attract new customers, and
              reach your social media goals with an all-in-one platform.
            </p>
            <a
              href="#"
              className="flex w-fit hover:underline gap-[15px] items-center font-semibold leading-[30px]"
            >
              Learn More
              <ArrowR />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
