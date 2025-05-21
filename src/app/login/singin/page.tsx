"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const goToSigin = () => {
    router.push("/");
  };

  const goToSingup = () => {
    router.push("/login/singup");
  };

  const GoToForget = () => {
    router.push("/login/forgetpassword");
  };
  

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
          <div className="flex flex-col justify-between w-[65%] bg-white py-2 pt-8">
            <h1 className="text-5xl font-serif text-gray-600">FASCO</h1>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-serif ">Sign In To FASCO</h2>
              <div className="flex justify-between">
                <button className="border-1 border-blue-400 flex items-center px-4 py-1 text-sm gap-3 rounded-sm">
                  <Image
                    className="w-6"
                    src="/images/google.png"
                    alt=""
                    width={24}
                    height={24}
                  />
                  Sign up with Google
                </button>
                <button className="border-1 border-blue-400 flex items-center px-4 py-1 text-sm gap-3 rounded-sm">
                  <Image
                    className="w-6"
                    src="/images/gmail.png"
                    alt=""
                    width={24}
                    height={24}
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
                className="flex flex-col gap-5 items-center w-full"
              >
                <input
                  className="border-b-2 border-gray-500 h-10 w-full"
                  type="text"
                  name="email"
                  placeholder="Email"
                />
                <input
                  className="border-b-2 border-gray-500 h-10 w-full"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <div className="flex flex-col gap-3 w-full items-center pt-5 ">
                  <button
                    type="button"
                    onClick={goToSigin}
                    className="w-[85%] h-10 text-white bg-black font-bold rounded-sm"
                  >
                    Sign In
                  </button>
                  <button
                    type="button"
                    onClick={goToSingup}
                    className="w-[85%] h-10 border-1 border-blue-400 text-blue-400 font-bold rounded-sm"
                  >
                    Register Now
                  </button>
                </div>
                <button
                  type="button"
                  onClick={GoToForget}
                  className="text-sm font-bold text-blue-400 text-right w-[85%]"
                >
                  Forget Password?
                </button>
              </form>
            </div>
            <h3 className="text-sm text-right ">FASCO Terms & Conditions</h3>
          </div>
        </div>
      </section>
    </main>
  );
}
