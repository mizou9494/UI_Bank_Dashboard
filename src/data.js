import { DollarSign, Facebook } from "react-feather"

export const card_Info = [
    {
        id: 1,
        holder_name: 'Abu Bakar',
        card_number: '1234 **** **** 3456',
        expiration_date: '12/25',
        balance: '$1,000'
    },
    {
        id: 2,
        holder_name: 'Bitar H',
        card_number: '0214 **** **** 9786',
        expiration_date: '02/28',
        balance: '$3,891'
    },
    {
        id: 3,
        holder_name: 'Omar Ahmed',
        card_number: '1084 **** **** 3466',
        expiration_date: '08/24',
        balance: '$10,391'
    },
]

export const transaction_Info = [
    {
        id: 1,
        Icon: DollarSign,
        iconType: "DollarSign",
        description: 'Deposit from my',
        date: "28 January 2021",
        amount: '$200',
        positive: true
    },
    {
        id: 2,
        Icon: DollarSign,
        iconType: "DollarSign",
        description: 'Jimie Wilson',
        date: "02 January 2021",
        amount: '$5,840',
        positive: true
    },
    {
        id: 3,
        Icon: Facebook,
        iconType: "Facebook",
        description: 'Deposit Paypal',
        date: "25 January 2021",
        amount: '$2500',
        positive: false
    }
]