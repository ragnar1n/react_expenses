import './ExpenseItem.css'

function ExpenseItem(props){
    const month=props.expenseData.date.toLocaleString('en-US',{month:'long'})
    const day=props.expenseData.date.toLocaleString('en-US',{day:'2-digit'})
    const year=props.expenseData.date.getFullYear()

    return (
        <div className='expense-item'>
            <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>

            <div>{props.expenseData.date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{props.expenseData.title}</h2>
                <div className='expense-item__price'>
                    <div>{props.expenseData.price}$</div>
                </div>
            </div>

        </div>

    )
}

export default ExpenseItem