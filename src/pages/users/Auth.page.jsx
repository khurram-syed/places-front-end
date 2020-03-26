import React,{useState,useContext} from 'react'
import Input from '../../components/shared/FormElements/Input';
import Button from '../../components/shared/FormElements/Button';

import {VALIDATOR_REQUIRE,VALIDATOR_MINLENGTH} from '../../utils/validators'
import {useForm} from '../../components/shared/hooks/form-hook'
import './Auth.page.scss'
import Card from '../../components/shared/UIElements/Card'
import {AuthContext} from  '../../components/shared/context/Auth.context'

const AuthPage = ()=>{
    const authContext = useContext(AuthContext)
    const [isLoginMode,setIsSetLoginMode] = useState(true)
    const [formState, inputHandler,setFormData] = useForm(
        {
          email: {
            value: '',
            isValid: false
          },
          password: {
            value: '',
            isValid: false
          }
        },
        false
      );
   const swithcModeHandler=() =>{
       console.log('***isLoginMode :',isLoginMode)
       if(!isLoginMode){
           setFormData({...formState.inputs,
              name:undefined
           },formState.inputs.email.isValid && formState.inputs.password.isValid)
       }else{
         setFormData({
             ...formState.inputs,
             name: {
                value: '',
                isValid: false
              }
         },false)  
       }
       setIsSetLoginMode(!isLoginMode)
   }  
   const authSubmitHandler=(e)=>{
      e.preventDefault();
      console.log(formState.inputs)
      authContext.login()
   }
  return <Card className="authentication">
        <h2 className="authentication_header">Login Required</h2>
        <hr />
       <form className="place-form" onSubmit={authSubmitHandler}> 
            {!isLoginMode && <Input id="name" type="text" 
                    element="input"
                    onInput={inputHandler}   //<<== point to be noted.
                    validators={[VALIDATOR_REQUIRE()]} 
                    placeholder={`name`}
                    label='Name' 
                    errorText="please enter name."
                    />}
                <Input id="email" type="email" 
                    element="input"
                    onInput={inputHandler}   //<<== point to be noted.
                    validators={[VALIDATOR_REQUIRE()]} 
                    placeholder={`email`}
                    label='Email' 
                    errorText="Please enter a valid email."
                    />
            
               <Input id="password" type="password" 
                    element="input"
                    onInput={inputHandler}   //<<== point to be noted.
                    validators={[VALIDATOR_MINLENGTH(5)]} 
                    placeholder={`password`}
                    label='Password' 
                    errorText="Please enter valid password"
                    />
                    
            <Button disabled={!formState.isValid} > 
                {isLoginMode? 'LOGIN': 'SIGNUP'}
            </Button>                   
       </form>
       <div className="switchButton">
       <Button   inverse 
               onClick={swithcModeHandler}>SWITCH TO {isLoginMode?'LOGIN':'SIGNUP'}</Button>
       </div>        
     </Card>    
}
export default AuthPage