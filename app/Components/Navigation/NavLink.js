import LinkNav from "./LinkNav";

export default function NavLink() {
  return (
    <ul className="flex gap-[50px]">
      <LinkNav href="#" active>
        Top
      </LinkNav>
      <LinkNav href="#">Features</LinkNav>
      <LinkNav href="#reasons">Reasons</LinkNav>
      <LinkNav href="#alternatives">Alternatives</LinkNav>
    </ul>
  );
}
