import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FinanceFormModal from './components/FinanceFormModal'
import FinanceTracker from './components/FinanceTracker';

const App = () => {

   const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      const [transactions, setTransactions] = useState([]);


      const addTransaction = (transaction) => {
        setTransactions([...transactions, transaction]);
    };

  return (
    <>
    <FinanceFormModal  handleClose={handleClose} show={show} addTransaction={addTransaction} />
    <FinanceTracker handleShow={handleShow}  transactions={transactions} />
    </>
  )
}

export default App