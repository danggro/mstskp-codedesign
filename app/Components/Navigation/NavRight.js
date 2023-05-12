import Button from "../Button";

export default function NavRight() {
  return (
    <div className="flex items-center gap-[30px]">
      <a href="#" className="font-medium hover:underline">
        Mendaftar
      </a>
      <Button variant="small-white">Login</Button>
    </div>
  );
}
