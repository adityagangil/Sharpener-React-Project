import React from 'react';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      date: new Date(2023, 5, 1),
      title: 'Car Insurance',
      amount: 294.67,
    },
    {
      id: 'e2',
      date: new Date(2022, 5, 1),
      title: 'Bike Insurance',
      amount: 300,
    },
    {
      id: 'e3',
      date: new Date(2021, 5, 1),
      title: 'Scooty Insurance',
      amount: 200,
    },
    {
      id: 'e4',
      date: new Date(2020, 5, 1),
      title: 'House Insurance',
      amount: 1000,
    },
  ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Lets get started"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h2>Lets get started</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
