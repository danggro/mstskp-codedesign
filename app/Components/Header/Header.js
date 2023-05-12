import SectionHero from "../Hero/SectionHero";
import NavBar from "../Navigation/NavBar";
import BGHeader from "./BGHeader";

export default function Header() {
  return (
    <header className="relative text-white ">
      <div className="absolute top-0 w-screen h-full -z-10">
        <BGHeader />
      </div>
      <NavBar />
      <SectionHero />
    </header>
  );
}
