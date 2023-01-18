import './ExpenseDate.css'
import './ExpenseItem.css'
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";


const Expenses=()=>{
    const expenses=[
        {
            date: new Date(2023,0,10),
            title:'new book',
            price:30
        },
        {
            date: new Date(2023,0,5),
            title:'new dvd',
            price:15.90
        }
    ]
    return(
        <Card className='expenses'>
            <ExpenseItem expenseData={expenses[0]}></ExpenseItem>
            <ExpenseItem expenseData={expenses[1]}></ExpenseItem>
        </Card>
    )
}

export default Expenses