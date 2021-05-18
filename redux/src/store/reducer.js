import * as actionTypes from './actionTypes';
const initialState= {
    counter:0,
    results:[]
}

const reducer= (state=initialState, action) =>{
    const newState =Object.assign({},state);
    switch(action.type){
   
    case (actionTypes.INCREMENT):
        return {
             ...state,
             counter : state.counter+1
        }
    
    case (actionTypes.DECREMENT):
        return {
             ...state,
             counter : state.counter-1
        }

    case(actionTypes.ADD):
        return {
             ...state,
             counter : state.counter+action.value
        }
    
    case (actionTypes.SUB):
        return {

             ...state,
             counter : state.counter-action.value
        }
    case(actionTypes.STORE_RESULT):
          return{
            ...state,
            results : state.results.concat({id: new Date(), value:state.counter})
          }
    
   case(actionTypes.DELETE_RESULT):
          const updatedarray = state.results.filter(result => result.id !== action.resultEl)
          return{
            ...state,
            results : updatedarray
          }      
       
}
return state;
};


export default reducer;