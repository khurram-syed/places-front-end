import {useReducer,useCallback} from 'react'
const formReducer = (state,action)=>{
    switch(action.type){
    
     case 'INPUT_CHANGE':
        let formIsValid=true;
        for(const inputId in state.inputs){
           if(inputId===action.inputId){
              formIsValid = formIsValid && action.isValid
           }else{
              formIsValid = formIsValid && state.inputs[inputId].isValid;
           }
        }   
     return { ...state,
         inputs:{...state.inputs,
            [action.inputId]:{value:action.value, isValid:action.isValid }  
         },
         isValid: formIsValid              
        }
     default :
         return state;
   }
  } 

  export const useForm =(intialInputs, intialValidity)=>{
    const [formState,dispatch] = useReducer(formReducer,{
        inputs:intialInputs,
        isValid:intialValidity
     })

 /* This will use the callback to get the useEffect changes in input and assign the 
      back here from  
   */
     const inputHandler=useCallback((id,value,isValid)=>{
        dispatch({
           type:'INPUT_CHANGE',
           value: value,
           isValid:isValid,
           inputId: id
        })
     },[])
   return [formState,inputHandler]
  }