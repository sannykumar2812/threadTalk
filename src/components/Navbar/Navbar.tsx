import Link from "next/link";
import { PhoneIcon, AddIcon } from "@chakra-ui/icons";
import { Icons } from "../ui/Icons/Icons";
import { buttonVariants } from "../ui/Button";
import Image from "next/image";
import { logo } from "@/Assets";
import { Flex } from "@chakra-ui/react";
const NavBar: any = async () => {
  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
      <Flex direction={"row"} justifyContent={"space-between"} mx={"3rem"}>
        <Link href="/" className="flex gap-2 items-center">
          <Image
            className="h-8 w-8 sm:h-6 sm:w-6"
            src={logo}
            alt="logo image"
          />
          <p className="hidden text-zinc-700 text-sm font-medium md:block">
            Thread Talk
          </p>
        </Link>
        <Link href="/sign-in" className={buttonVariants()}>
          Sign In
        </Link>
      </Flex>
    </div>
  );
};

export default NavBar;
