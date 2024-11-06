import React from 'react';

import styled from 'styled-components';
import {Balance_History} from '../../data';

import LineChart from '../LineChart/LineChart';

function BalanceHistory() {
  const [data, setData] = React.useState({
    labels: Balance_History.labels,
    datasets: [{
      label: 'Balance History',
      data: Balance_History.data,
      fill: false,
      backgroundColor: 'green',
      borderColor: 'blue',
      tension: .8,
      pointBackgroundColor: 'red',
      pointHoverBackgroundColor: 'white',
      showPoints: false,
      hoverBorderColor: 'red',
      radius: 2.2
      // indexAxis: 'y'
    }]
  });

  return (
    <>
      <SectionHead>
        <h3>Balance History</h3>
      </SectionHead>
      <Wrapper>
        <LineChart data={data} />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  padding: 0 20px 50px 20px;
`

const SectionHead = styled.div`
  //  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`

export default BalanceHistory;
