"use client"
import { TbMailFast } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { FaWallet } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { useRouter } from "next/navigation"


export default function MobileSidebar(props) {

    const router = useRouter();

    const redirectToHome = () => {
        router.push("/home")
    };

    const redirectToAnalytics = () => {
        router.push("/transfer")
    };

    const redirectToWallet = () => {
        router.push("/wallet")
    };

    const redirectToSettings = () => {
        router.push("/settings")
    };

    return (

        <>

            <div class="offcanvas offcanvas-end" id="demo">
                <div class="offcanvas-header">
                    <h1 class="offcanvas-title">
                        <b><TbMailFast class="me-1" style={{ fontSize: "35px" }} />Mail<span class="border-bottom border-warning border-2">cash</span></b>
                    </h1>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="nav flex-column gap-4 mt-5">
                        <li class="nav-item">
                            <a class="nav-link text-decoraion-none text-dark" onClick={redirectToHome} data-bs-dismiss="offcanvas">
                                <div class="d-grid">
                                    <button type="button" class="btn btn-md btn-outline-dark px-4 me-md-2 py-2 btn-block text-dark" style={{ borderRadius: '25px', backgroundColor: `${props.sidebar_color1}` }}>
                                        <FaHome class="me-2" />My Home
                                    </button>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-decoraion-none text-dark" onClick={redirectToAnalytics} data-bs-dismiss="offcanvas">
                                <div class="d-grid">
                                    <button type="button" class="btn btn-md btn-outline-dark px-4 me-md-2 py-2 btn-block text-dark" style={{ borderRadius: '25px', backgroundColor: `${props.sidebar_color2}`, }}>
                                        <SiMinutemailer class="me-2" />Analytics
                                    </button>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-decoraion-none text-dark" onClick={redirectToWallet} data-bs-dismiss="offcanvas">
                                <div class="d-grid">
                                    <button type="button" class="btn btn-md btn-outline-dark px-4 me-md-2 py-2 btn-block text-dark" style={{ borderRadius: '25px', backgroundColor: `${props.sidebar_color3}` }}>
                                        <FaWallet class="me-2" />My Wallet
                                    </button>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-decoraion-none text-dark" onClick={redirectToSettings} data-bs-dismiss="offcanvas">
                                <div class="d-grid">
                                    <button type="button" class="btn btn-md btn-outline-dark px-4 me-md-2 py-2 btn-block text-dark" style={{ borderRadius: '25px', backgroundColor: `${props.sidebar_color4}`}}>
                                        <FaCog class="me-2" />Settings
                                    </button>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </>

    )

}