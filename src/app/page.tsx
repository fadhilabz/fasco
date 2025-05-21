import Navbar from "./componey/page";
import Image from "next/image";


export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="grid grid-cols-3 gap-10 px-28">
        <div className="bg-[#E0E0E0] h-[640px] flex justify-end flex-col items-center rounded-2xl">
          <Image
            className="h-[75%] w-auto"
            width={600}
            height={600}
            alt=""
            src="/images/beranda/1.png"
          ></Image>
        </div>
        
        <div className="h-[640px] flex flex-col gap-10 ">
          <div className="h-[20%] rounded-xl">
            <Image className="w-full h-auto" width={200} height={200} alt="" src="/images/beranda/3.png" ></Image>
          </div>
          <div className="h-[60%] bg-amber-100"></div>
          <div className="h-[20%] bg-amber-50 rounded-xl">
            <Image className="w-full h-auto" width={200} height={200} alt="" src="/images/beranda/2.png" ></Image>
          </div>
        </div>

        <div className="bg-[#E0E0E0] h-[640px] flex justify-end flex-col items-center rounded-2xl ">
          <Image
            className="h-[75%] w-auto"
            width={600}
            height={600}
            alt=""
            src="/images/beranda/4.png"
          ></Image>
        </div>
      </section>
    </main>
  );
}
