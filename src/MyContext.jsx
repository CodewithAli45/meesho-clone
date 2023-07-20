import React, { createContext, useReducer } from 'react';

export const Mycontextdetails = createContext();

const reducer = (state, action) =>{
    switch(action.type){
        case 'ADD' :
                const tempStateOne = state.filter((item) => 
                    action.payload.id === item.id);
                if(tempStateOne.length > 0) {
                    return state;
                } else {
                    return [...state, action.payload];
                }
            case 'INCREASE' :
                const temoStateTwo = state.map((item) => {
                    if(item.id === action.payload.id){
                        return {...item, quantity : item.quantity + 1}
                    } else {
                        return item;
                    }
                });
                return temoStateTwo;
            case 'DECREASE' :
                const tempStateThree = state.map((item) => {
                    if(item.id === action.payload.id){
                        return {...item, quantity: item.quantity - 1};
                    } else {
                        return item;
                    }
                });
                return tempStateThree;

            case 'REMOVE' :
                const stateRemove = state.filter((item) => 
                (item.id !== action.payload.id));
                return stateRemove;
            case 'RESET_CART':
                return [];

            default :
                return state;
    }
}
export const MyContext = (props) => {
    const [state, dispatch] = useReducer(reducer, []);
    const info = {state, dispatch};
    return (
        <Mycontextdetails.Provider value={info}>
            {props.children}
        </Mycontextdetails.Provider>
    );
}


