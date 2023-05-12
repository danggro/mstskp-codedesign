import Container from "../Container";
import ItemFooter from "./ItemFooter";
import LinkFooter from "./LinkFooter";

export default function Footer() {
  return (
    <footer className="mt-[840px]">
      <Container>
        <div className="flex gap-[200px]">
          <ItemFooter title="alternatives">
            <LinkFooter href="/">Buffer</LinkFooter>
            <LinkFooter href="/">Sendible</LinkFooter>
            <LinkFooter href="/">Later</LinkFooter>
            <LinkFooter href="/">Social Pilot</LinkFooter>
          </ItemFooter>
          <ItemFooter title="sitemap">
            <LinkFooter href="/">Top</LinkFooter>
            <LinkFooter href="/">Features</LinkFooter>
            <LinkFooter href="/">Reasons</LinkFooter>
            <LinkFooter href="/">Alternatives</LinkFooter>
            <LinkFooter href="/">Login</LinkFooter>
          </ItemFooter>
          <ItemFooter title="company">
            <LinkFooter href="/">About Us</LinkFooter>
            <LinkFooter href="/">Contact</LinkFooter>
            <LinkFooter href="/">Privacy Policy</LinkFooter>
            <LinkFooter href="/">Terms of Service</LinkFooter>
            <LinkFooter href="/">Help</LinkFooter>
          </ItemFooter>
          <ItemFooter title="get in touch">
            <LinkFooter href="/">Twitter</LinkFooter>
            <LinkFooter href="/">Facebook</LinkFooter>
            <LinkFooter href="/">Dribble</LinkFooter>
          </ItemFooter>
        </div>
        <span className="block w-full bg-dark/10 h-[1px] mt-[62px]"></span>
        <p className="mt-[45px] mb-[62px] text-center text-sm tracking-widest fontsm text-dark/60">
          COPYRIGHT &copy; 2022 — DESIGN NAUVAL
        </p>
      </Container>
    </footer>
  );
}
