import './ExpenseDate.css'
import './ExpenseItem.css'
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import {useState} from "react";
import ExpensesFilter from "./ExpensesFilter";


const Expenses=()=>{
    const expenses=[
        {
            date: new Date(2023,0,10),
            title:'new book',
            amount:30
        },
        {
            date: new Date(2023,0,5),
            title:'new dvd',
            amount:15.90
        }
    ]
    const [filteredYear,setFilteredYear]=useState('2023')
    const filterChangeHandler=(year)=>{
        setFilteredYear(year)
    }
    expenses.map((expense)=>{
        console.log(expense)
    })
    return(
        <Card className='expenses'>
            <ExpensesFilter></ExpensesFilter>
            <ExpenseItem expenseData={expenses[0]}></ExpenseItem>
            <ExpenseItem expenseData={expenses[1]}></ExpenseItem>
        </Card>
    )
}

export default Expenses