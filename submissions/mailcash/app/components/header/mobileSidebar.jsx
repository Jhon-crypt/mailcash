import { TbMailFast } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import Link from "next/link";

export default function MobileSidebar(props) {

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
                    <ul class="nav flex-column gap-4">
                        <li class="nav-item">
                            <Link class="nav-link text-decoraion-none text-dark" href="/home">
                                <div class="d-grid">
                                    <button type="button" class="btn btn-md btn-outline-dark px-4 me-md-2 py-2 btn-block text-dark" style={{ borderRadius: '25px', backgroundColor: `${props.sidebar_color1}` }}>
                                        <FaHome class="me-2" />My Home
                                    </button>
                                </div>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-decoraion-none text-dark" href="/analytics">
                                <div class="d-grid">
                                    <button type="button" class="btn btn-md btn-outline-dark px-4 me-md-2 py-2 btn-block text-dark" style={{ borderRadius: '25px', backgroundColor: `${props.sidebar_color2}`, }}>
                                        <FaChartLine class="me-2" />Analytics
                                    </button>
                                </div>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-decoraion-none text-dark" href="/wallet">
                                <div class="d-grid">
                                    <button type="button" class="btn btn-md btn-outline-dark px-4 me-md-2 py-2 btn-block text-dark" style={{ borderRadius: '25px', backgroundColor: `${props.sidebar_color3}` }}>
                                        <FaWallet class="me-2" />My Wallet
                                    </button>
                                </div>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-decoraion-none text-dark" href="/settings">
                                <div class="d-grid">
                                    <button type="button" class="btn btn-md btn-outline-dark px-4 me-md-2 py-2 btn-block text-dark" style={{ borderRadius: '25px', backgroundColor: `${props.sidebar_color4}`}}>
                                        <FaCog class="me-2" />Settings
                                    </button>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

        </>

    )

}