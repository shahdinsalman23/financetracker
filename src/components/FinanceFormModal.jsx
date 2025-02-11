import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'

const FinanceFormModal = ({ handleClose, show, addTransaction }) => {
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState("income");

    const handlefunction = (e) => {
        e.preventDefault();
        const transaction = { amount, type };
        addTransaction(transaction)
        setAmount(0); 
        setType("income");
        handleClose(); 
    }


    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Finance Tracker form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="finance-tracker-form">
                        <form onSubmit={handlefunction}>
                            <div className="forminput-field">
                                <input type="number" value={amount}  onChange={(e) => setAmount(e.target.value)} name="" id="" />
                            </div>
                            <select name="" value={type} onChange={(e) => setType(e.target.value)} id="">
                                <option value="income">Income</option>
                                <option value="expense">Expense</option>
                            </select>
                            <button type='submit'>Submit</button>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    )
}

export default FinanceFormModal