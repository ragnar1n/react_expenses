import logo from './logo.svg';
import './App.css';


import ExpenseItem from "./components/ExpenseItem";

function App() {
    const expenses=[
        {
            date: new Date(2023,0,10),
            title:'new book',
            price:30
        },
        {
            date: new Date(2023,0,5),
            title:'new dvd',
            price:15
        }
    ]


  return (
    <div className="App">
      <ExpenseItem expenseData={expenses[0]}></ExpenseItem>
      <ExpenseItem expenseData={expenses[1]}></ExpenseItem>

    </div>
  );
}

export default App;
