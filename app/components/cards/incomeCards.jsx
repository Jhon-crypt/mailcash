import { HiOutlineBanknotes } from "react-icons/hi2";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";


export default function IncomeCards() {

    return (

        <>
            <div class="row">
                <div class="col-sm-4">
                    <div class="card mb-2 border-0 shadow" style={{ borderRadius: "24px", backgroundColor: "#F8F9FA" }}>
                        <div class="card-body px-5">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                    <div class="bg-warning-subtle p-3 rounded">
                                        <HiOutlineBanknotes class="text-warning" style={{ fontSize: "40px" }} />
                                    </div>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <div class="row row-cols-1" style={{ fontSize: "20px" }}>
                                        <div class="col">
                                            <span class="text-muted">Balance</span>
                                        </div>
                                        <div class="col">
                                            <h6 style={{ fontSize: "25px" }}>$50,000</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-4">
                    <div class="card mb-2 border-0 shadow" style={{ borderRadius: "24px", backgroundColor: "#F8F9FA" }}>
                        <div class="card-body px-5">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                    <div class="bg-warning-subtle p-3 rounded">
                                        <FaMoneyBillTransfer class="text-warning" style={{ fontSize: "40px" }} />
                                    </div>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <div class="row row-cols-1" style={{ fontSize: "20px" }}>
                                        <div class="col">
                                            <span class="text-muted">Income</span>
                                        </div>
                                        <div class="col">
                                            <h6 style={{ fontSize: "25px" }}>$50,000</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-4">
                    <div class="card mb-2 border-0 shadow" style={{ borderRadius: "24px", backgroundColor: "#F8F9FA" }}>
                        <div class="card-body px-5">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                    <div class="bg-warning-subtle p-3 rounded">
                                        <FaMoneyBillTrendUp class="text-warning" style={{ fontSize: "40px" }} />
                                    </div>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <div class="row row-cols-1" style={{ fontSize: "20px" }}>
                                        <div class="col">
                                            <span class="text-muted">Outcome</span>
                                        </div>
                                        <div class="col">
                                            <h6 style={{ fontSize: "25px" }}>$50,000</h6>
                                        </div>
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