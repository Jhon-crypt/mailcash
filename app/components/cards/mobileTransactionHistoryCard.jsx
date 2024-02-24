export default function MobileTransactionHistoryCard() {

    return (

        <>

            <div class="mt-4 card mb-2 border-0 shadow" style={{ borderRadius: "24px", backgroundColor: "#F8F9FA" }}>
                <div class="card-body">
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3">
                        <h4>Transactions</h4>
                        <div>
                            <select class="form-select">
                                <option>Jan</option>
                                <option>Feb</option>
                                <option>Mar</option>
                                <option>Apr</option>
                            </select>
                        </div>
                    </div>
                    <div class="mt-3">
                        <div class="d-grid">
                            <button type="button" class="btn btn-md px-4 me-md-2 py-2 btn-block text-dark" style={{ borderRadius: '25px', backgroundColor: '#FFDD33', }}>
                                View Transactions
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}