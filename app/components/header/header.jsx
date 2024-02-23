import { TbMailFast } from "react-icons/tb";
import Link from "next/link";

export default function Header() {

    return (

        <>

            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <b><TbMailFast class="me-1" style={{ fontSize: "30px" }}/>Mail<span class="border-bottom border-warning border-2">cash</span></b>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav mx-auto gap-5">
                            <a class="nav-link" href="#">About</a>
                            <a class="nav-link" href="#">Features</a>
                            <a class="nav-link" href="#">Support</a>
                            <a class="nav-link" href="#">Features</a>
                            
                        </div> 
                        <Link href="/home" class="btn btn-white rounded me-2 text-decoration-none">
                            Login
                        </Link>
                        <Link href='/home' class="btn btn-dark px-4 text-decoration-none" style={{ borderRadius: "20px" }}>
                            Open Account
                        </Link>
                    </div>
                </div>
            </nav>

        </>

    )

}