import Link from "next/link";
import Button from "../Button";
import Container from "../Container";
import Play from "./Play";
import Image from "next/image";
import HeroImg from "@/public/HeroImg.png";
import BGHero from "@/public/BGHero.png";

export default function SectionHero() {
  return (
    <section className="mt-[125px]">
      <Container>
        <Image
          src={BGHero}
          alt="BGHero"
          className="absolute left-[50%] -translate-x-[50%] top-[288px]"
        />
        <div className="w-8/12 mx-auto text-center ">
          <h6 className="font-semibold tracking-widest text-primary">
            MANA SAYA TAU SAYA KAN PENCURRY
          </h6>
          <h1 className="text-[62px] leading-[74px] mt-5 mb-[30px]">
            Social Media Tool Yang Tidak Akan Memberikan Kamu Insight Apapun
          </h1>
          <p className="w-9/12 mx-auto px-5 text-lg leading-[34px]">
            Adalah benar apa yang kamu baca barusan. Tool yang mainstream akan
            memberikan kamu pelbagai insight, karena kami anti-mainstream maka
            kami akan melakukan sebaliknya.
          </p>
          <div className="flex gap-[55px] justify-center mt-[60px]">
            <Button variant="medium-orange">Memulai Sekarang</Button>
            <Link
              href={"/"}
              className="flex items-center gap-4 font-bold group font-dm hover:underline"
            >
              <Play />
              Pelajarin Dulu
            </Link>
          </div>
        </div>
        <div className="mt-[132px] flex drop-shadow-[0_40px_80px_rgba(13,14,37,0.1)] justify-center">
          <Image src={HeroImg} alt="HeroImg" className="" />
        </div>
      </Container>
    </section>
  );
}
