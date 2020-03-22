import React,{useReducer} from 'react'
import './Input.scss'
import {validate} from '../../../utils/validators'
import { useEffect } from 'react'

const inputReducer = (state, action)=>{
    switch(action.type){
        case 'CHANGE':
               return {
                   ...state,
                   value: action.val,
                   isValid: validate(action.val,action.validators)
               }
        case 'TOUCH':
               return {
                   ...state,
                   isTouched: true
               }       
        default : return state;
    }
}
const Input = props =>{
  const [inputState,dispatch] = useReducer(inputReducer,{
            value:props.value || '',
            isValid: props.valid || false,
            isTouched: false
  }) 
  //const {id,element,type,label,validators,errorText,onInput}=props;
  const {id,element,type,onInput}=props;
  const {value,isValid} = inputState 
  
  useEffect(() => {
    onInput(id, value, isValid)
  }, [id, value, isValid, onInput]);


  const changeHandler = (event)=>{
     dispatch({
         type: 'CHANGE',
         val: event.target.value,
         validators : props.validators
     })
  }
  const touchHandler = ()=>{
    dispatch({
        type : 'TOUCH'
    })
  }
  
  const elementToRender= (element==='input') 
                  ?(  <input
                    id={id}
                    type={type}
                    placeholder={props.placeholder}
                    onChange={changeHandler}
                    onBlur={touchHandler}
                    value={inputState.value}
                  />
                ) : (
                  <textarea
                    id={id}
                    rows={props.rows || 3}
                    onChange={changeHandler}
                    onBlur={touchHandler}
                    value={inputState.value}
                  /> )

   return(<div className={`form-control {!inputState.isValid && inputStateisTouched && 
                         'form-control--invalid'}`}>
       <label htmlFor={props.id}>{props.label}</label>
       {elementToRender}
       {!inputState.isValid && inputState.isTouched && (<p>{props.errorText}</p>)} 
   </div>) 
}
export default Input