export default function IntroHero() {

    return (

        <>

            <div class="container col-xxl-8 px-4 mt-3">
                <div class="row flex-lg-row-reverse align-items-center justify-content-center me-5 ms-0">
                    <div class="col-lg-6">
                        <h1 class="display-1 mb-3">Control your financial future easily</h1>
                        <p class="lead" style={{ color: "#B5BCC8" }}>From easy money management, to financial goals and investments. Open your account in a Flash</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start mt-5">
                            <button type="button" class="btn btn-md px-4 me-md-2 py-2" style={{ borderRadius: '25px', backgroundColor: '#FFDD33' }}>
                                Open Account
                            </button>
                            <button type="button" class="btn btn-outline-secondary px-4 py-2" style={{ borderRadius: '25px'}}>Login Now</button>
                        </div>
                    </div>
                    <div class="col-10 col-sm-8 col-lg-6">
                        <img src="/hero.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes"  style={{ width: "100%", height: "800%" }} loading="lazy"/>
                    </div>
                </div>
            </div>

        </>

    )

}