import BarchartIncomeAnalytic from "../charts/barchartAnalyticChart"

export default function IncomeAnalyticCard() {

    return (

        <>


            <div class="mt-4 card mb-2 border-0 shadow" style={{ borderRadius: "24px", backgroundColor: "#F8F9FA" }}>
                <div class="card-body px-5">
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3">
                        <h4>Analytics</h4>
                        <div>
                            <input type="number" class="form-control" id="yearInput" name="year" min="1900" max="2100" placeholder="Year" required/>
                        </div>
                    </div>
                    <div>
                        <BarchartIncomeAnalytic />
                    </div>
                </div>
            </div>


        </>

    )

}