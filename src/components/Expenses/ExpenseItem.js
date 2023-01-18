import React, { useState } from "react";
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from "../UI/Card";
import {click} from "@testing-library/user-event/dist/click";


const ExpenseItem=(props)=>{
    const [title, setTitle]=useState(props.expenseData.title)
    const clickHandler=()=>{
        setTitle('Updated')
        console.log(title)
}
    return (
        <div className='card expense-item'>
            <ExpenseDate date={props.expenseData.date}></ExpenseDate>

            <div className='expense-item__description'>
                <h2>{props.expenseData.title}</h2>
                <div className='expense-item__price'>
                    <div>{props.expenseData.price}$</div>
                </div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </div>

    )
}

export default ExpenseItem