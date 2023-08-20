import React, { createContext, useContext, useReducer } from 'react';

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const initialState = {
    messages: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_MESSAGE':
        return { ...state, messages: [...state.messages, action.payload] };
      case 'REMOVE_MESSAGE':
        return {
          ...state,
          messages: state.messages.filter(message => message.id !== action.payload),
        };
      // You can add more cases for other actions if needed
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MessageContext.Provider value={{ state, dispatch }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessageContext = () => {
  return useContext(MessageContext);
};
