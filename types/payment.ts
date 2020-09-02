import {Loan} from "./loan"
import {Borrower} from "./borrower"

export interface Payment {
    id:         number;
    created:    Date;
    lastUpdate: Date;
    status:     string;
    loan:       Loan;
    borrower: Borrower;
    amount:     number;
}
