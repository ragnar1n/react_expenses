import React, {useState} from "react";
import './ExpenseForm.css'
import formToggle from "./NewExpense";

const ExpenseForm=(props)=>{
    const [enteredTitle,setEnteredTitle]=useState ('')
    const [enteredAmount,setEnteredAmount]=useState ('')
    const [enteredDate,setEnteredDate]=useState ('')

    const [formEdit,setFormEdit]=useState(false)
    const formToggle=()=>{
        setFormEdit(opened => !opened)
    }

    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value)

    }
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value)

    }
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value)
    }
    const submitHandler=(event)=>{
        event.preventDefault()
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
        formToggle()
    }
    return(
        <div>
        <div>
            {!formEdit && (<button onClick={formToggle} type='button'>Add new Expense</button>)}
        </div>
            {formEdit && (<form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" onChange={amountChangeHandler} min="0.01" step='0.01' value={enteredAmount}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" onChange={dateChangeHandler} min="2023-01-18" max='2025-12-31' value={enteredDate}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
                <button onClick={formToggle} type='button'>Cancel</button>
            </div>
        </form>)}
        </div>
    )
}
export default ExpenseForm