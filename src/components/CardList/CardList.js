import React from 'react';

import styled from 'styled-components';

function CardList() {
  return (
    <>
      <SectionHead>Card List</SectionHead>
      <CardListWrapper>
        <ListItem>
          Item 1
        </ListItem>
        <ListItem>
          Item 2
        </ListItem>
        <ListItem>
          Item 3
        </ListItem>
      </CardListWrapper>  
    </>
  )
}

const CardListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ListItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const SectionHead = styled.h2`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`

export default CardList;
