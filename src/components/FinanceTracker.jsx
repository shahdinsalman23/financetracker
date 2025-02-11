import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FaRegEdit } from 'react-icons/fa'

const FinanceTracker = ({ handleShow, transactions }) => {

    const totalIncome = transactions.reduce(((acc, transaction) => {
        return  transaction.type === 'income' ? acc + Number(transaction.amount) : acc;
    }), 0)

    const totalExpense = transactions.reduce(((acc, transaction) => {
        return  transaction.type === 'expense' ? acc + Number(transaction.amount) : acc;
    }), 0)

    const totalBalance = totalIncome - totalExpense

    console.log(totalIncome)

    return (
        <>
            <section className="financetracker-sec">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="financetrackerbox">
                                <Row>
                                    <Col lg={12}>
                                        <div className="financetracker-head">
                                            <h1>Finance Tracker App</h1>
                                            <Button className='financeformedit' onClick={handleShow}>Add Transaction <FaRegEdit /></Button>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className="financetracker-data">
                                            {transactions.map((data, index) => (
                                                <div key={index} className="financetracker-item">
                                                    <h4>{data.amount}</h4>
                                                    <h5 className={`${data.type === 'income' ? 'text-green' : 'text-red'}`}>{data.type}</h5>
                                                </div>
                                            ))}
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="total-transaction">
                                <h4>Total Income: {totalIncome}</h4>
                                <h4>Total Expenses: {totalExpense}</h4>
                                <h4>Balance: {totalBalance}</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default FinanceTracker