import { CiMobile3 } from "react-icons/ci";
import { MdCurrencyExchange } from "react-icons/md";

export default function FeaturesHero() {

    return (

        <>

            <div class="container">

                <div class="px-4 py-5 my-5 text-center">
                    <h2 class="display-3">
                        Feel the best experince<br /> with our features
                    </h2>
                    <div class=" mx-auto mt-5">

                        <div class="card mb-4 border-0 text-start" style={{ borderRadius: "24px", backgroundColor: "#FFFFFF" }}>
                            <div class="card-body px-4 py-4">
                                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                                    <div class="col-10 col-sm-8 col-lg-6">
                                        <img src="./hero2.svg" class="d-block mx-lg-auto img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy" style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% " }} />
                                    </div>
                                    <div class="col-lg-6">
                                        <span class=" bg-warning p-3" style={{ borderRadius: "50px" }}>
                                            <MdCurrencyExchange style={{ fontSize: "20px" }} />
                                        </span>
                                        <h2 class="display-6 lh-1 mb-3 mt-5 mb-4">Free transfer anywhere around the world</h2>
                                        <p class="card-text text-secondary">
                                            Create a custom card that reflects your uinque style and personality. Choose from a range of colors, patterns, and designs to customize the look of your card.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-4 mb-3">
                                <div class="card border-0 text-start bg-light" style={{ borderRadius: "24px", }}>
                                    <div class="card-body px-4 pt-5">
                                        <span class=" bg-warning p-3" style={{ borderRadius: "50px" }}>
                                            <MdCurrencyExchange style={{ fontSize: "20px" }} />
                                        </span>
                                        <h2 class="display-6 lh-1 mt-5">Hold money in 30+ currencies</h2>
                                    </div>

                                    <img src="./frame1.png" />
                                </div>
                            </div>

                            <div class="col-sm-4 mb-3">
                                <div class="card border-0 text-start bg-light" style={{ borderRadius: "24px", }}>
                                    <div class="card-body px-4 pt-5 mb-3">
                                        <span class=" bg-warning p-3" style={{ borderRadius: "50px" }}>
                                            <MdCurrencyExchange style={{ fontSize: "20px" }} />
                                        </span>
                                        <h2 class="display-6 lh-1 mt-5">Wallet as a service</h2>
                                    </div>

                                    <img src="./frame3.png" class="px-3" />

                                </div>
                            </div>

                            <div class="col-sm-4 ">
                                <div class="card border-0 text-start bg-dark" style={{ borderRadius: "24px",height:"358px" }}>
                                    <img class="card-img-top" src="./Layer_1.png" alt="Card image"/>
                                    <div class="card-img-overlay px-4 pt-5 mb-5">
                                        <h2 class="display-6 lh-1 mt-5 text-white">Check our other product features</h2>
                                        <button type="button" class="btn btn-md px-4 me-md-2 py-2 mt-4 mb-5" style={{ borderRadius: '25px', backgroundColor: '#FFDD33' }}>
                                            Open Account
                                        </button>
                                        <br />
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </>

    )

}