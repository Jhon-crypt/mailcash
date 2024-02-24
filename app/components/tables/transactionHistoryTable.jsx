import { TbMailFast } from "react-icons/tb";

export default function TransactionHistoryTable() {

    return (

        <>

            <div class="table-responsive">
                <table class="table table-borderless" style={{ borderRadius: "10px", overflow: "hidden", padding: "10px" }}>
                    <thead>
                        <tr>
                            <th class="text-muted">Name</th>
                            <th class="text-muted">Date</th>
                            <th class="text-muted">Amount</th>
                            <th class="text-muted">Status</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                            <td>
                                <span class="badge bg-warning me-2">
                                    <TbMailFast style={{ fontSize: "25px" }} />
                                </span>
                                test@mailcash
                            </td>
                            <td>
                                Sat,20 Apr 2020
                            </td>
                            <td>
                                $80.00
                            </td>
                            <td>
                                <span class="badge bg-success">Success</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span class="badge bg-warning me-2">
                                    <TbMailFast style={{ fontSize: "25px" }} />
                                </span>
                                test@mailcash
                            </td>
                            <td>
                                Sat,20 Apr 2020
                            </td>
                            <td>
                                $80.00
                            </td>
                            <td>
                                <span class="badge bg-success">Success</span>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <span class="badge bg-warning me-2">
                                    <TbMailFast style={{ fontSize: "25px" }} />
                                </span>
                                test@mailcash
                            </td>
                            <td>
                                Sat,20 Apr 2020
                            </td>
                            <td>
                                $80.00
                            </td>
                            <td>
                                <span class="badge bg-success">Success</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span class="badge bg-warning me-2">
                                    <TbMailFast style={{ fontSize: "25px" }} />
                                </span>
                                test@mailcash
                            </td>
                            <td>
                                Sat,20 Apr 2020
                            </td>
                            <td>
                                $80.00
                            </td>
                            <td>
                                <span class="badge bg-success">Success</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span class="badge bg-warning me-2">
                                    <TbMailFast style={{ fontSize: "25px" }} />
                                </span>
                                test@mailcash
                            </td>
                            <td>
                                Sat,20 Apr 2020
                            </td>
                            <td>
                                $80.00
                            </td>
                            <td>
                                <span class="badge bg-success">Success</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span class="badge bg-warning me-2">
                                    <TbMailFast style={{ fontSize: "25px" }} />
                                </span>
                                test@mailcash
                            </td>
                            <td>
                                Sat,20 Apr 2020
                            </td>
                            <td>
                                $80.00
                            </td>
                            <td>
                                <span class="badge bg-success">Success</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span class="badge bg-warning me-2">
                                    <TbMailFast style={{ fontSize: "25px" }} />
                                </span>
                                test@mailcash
                            </td>
                            <td>
                                Sat,20 Apr 2020
                            </td>
                            <td>
                                $80.00
                            </td>
                            <td>
                                <span class="badge bg-success">Success</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>

    )

}