import Head from "next/head";
import Header from "./Components/Header/Header";
import SectionKenapa from "./Components/Kenapa/SectionKenapa";
import SectionGimana from "./Components/Gimana/SectionGimana";
import SectionAlternatives from "./Components/Alternatives/SectionAlternatives";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>MSTSKP</title>
      </Head>
      <div className="absolute w-screen h-[2330px] bg-[#FFF6ED] top-[1067px] left-0 -z-50 "></div>
      <Header />
      <SectionKenapa />
      <SectionGimana />
      <SectionAlternatives />
      <Footer />
    </>
  );
}
