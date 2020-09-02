import {Payment} from "./payment"
import {Borrower} from "./borrower"

export interface Loan {
    id:             number;
    created:        Date;
    lastUpdate:     Date;
    status:         string;
    borrower:       Borrower;
    payments:       Payment[];
    amount:         number;
    tip:            number;
    termExpiration: Date;
    description?:   string;
}
