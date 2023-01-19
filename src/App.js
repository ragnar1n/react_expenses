import './App.css';

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = ()=> {
    const addExpensehandler=(expense)=>{
        console.log('In App.js')
        console.log(expense)
    }
  return (
    <div className="App">
        <NewExpense onAddExpense={addExpensehandler}></NewExpense>
        <Expenses></Expenses>

    </div>
  );
}

export default App;
