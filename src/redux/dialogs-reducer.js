const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogData: [
          {id:1, name: "Vasya"},
          {id:2, name: "Andriy"},
          {id:3, name: "Yura"},
          {id:4, name: "Marta"},
          {id:5, name: "Olya"},
          {id:6, name: "Ivan"}
        ],
  messageData: [
          {id:1, message: "Hi"},
          {id:2, message: "How are you"},
          {id:3, message: "Yo"},
          {id:4, message: "Yo"},
          {id:5, message: "Yo"},
        ],
  
}

const dialogsReducer = (state = initialState, action) => {
  let stateCopy;
  
  switch (action.type) {
    
    case SEND_MESSAGE: 
      let text = action.newMessageBody;
      return {
        ...state,
        messageData: [...state.messageData, {id: 7, message: text}]
      }
    default:
      return state;
  }
}
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;