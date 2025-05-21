"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();

  const GoToSing = () => {
    router.push("/login/singin");
  }

  const sendCode = () => {
    router.push("/login/forgetpassword");
  }


  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <section className="min-w-[1280px] h-[680px] flex justify-end">
        <Image
          className="w-1/2"
          src="/images/Rectangle 19280.png"
          alt=""
          width={600}
          height={680}
        />
        <div className="w-1/2 border-1 border-gray-400 border-l-0 rounded-br-2xl rounded-tr-2xl flex justify-center">
          <div className="flex flex-col justify-between w-[65%] bg-white py-5 pt-20">
            <h1 className="text-5xl font-serif text-gray-600">FASCO</h1>
            <div className="flex flex-col gap-6 ">
              <h2 className="text-2xl font-serif ">Forget Password</h2>
              <form
                action=""
                className=" w-full flex flex-col items-center gap-7"
              >
                <div className="grid grid-cols-2 grid-rows-2 gap-x-2 gap-y-10 w-full">
                  <input
                    className="border-b-2 border-gray-500 h-10 w-full"
                    type="text"
                    name=""
                    id=""
                    placeholder="First Name"
                  />
                  <input
                    className="border-b-2 border-gray-500 h-10 w-full"
                    type="text"
                    name=""
                    id=""
                    placeholder="Last Name "
                  />
                  <input
                    className="border-b-2 border-gray-500 h-10 w-full"
                    type="text"
                    name=""
                    id=""
                    placeholder="Email Address"
                  />
                  <input
                    className="border-b-2 border-gray-500 h-10 w-full"
                    type="text"
                    name=""
                    id=""
                    placeholder="Phone Number"
                  />
                </div>
                <button
                  type="button"
                  onClick={sendCode}
                  className="w-[85%] h-10 text-white bg-black font-bold rounded-sm"
                >
                  Send Confirmation Code
                </button>
                <h6 className="text-sm gap-1 flex">
                  Already have an account?
                  <button
                    type="button"
                    onClick={GoToSing}
                    className=" text-blue-400"
                  >
                    Login
                  </button>
                </h6>
              </form>
            </div>
            <h3 className="text-sm text-right ">FASCO Terms & Codnitions</h3>
          </div>
        </div>
      </section>
    </main>
  );
}
