import { FETCH_WEATHER } from './../actions/index'


//state is set to an empty array because we will be passing in multiple weather datas
export default function(state=[], action){
  console.log(`action:${action}`);
  switch(action.type){
    case FETCH_WEATHER:
    return [ action.payload.data, ...state ];//note that in react we never directly change state.
    break;                                   //this ES6: 1st arg: make a new array w/ 1st arg inside of it.
                                             // 2nd arg: take this object(state)
                                             // and insert its contents into the array.
    default:
    return state;
  }
}
