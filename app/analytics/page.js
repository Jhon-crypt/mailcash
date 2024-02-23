"use client"
import { TbMailFast } from "react-icons/tb";
import SidebarHeader from "../components/header/sidebarHeader";
import { isMobile } from 'react-device-detect';
import { FaCaretRight } from "react-icons/fa";
import MobileSidebar from "../components/header/mobileSidebar";
import { useEffect, useState } from "react"

export default function Analytics() {

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
            {Mobile ?
                (
                    <>
                        <section class="layout">

                            <div class="layout-body p-3">

                                <nav class="navbar navbar-expand-sm fixed border-bottom">
                                    <div class="container">
                                        <a class="navbar-brand text-decoration-none text-dark">
                                            <b><TbMailFast class="me-1" style={{ fontSize: "30px" }} />Mail<span class="border-bottom border-warning border-2">cash</span></b>
                                        </a>
                                        <div class="d-flex align-items-center bg-light p-2" style={{ borderRadius: '25px', backgroundColor: "#F8F9fa" }} data-bs-toggle="offcanvas" data-bs-target="#demo">
                                            <div class="flex-shrink-0">
                                                <img src="./avatar.png" class="rounded-circle" height={35} alt="..." />
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                Oladele <FaCaretRight />
                                            </div>
                                        </div>
                                    </div>
                                </nav>


                                <div class="container pt-5 mt-5">

                                </div>
                            </div>
                        </section>
                        <MobileSidebar
                            sidebar_color1="white"
                            sidebar_color2="#FFDD33"
                            sidebar_color3="white"
                            sidebar_color4="white"
                        />
                    </>
                ) : (
                    <>

                        <section class="layout">

                            <SidebarHeader
                                sidebar_color1=""
                                sidebar_color2="#FFDD33"
                                sidebar_color3=""
                                sidebar_color4=""
                            />

                            <div class="layout-body-browser p-3">

                                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                    <h6 class="display-6">
                                        Analytics
                                    </h6>
                                    <div class="d-flex align-items-center bg-light p-2" style={{ borderRadius: '25px', backgroundColor: "#F8F9fa" }}>
                                        <div class="flex-shrink-0">
                                            <img src="./avatar.png" class="rounded-circle" height={35} alt="..." />
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            Oladele
                                        </div>
                                    </div>
                                </div>

                                <div class="container pt-5 mt-5">

                                </div>
                            </div>
                        </section>

                    </>
                )

            }
        </>
    )

}