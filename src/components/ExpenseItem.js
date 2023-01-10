import './ExpenseItem.css'

function ExpenseItem(){
    return (
        <div className='expense-item'>
            <div>Date</div>
            <div className='expense-item__description'>
                <div>Title</div>
                <div>Amount</div>
                <div className='expense-item__price'></div>
            </div>

        </div>

    )
}

export default ExpenseItem