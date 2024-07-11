import { FloatingNav } from "@/components/ui/FloatingNav";
import Hero from "../components/Hero";

export default function Home() {
  const navItems = [
    { name: "About", link: "/#about" },
    { name: "Projects", link: "/#projects" },
    { name: "Testimonials", link: "/#testimonials" },
    { name: "Contact", link: "/#contact" },
  ];

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}></FloatingNav>
        <Hero></Hero>
      </div>
    </main>
  );
}
