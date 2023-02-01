import './ExpenseDate.css'
import './ExpenseItem.css'
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import {useState} from "react";
import ExpensesFilter from "./ExpensesFilter";
import "../../App";
import ExpensesList from "./ExpensesList";

const Expenses=(props)=>{
    const [filteredYear,setFilteredYear]=useState('2023')
    const filterChangeHandler=(year)=>{
        setFilteredYear(year)
    }

const filteredExpenses=props.expenses.filter((expense)=>{
    return expense.date.getFullYear().toString()===filteredYear
})


    return(
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
            <ExpensesList filteredExpenses={filteredExpenses}></ExpensesList>
        </Card>
    )
}

export default Expenses