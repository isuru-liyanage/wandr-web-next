'use client'
 
import { usePathname } from 'next/navigation'

import { NAV_LINKS } from "@/constants";
// import BlogPage from '../app/api/blogs/page';
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {

    const pathname = usePathname();
    // console.log(pathname);

    return(
        <nav className="sticky top-0 flexBetween 
        max-container padding-container z-30 py-5 bg-white">
            <Link href = "/">
                <Image src= "/logo.png" alt="logo" width={150} height={19}></Image>
            </Link>
            <ul className="hidden h-full gap-12 lg:flex">
                { NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key}
                    className={`regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all ${
                        pathname === link.href ? 'font-bold' : ''
                      }`}>
                        {link.label}
                    </Link>
                ))}

            </ul>

            <div className="lg:flexCenter hidden">
                <Button
                    type="button"
                    title="Login"
                    icon="/user.svg"
                    variant="btn_dark_green"
                    link="/api/login"
                />
            </div>

            <Image
                src= "../../menu.svg"
                alt = "menu"
                width={32}
                height={32}
                className="inline-block cursor-pointer lg:hidden"
            />
        </nav>
    )
}

export default Navbar;