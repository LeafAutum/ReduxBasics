import * as actionTypes from '../actionTypes';
const initialState= {
   
    results:[]
}

const reducer= (state=initialState, action) =>{
    const newState =Object.assign({},state);
    switch(action.type){
   
   
    case(actionTypes.STORE_RESULT):
          return{
            ...state,
            results : state.results.concat({id: new Date(), value:action.result})
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