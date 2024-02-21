import { AiOutlineThunderbolt } from "react-icons/ai";

export default function Header() {

    return (

        <>

            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <b><AiOutlineThunderbolt class="me-1" style={{ color: "#FFDD33" }}/>Sendchi</b>
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
                        <button class="btn btn-white rounded me-2">
                            Login
                        </button>
                        <button class="btn btn-dark px-4" style={{ borderRadius: "20px" }}>
                            Open Account
                        </button>
                    </div>
                </div>
            </nav>

        </>

    )

}