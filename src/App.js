import React, {useState} from "react";
import './App.css';

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expensesD=[
    {
        id: 'e1',
        date: new Date(2023,0,10),
        title:'new book',
        amount:30
    },
    {
        id:'e2',
        date: new Date(2024,0,5),
        title:'new dvd',
        amount:15.90
    }
]

const App = ()=> {

    const [expenses,setExpenses]=useState(expensesD)
    const addExpensehandler=(expense)=>{
        console.log('In App.js')
        console.log(expense)
        setExpenses((previousExpenses)=>{
            return [expense,...previousExpenses]
        })
    }
  return (
    <div className="App">
        <NewExpense onAddExpense={addExpensehandler}></NewExpense>
        <Expenses expenses={expenses}></Expenses>

    </div>
  );
}

export default App;
