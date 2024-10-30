import React from 'react';
import { card_Info } from '../../data';

import Card from '../Card/Card';

function CardSection() {
  return (
    <section>
      {card_Info.map(({id, holder_name, card_number, expiration_date, balance}) => (
        <Card 
          key={id}
          holder_name
          card_number
          expiration_date
          balance
        />
      ))}
    </section>
  )
}

export default CardSection;
