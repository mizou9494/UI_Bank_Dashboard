import React from 'react';

import styled from 'styled-components';

import { Data } from '../../data';
import { ExpenseData } from '../../data';

import PolarChart from '../PolarChart/PolarChart';
import PieChart from '../PieChart/PieChart';

function ExpenseStats() {
  const [chartData, setChartData] = React.useState({
    labels: ExpenseData.labels.map((label) => label), 
    datasets: [
      {
        label: ExpenseData.datasets[0].label,
        data: ExpenseData.datasets[0].data,
        backgroundColor: ExpenseData.datasets[0].backgroundColor.map((color) => color),
        borderColor: "black",
        borderWidth: 1,
        barThickness: 8,
        borderRadius: 5,
        spacing: 10,
        borderAlign: 'center'
      }
    ]
  });

  const [expensesInfo1, setExpensesInfo1] = React.useState({
    label: ExpenseData.datasets[0].label,
    value: ExpenseData.datasets[0].data[0].toString()
  });
  
  const [expensesInfo2, setExpensesInfo2] = React.useState({
    label: ExpenseData.datasets[1].label,
    value: ExpenseData.datasets[0].data[1].toString()
  });
  const [expensesInfo3, setExpensesInfo3] = React.useState({
    label: ExpenseData.datasets[2].label,
    value: ExpenseData.datasets[0].data[2].toString()
  });
  const [expensesInfo4, setExpensesInfo4] = React.useState({
    label: ExpenseData.datasets[3].label,
    value: ExpenseData.datasets[0].data[3].toString()
  });

  return (
    <>
      <SectionHead>
        <h3>Expense StatisticsS</h3>
      </SectionHead>
      <Wrapper>
        <Info1>
          <div>{expensesInfo1.label}</div>
          <div>{expensesInfo1.value}%</div>
        </Info1>
        <Info2>
          <div>{expensesInfo2.label}</div>
          <div>{expensesInfo2.value}%</div>
        </Info2>
        <Info3>
          <div>{expensesInfo3.label}</div>
          <div>{expensesInfo3.value}%</div>
        </Info3>
        <Info4>
          <div>{expensesInfo4.label}</div>
          <div>{expensesInfo4.value}%</div>
        </Info4>
        <PieChart chartData={chartData} />
        {/* <PolarChart /> */}
      </Wrapper>
    </>  
  )
}

const Wrapper = styled.div`
  position: relative;
`

const SectionHead = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const Info1 = styled.div`
  // display: flex;
  // flex-direction: column;
  position: absolute;
  top: 20%;
  left: 55%;
  font-size: 1.1rem;
  font-weight: 800;
  color: white;
  `
  const Info2 = styled.div`
  // display: flex;
  // flex-direction: column;
  position: absolute;
  top: 60%;
  left: 58%;
  font-size: 1.1rem;
  font-weight: 800;
  color: white;
  `
  const Info3 = styled.div`
  // display: flex;
  // flex-direction: column;
  position: absolute;
  top: 50%;
  left: 5%;
  font-size: 1.1rem;
  font-weight: 800;
  color: white;
  `
  const Info4 = styled.div`
  // display: flex;
  // flex-direction: column;
  position: absolute;
  top: 12%;
  left: 25%;
  font-size: 1.1rem;
  font-weight: 800;
  color: white;
`

export default ExpenseStats;
