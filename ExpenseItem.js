import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

    const clickHandler = () => {
        console.log('Clicked!!!!')
    }
    const deleteHandler = () => {
        console.log('Deleted!!!!')
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div classname = 'expense-item__description'>
                <h2>{props.title}</h2>
                <button onClick={deleteHandler}>Delete Expense</button>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
