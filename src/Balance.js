import React from 'react'
import {useDispatch} from "react-redux"
import { bindActionCreators } from 'redux'
import { actionCreator } from './state/index'

const Balance = () => {
  const dispatch = useDispatch()
  const actions = bindActionCreators(actionCreator,dispatch)
  return (
    <div>
     <h1>Deposit or Withdraw</h1>
     <button type="button" className="btn btn-primary" onClick={()=>{actions.withdrawMoney(100)}}>-</button>
        Amount
     <button type="button" className="btn btn-primary" onClick={()=>{actions.depositMoney(100)}}>+</button>
    </div>
  )
}

export default Balance
