import React from 'react';

import { useLocation } from 'react-router-dom';

import styled from 'styled-components';

import CardSection from '../CardSection';

// import { 
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselPrevious,
//   CarouselNext, 
// } from '../ui/carousel';
import useEmblaCarousel from 'embla-carousel-react'

import Transaction from '../Transaction/Transaction';
import { transaction_Info } from '../../data';

function chunkArray(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}
function RecentTransaction() {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  React.useEffect(() => {
    if (emblaApi) {      
      console.log(emblaApi.slideNodes())
    }
  }, [emblaApi])

  const location = useLocation();

  const transactionChunks = chunkArray(transaction_Info, 5);
  console.log(transactionChunks)

  return (
    <>
      {location.pathname === "/Transactions" 
        ? <CardSection buttonName="Add Card" /> 
        : null
      }
      <SectionHead>
        <h3>Recent Transaction</h3>
      </SectionHead>
      {location.pathname === "/" ? (
        <TransactionsGroup>
          {transaction_Info.slice(0, 4).map(({id, description, date, amount, Icon, iconType, positive}) => (
            <Transaction
              key={id}
              description={description}
              date={date}
              amount={amount}
              positive={positive}
              Icon={Icon}
              iconType={iconType}
              />
            ))}
        </TransactionsGroup>
     ) : (
       <TransactionsPageGroup>
          <Embla ref={emblaRef}>
            <Embla__container>
              {transactionChunks.map((chunk, index) => (
                <Embla__slide key={index}> 
                  {chunk.map(({id, description, date, amount, Icon, DirectionIcon, iconType, positive}) => (
                      <Transaction
                        key={id}
                        description={description}
                        date={date}
                        amount={amount}
                        positive={positive}
                        Icon={Icon}
                        DirectionIcon={DirectionIcon}
                        iconType={iconType}
                      />
                    ))}
                </Embla__slide>
              ))}
            </Embla__container>
          </Embla>
          {/* <Carousel 
            opts={{
              align: 'start',
              axis: "x"
            }}  
            orientation="horizontal"
            className="w-full p-8">
            <CarouselContent>
              {transactionChunks.map((chunk, index) => (
                <CarouselItem key={index}>
                  {chunk.map(({id, description, date, amount, Icon, DirectionIcon, iconType, positive}) => (
                    <Transaction
                      key={id}
                      description={description}
                      date={date}
                      amount={amount}
                      positive={positive}
                      Icon={Icon}
                      DirectionIcon={DirectionIcon}
                      iconType={iconType}
                    />
                  ))}
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> 
          </Carousel> */}
        </TransactionsPageGroup>
     )}
    </>
  ) 
}

const Embla = styled.div`
  overflow: hidden;
`;

const Embla__container = styled.div`
  display: flex;
`;

const Embla__slide = styled.div`
  flex: 0 0 100%;
  min-width: 0;
  // background-color: red;
  // height: 100px;
  // display: grid;
  // place-items: center;
`;


const SectionHead = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const TransactionsGroup = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
`;

const TransactionsPageGroup = styled(TransactionsGroup)`
  display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  // grid-auto-flow: column;
  // grid-template-rows: repeat(3, 1fr);
  overflow: hidden;
  gap: 10px;
`

export default RecentTransaction;