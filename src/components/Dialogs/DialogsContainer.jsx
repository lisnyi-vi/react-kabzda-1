import React from 'react'
import { sendMessageCreator} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

// const DialogsContainer = (props) => {
//   let state = props.store.getState().dialogsPage;
  
//   let onSendMessageClick = () => {
//     props.store.dispatch(sendMessageCreator())
//   }
//   let onNewMessageChange = (text)=> {
//     props.store.dispatch(updateNewMessageCreator(text))
//   }
  
//   return (<Dialogs updateNewMessageText={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>)
// }

let mapStateToProps = (state) => {
 return {
   dialogsPage: state.dialogsPage,
 }
}
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody)=>{
      dispatch(sendMessageCreator(newMessageBody))
    },
  }
}

let DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
  
)(Dialogs)

// let AuthRedirectComponent = withAuthRedirect(Dialogs)

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;