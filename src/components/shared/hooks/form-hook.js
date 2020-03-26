import {useReducer,useCallback} from 'react'
const formReducer = (state,action)=>{
    switch(action.type){
     case 'INPUT_CHANGE':
   
        let formIsValid=true;
        // console.log('***formReducer - action :',action)
        // console.log('***formReducer - state :',state)
       
        for(const inputId in state.inputs){
            // console.log('***formReducer - inputId :',inputId)
            // console.log('***formReducer - state.inputs[inputId] :',state.inputs[inputId])
            if(!state.inputs[inputId]){
                continue;
            }
            if (inputId === action.inputId) {
                formIsValid = formIsValid && action.isValid;
              } else {
                formIsValid = formIsValid && state.inputs[inputId].isValid;
              }
        }   
        return {
            ...state,
            inputs: {
              ...state.inputs,
              [action.inputId]: { value: action.value, isValid: action.isValid }
            },
            isValid: formIsValid
          };
     case 'SET_DATA':
              return { inputs: action.inputs,
                       isValid: action.isFormValid             
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

     const setFormData = useCallback((inputData,formValidity)=>{
         dispatch({
            type: 'SET_DATA',
            inputs : inputData,
            isFormValid: formValidity
         })
     },[])
   return [formState,inputHandler,setFormData]
  }