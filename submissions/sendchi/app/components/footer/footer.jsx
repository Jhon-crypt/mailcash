import { FaRegNewspaper } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";

export default function Footer() {

    return (

        <>

            <div class="container mt-3 mb-2">

                <div class="px-4 py-5 text-center">
                    <h2 class="display-2">
                        Send Smart. Achieve More
                    </h2>
                </div>

                <div class="card bg-dark" style={{ borderRadius: "24px" }}>

                    <div class="card-body px-5 py-5">
                        <span class=" bg-warning p-3" style={{ borderRadius: "50px" }}>
                            <FaRegNewspaper style={{ fontSize: "20px" }} />
                        </span>


                        <div class="text-light d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 mt-5">
                            <div class="">
                                <h1 class="display-4 lh-1 mb-4">Keep up with the <br />latest</h1>
                                <p>
                                    Join our newsletter to stay upto date on features and realeases.
                                </p>
                            </div>
                            <div class="">
                                <p>Stay up to date</p>
                                <div class="input-group mb-3 input-group-lg">
                                    <input type="text" class="form-control" placeholder="Search" style={{ borderRadius: "50px" }} />
                                    <button class="ms-2 btn" type="submit" style={{ borderRadius: "50px", backgroundColor: "#FFC107" }}>Subscribe</button>
                                </div>

                                <p class="mt-2">
                                    <span class="me-2 text-secondary">By subscribing you agree to our</span> privacy policy
                                </p>
                            </div>
                        </div>
                        <br />

                        <hr style={{ color: "white" }} />

                        <div class="container">
                            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 text-light">
                                <p class="col-md-4 mb-0"> 2023 SendChi, Inc</p>

                                <a href="/" class="text-light col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto text-decoration-none">
                                    <b><AiOutlineThunderbolt class="me-1" style={{ color: "#FFDD33" }} />Sendchi</b>
                                </a>

                                <ul class="nav col-md-4 justify-content-end">
                                    <li class="nav-item"><a href="#" class="nav-link px-2">Home</a></li>
                                    <li class="nav-item"><a href="#" class="nav-link px-2">Features</a></li>
                                    <li class="nav-item"><a href="#" class="nav-link px-2">Pricing</a></li>
                                    <li class="nav-item"><a href="#" class="nav-link px-2">FAQs</a></li>
                                    <li class="nav-item"><a href="#" class="nav-link px-2">About</a></li>
                                </ul>
                            </footer>
                        </div>

                    </div>
                </div>

            </div>

        </>

    )

}