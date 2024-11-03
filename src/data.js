import { DollarSign, Facebook } from "react-feather"

export const Data = {
    labels: ['medium', 'small', 'large'],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
        {
          label: 'Popularity of colours',
          data: [55, 23, 96],
          // you can set indiviual colors for each bar
          backgroundColor: [
            'rgba(255, 255, 255, 0.6)',
            'rgba(255, 255, 255, 0.6)',
            'rgba(255, 255, 255, 0.6)'
          ],
          borderWidth: 1,
        }
    ]
}

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
        positive: "true"
    },
    {
        id: 2,
        Icon: DollarSign,
        iconType: "DollarSign",
        description: 'Jimie Wilson',
        date: "02 January 2021",
        amount: '$5,840',
        positive: "true"
    },
    {
        id: 3,
        Icon: Facebook,
        iconType: "Facebook",
        description: 'Deposit Paypal',
        date: "25 January 2021",
        amount: '$2500',
        positive: "false"
    }
]