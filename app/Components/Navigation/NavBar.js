import Container from "../Container";
import NavLink from "./NavLink";
import NavLogo from "./NavLogo";
import NavRight from "./NavRight";

export default function NavBar() {
  return (
    <nav className="relative z-50 pt-[65px]">
      <Container>
        <div className="flex items-center justify-between">
          <NavLogo />
          <NavLink />
          <NavRight />
        </div>
      </Container>
    </nav>
  );
}
