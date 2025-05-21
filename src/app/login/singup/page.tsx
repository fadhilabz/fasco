"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
      const router = useRouter();
    
      const goToSigin = () => {
        router.push("/login/singin");
      };
  
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <section className="min-w-[1280px] h-[680px] flex justify-end">
        <Image
          className="w-1/2"
          src="/images/Rectangle 19280 (1).png"
          alt=""
          width={600}
          height={680}
        />
        <div className="w-1/2 border-1 border-gray-400 border-l-0 rounded-br-2xl rounded-tr-2xl flex justify-center">
          <div className="flex flex-col justify-between w-[65%] bg-white py-5 pt-10">
            <h1 className="text-5xl font-serif text-gray-600">FASCO</h1>
            <div className="flex flex-col gap-6 ">
              <h2 className="text-2xl font-serif ">Create Account</h2>
              <div className="flex justify-between">
                <button className="border-1 border-blue-400 flex items-center px-4 py-1 text-sm gap-3 rounded-sm">
                  <Image
                    className="w-6 "
                    src="/images/google.png"
                    alt=""
                    width={600}
                    height={680}
                  />
                  Sign up with Google
                </button>
                <button className="border-1 border-blue-400 flex items-center px-4 py-1 text-sm gap-3 rounded-sm">
                  <Image
                    className="w-6 "
                    src="/images/gmail.png"
                    alt=""
                    width={600}
                    height={680}
                  />
                  Sign up with Email
                </button>
              </div>
              <h3 className="text-xl font-bold text-gray-600 flex items-center gap-2 justify-center py-4">
                <div className="w-7 h-1 bg-gray-600"></div>
                OR
                <div className="w-7 h-1 bg-gray-600"></div>
              </h3>
              <form
                action=""
                className=" w-full flex flex-col items-center gap-7"
              >
                <div className="grid grid-cols-2 grid-rows-3 gap-x-3 gap-y-5 w-full">
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
                  <input
                    className="border-b-2 border-gray-500 h-10 w-full"
                    type="text"
                    name=""
                    id=""
                    placeholder="Password"
                  />
                  <input
                    className="border-b-2 border-gray-500 h-10 w-full"
                    type="text"
                    name=""
                    id=""
                    placeholder="Confirm Password"
                  />
                </div>
                <button
                  type="button"
                  onClick={goToSigin}
                  className="w-[85%] h-10 text-white bg-black font-bold rounded-sm"
                >
                  Create Account
                </button>
                <h6 className="text-sm gap-1 flex">
                  Already have an account?
                  <button
                    className=" text-blue-400"
                    type="button"
                    onClick={goToSigin}
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
