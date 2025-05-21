import Link from "next/link";

export default function Navbar (){
    return (
      <main className="w-full h-28 flex flex-col">
      <nav className="flex justify-between items-center w-screen h-32 bg- px-28 fixed">
        <h2 className="text-5xl font-serif text-[#484848]">FASCO</h2>
        <ul className="flex gap-16 text-[#484848 text-sm] items-center justify-between ">
          <Link className="font-sm text-[#484848] " href="">Home</Link>
          <Link className="font-sm text-[#484848] " href="">Delas</Link>
          <Link className="font-sm text-[#484848] " href="">New Arrivals</Link>
          <Link className="font-sm text-[#484848] " href="">packages</Link>
          <Link className="font-sm text-[#484848] " href="">Sing In</Link>
          <Link className="font-sm bg-black px-7 py-3 rounded-xl text-white " href="">Sing Up</Link>
        </ul>
      </nav>
      <section className="w-screen h-32">
        
      </section>
      </main>
    );
}