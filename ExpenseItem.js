import React, {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    const [amount, setAmount] = useState(props.amount);
    // console.log("ExpenseItem Evaluated by React");

    const clickHandler = () => {
        setTitle('Updated');
        console.log(title);
    }
    const amountHandler = () => {
        setAmount('100$');
        console.log(amount);
    }
    
    // const deleteHandler = () => {
    //     console.log('Deleted!!!!')
    // }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className = 'expense-item__description'>
                <h2>{props.title}</h2>
                {/* <button onClick={deleteHandler}>Delete Expense</button> */}
                <button onClick={amountHandler}>Change Amount</button>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
