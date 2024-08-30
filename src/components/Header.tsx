"use client";

import Image from "next/image";
import { navLinks } from "@/utils/navLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    return (
        <header className="flex items-center justify-between py-4 px-7 border-b">
            <Link href="/">
                <Image  
                    src="https://img.freepik.com/free-vector/hand-drawn-nerd-logo-template_23-2149199407.jpg"
                    alt="Logo"
                    className="w-[35px] h-[35px] rounded-[5px]"
                    width="50"
                    height="50"
                />
            </Link>
            <nav>
                <ul className="flex gap-x-5 text-[14px]">
                    {
                        navLinks.map((link) => (
                            <li key={link.href}>
                                <Link className={`${pathname === link.href ? "text-zinc-900" : "text-zinc-400"}`} href={link.href}>{link.label}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}