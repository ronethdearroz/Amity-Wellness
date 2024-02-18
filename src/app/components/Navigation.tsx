import { Search } from "lucide-react";

export default function Navigation() {
  return (
    <section className=" flex justify-center ">
      <div className="container mx-auto py-6">
        <div className="flex justify-between">
          <div>
            <span className="text-2xl font-bold">LOGO</span>
          </div>
          <div className="flex gap-10 items-center">
            <a>Services</a>
            <a>Referrals</a>
            <a>Library</a>
            <a>Contact</a>
            <a>About</a>
            <Search />
          </div>
        </div>
      </div>
    </section>
  );
}
