import { TbMailFast } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import Link from "next/link";

export default function SidebarHeader(props) {

    return (

        <>

            <div class="sidebar border-end pt-4 shadow" style={{ borderTopRightRadius: '10px', borderBottomRightRadius: '25px' }}>
                <div class="ms-4">
                    <a class="navbar-brand" href="#">
                        <b><span style={{ fontSize: "35px" }}><TbMailFast class="me-1" /></span><span style={{ fontSize: "25px" }}>Mail<span class="border-bottom border-warning border-2">cash</span></span></b>
                    </a>
                </div>

                <ul class="nav flex-column mt-5 gap-4 ms-3">
                    <li class="nav-item">
                        <Link class="nav-link text-decoraion-none text-dark" href="/home" style={{ display: "flex", justifyContent: "space-between" }}>
                            <button type="button" class="btn btn-md px-4 me-md-2 py-2" style={{ borderRadius: '25px', backgroundColor: `${props.sidebar_color1}`, width: "150px" }}>
                                <FaHome class="me-2" />My Home
                            </button>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-decoraion-none text-dark" href="/analytics" style={{ display: "flex", justifyContent: "space-between" }}>
                            <button type="button" class="btn btn-md px-4 me-md-2 py-2" style={{ borderRadius: '25px', backgroundColor: `${props.sidebar_color2}`,width: "150px" }}>
                                <FaChartLine class="me-2" />Analytics
                            </button>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-decoraion-none text-dark" href="/wallet" style={{ display: "flex", justifyContent: "space-between" }}>
                            <button type="button" class="btn btn-md px-4 me-md-2 py-2" style={{ borderRadius: '25px', backgroundColor: `${props.sidebar_color3}`,width: "150px" }}>
                                <FaWallet class="me-2" />My Wallet
                            </button>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-decoraion-none text-dark" href="/settings" style={{ display: "flex", justifyContent: "space-between" }}>
                            <button type="button" class="btn btn-md px-4 me-md-2 py-2" style={{ borderRadius: '25px', backgroundColor: `${props.sidebar_color4}`,width: "150px" }}>
                                <FaCog class="me-2" />Settings
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>

        </>

    )

}