"use client";
import Outline from "@/components/buttons/Outline";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { Button } from "../button";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navItems = ["Home", "About", "Services", "Pages", "Contact", "Blog"];
  return (
    <>
      <div className="relative z-50">
        <div>
          <motion.div
            initial={{ y: "-400px" }}
            animate={{ y: "0px" }}
            className="h-14 duration-200 "
          >
            <div className="rounded-full shadow-lg bg-black flex justify-between mt-0 p-4 items-center">
              <Image
                height={30}
                width={30}
                src={"/svg/Logo.svg"}
                alt="Logo"
                className="pt-1 md:h-10 md:w-10"
              />
              {/* desktop */}
              <div className="md:flex gap-10 pl-40 hidden ">
                {navItems.map((item, idx) => (
                  <Link
                    href={`#${item}`}
                    key={idx}
                    className="text-gray-500 hover:text-white "
                  >
                    {item}
                  </Link>
                ))}
              </div>
              <div className="md:flex gap-4 hidden ">
                <Button className="text-white">Log In</Button>
                <Outline>Sign up Free </Outline>
              </div>
              <div className="md:hidden" onClick={() => setShowMenu((c) => !c)}>
                {showMenu ? <RxCross1 size={25} /> : <FiMenu size={25} />}
              </div>
            </div>

            {/*  */}
            <div
              className={`flex duration-300 flex-col bg-black border justify-center items-center shadow-xl relative ${
                showMenu ? "top-0" : "top-[-500px]"
              }  m-4 rounded-3xl p-1`}
            >
              <div className={` w-full text-center p-2`}>
                {navItems.map((item, idx) => (
                  <div key={idx} className="w-full text-center border-b p-2">
                    <Link href={""} className="hover:underline">
                      {item}
                    </Link>
                  </div>
                ))}
              </div>

              {/* <Button className=" p-2 border-b">Log In</Button> */}
              <div className="p-1">
                <Outline>Login</Outline>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* <div className="flex justify-between items-center">
        <Image
          height={30}
          width={30}
          src={"/Logo.svg"}
          alt="Logo"
          className="pt-1 md:h-10 md:w-10"
        />
        {openMenu ? (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 90 }}
            transition={{ duration: 0.5 }}
          >
            <RxCross2 size={28} onClick={() => setOpenMenu(!openMenu)} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ rotate: 90 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AlignJustify size={28} onClick={() => setOpenMenu(!openMenu)} />
          </motion.div>
        )}
      </div>
      {openMenu && (
        <div className="border-green-600 duration-150  flex flex-col gap-2 items-center justify-center h-56 w-full border mt-4 rounded-xl p-2">
          <p className="cursor-pointer rounded-lg text-center py-3  hover:bg-green-200 w-full hover:bg-opacity-10 text-white">
            Login
          </p>
          <p className="cursor-pointer rounded-lg text-center py-3  hover:bg-green-200 w-full hover:bg-opacity-10 text-white">
            Sign Up
          </p>
        </div>
      )} */}
    </>
  );
};

// export const Topbar = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const navItems = ["Home", "About", "Services", "Pages", "Contact", "Blog"];
//   return (
//     <div>
//       <motion.div
//         initial={{ y: "-400px" }}
//         animate={{ y: "0px" }}
//         className="h-[150px] duration-500"
//       >
//         <div className="rounded-full border  shadow-lg flex justify-between m-4 mt-0 p-4 items-center">
//           <a href="logo" className="text-xl pl-1 font-semibold">
//             JainInteriors
//           </a>
//           <div className="md:flex gap-10 hidden ">
//             {navItems.map((item, idx) => (
//               <a href={item} key={idx} className="hover:underline ">
//                 {item}
//               </a>
//             ))}
//           </div>
//           <div className="md:flex gap-4 hidden ">
//             <button className="border border-black rounded-full px-5 py-2 hover:scale-105 hover:bg-black duration-200 hover:text-white">
//               Log In
//             </button>
//             <Button className="hover:scale-105 hover:bg-white hover:text-black border hover:border-black">
//               Sign up Free{" "}
//             </Button>
//           </div>
//           <div className="md:hidden" onClick={() => setShowMenu((c) => !c)}>
//             {showMenu ? <RxCross1 size={25} /> : <FiMenu size={25} />}
//           </div>
//         </div>

//         <div
//           className={`flex duration-300 flex-col bg-white border justify-center items-center shadow-xl relative ${
//             showMenu ? "top-0" : "top-[-500px]"
//           }  m-4 rounded-3xl p-1`}
//         >
//           <div className={` w-full text-center p-2`}>
//             {navItems.map((item, idx) => (
//               <div key={idx} className="w-full text-center border-b p-2">
//                 <a href="Contact" className="hover:underline">
//                   {item}
//                 </a>
//               </div>
//             ))}
//           </div>

//           <button className="w-full p-2 border-b">Log In</button>
//           <div className="p-1">
//             <Button>Sign up free</Button>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Topbar;
export default Navbar;
