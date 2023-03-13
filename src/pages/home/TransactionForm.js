import React from 'react';
import { useState } from 'react';

function TransactionForm() {
    const [name, setName] = useState("")
    const [amount, setAmout] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({name, amount});
        setName("")
        setAmout("")
    }
    return (
        <>
            <h3>Add a transaction </h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor='transactionName'>Transaction Name:</label>
                <input
                    type="text" 
                    id='transactionName'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label htmlFor='amount'>Amout($):</label>
                <input 
                    type="number"
                    id='amount'
                    value={amount}
                    onChange={(e) => setAmout(e.target.value)}
                    required
                    min={1}
                />
                <button>Add Transaction</button>
            </form>
        </>
    );
}

export default TransactionForm;