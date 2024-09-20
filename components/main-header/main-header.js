import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "../main-header-background/main-header-backgroud";
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
                        <Link href="/meals">Browse Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}