"use client"
import { TbMailFast } from "react-icons/tb";
import SidebarHeader from "../components/header/sidebarHeader";
import { isMobile } from 'react-device-detect';
import { FaCaretRight } from "react-icons/fa";
import MobileSidebar from "../components/header/mobileSidebar";
import { useEffect, useState } from "react"

export default function MyWallet() {

    const [Mobile, setIsMobile] = useState(false);

    useEffect(() => {

        if (isMobile) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }

    }, []);

    

    return (

        <>

            <section class="layout">
                <SidebarHeader
                    sidebar_color1=""
                    sidebar_color2=""
                    sidebar_color3="#FFDD33"
                    sidebar_color4=""
                />
                <div class="layout-body">
                    <div class="container pt-5 mt-5">
                        <h1>My Mail Wallet</h1>
                    </div>
                </div>
            </section>

        </>

    )

}