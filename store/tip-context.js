import { createContext, useReducer } from "react";

const initialState = {
  bill: 1,
  tip: 0,
  numberOfPeople: 1,
  tipAmount: "$0.00",
  total: "$0.00",
};

export const TipContext = createContext();

export default function TipContextProvider({ children }) {
  function reducerfn(state, action) {
    switch (action.type) {
      case "setBill":
        return { ...state, bill: action.data };
      case "setTip":
        return { ...state, tip: action.data };
      case "setNumberOfPeople":
        return { ...state, numberOfPeople: action.data };
      case "setTipAmount":
        return { ...state, tipAmount: action.data };
      case "setTotal":
        return { ...state, total: action.data };
      case "reset":
        return { ...state, bill: 0, tip: 0, numberOfPeople: 0 };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducerfn, initialState);

  return (
    <TipContext.Provider value={[state, dispatch]}>
      {children}
    </TipContext.Provider>
  );
}
