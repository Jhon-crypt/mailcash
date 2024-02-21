export default function Header() {

    return (

        <>

            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <a class="navbar-brand" href="#">Sendchi</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav mx-auto">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            <a class="nav-link" href="#">Features</a>
                            <a class="nav-link" href="#">Pricing</a>
                            <a class="nav-link disabled">Disabled</a>
                        </div>
                        <button class="btn btn-dark rounded me-2">
                            Testing
                        </button>
                        <button class="btn btn-dark rounded">
                            Testing
                        </button>
                    </div>
                </div>
            </nav>

        </>

    )

}