import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "@/components/main-header-background/main-header-backgroud";
import NavLink from "@/components/nav-link/nav-link";
import logoImg from "@/assets/logo.png"
import classes from "./main-header.module.css"

export default function MainHeader() {

    return (
        <>
        <MainHeaderBackground/>
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
            {/* <img src={logoImg.src} alt="Logo" /> */}
            <Image src={logoImg} alt="Logo" priority />
            NextLevel Food
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals">Browse Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">Foodies Community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}