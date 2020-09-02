import {Loan} from "./loan"

export interface Borrower {
    id:               number;
    created:          Date;
    lastUpdate:       Date;
    first:            string;
    last:             string;
    middle?:          string;
    birthday:         Date;
    ssn:              string;
    tin?:             string;
    status:           string;
    primaryPhone:     Phone;
    secondaryPhone?:  Phone;
    primaryAddress:   Address;
    secondaryAddress?: Address;
    rating:           number;
    thumb:            string;
    photo:            string;
    loans:            Loan[];
}

export interface Address {
    address1: string;
    address2?: string;
    city:     string;
    state:    string;
    zip:      string;
}

export interface Phone {
    type:    string;
    canText: boolean;
    number:  string;
}