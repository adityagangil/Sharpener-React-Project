import React from 'react';
import ExpenseItem from './components/ExpenseItem';


function App() {
  const expenses = [
    {
      id: 'e1',
      date: new Date(2023, 5, 1),
      title: 'Car Insurance',
      amount: 294.67,
      location: 'Auto Insurance Co.'
    },
    {
      id: 'e2',
      date: new Date(2022, 5, 1),
      title: 'Bike Insurance',
      amount: 300,
      location: 'Bike Insurance Co.'
    },
    {
      id: 'e3',
      date: new Date(2021, 5, 1),
      title: 'Scooty Insurance',
      amount: 200,
      location: 'Scooty Insurance Co.'
    },
    {
      id: 'e4',
      date: new Date(2020, 5, 1),
      title: 'House Insurance',
      amount: 1000,
      location: 'House Insurance Co.'
    },
  ];


  return (
    <div>
      <h2>Lets get started</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        location={expenses[0].location}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        location={expenses[1].location}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        location={expenses[2].location}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
        location={expenses[3].location}
      ></ExpenseItem>
    </div>
  );
}

export default App;
