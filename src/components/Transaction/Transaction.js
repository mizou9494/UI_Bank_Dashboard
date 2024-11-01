import React from 'react';
import styled from 'styled-components';

function Transaction({id, description, date, Icon, amount, positive}) {
  return (
    <Wrapper>
      <Icon size={20} />
      <h3>{description}</h3>
      {/* {positive ? <h2>it is a positive transaction</h2> : <h2>it is a negative transaction</h2>} */}
    </Wrapper>
  ) 
}

const Wrapper = styled.div`
  padding: 0 15px;
  display: flex;
`;

export default Transaction;
