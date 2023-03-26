import React from 'react';
// import classes from './ProfileInfo.module.css'
// import Preloader from '../../common/Preloader/Preloader'


class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status,
  }
  activateEditMode = ()=> {
    this.setState({
      editMode: true,
    })
  }
  deactivateEditMode = ()=> {
    this.setState({
      editMode: false,
    })
    this.props.updateStatus(this.state.status)
  }
  onStatusChange =(e)=>{
    this.setState({
      status: e.currentTarget.value
    })
  }
  
  componentDidUpdate(prevProps, prevState) {
    
    if(prevProps.status !== this.props.status) {
      this.setState({status: this.props.status})
    }
    console.log('componentDidUpdate')
  }
  render() {
    console.log('render')
    return (
      <div>
        {!this.state.editMode && 
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status || "-----"}</span>
          </div>
        }
        {this.state.editMode && 
          <div>
          <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
        </div>
        }
      </div>
    )
  }
} 

export default ProfileStatus;

// {
//   "aboutMe": "я круто чувак 1001%",
//   "contacts": {
//     "facebook": "facebook.com",
//     "website": null,
//     "vk": "vk.com/dimych",
//     "twitter": "https://twitter.com/@sdf",
//     "instagram": "instagra.com/sds",
//     "youtube": null,
//     "github": "github.com",
//     "mainLink": null
//   },
//   "lookingForAJob": true,
//   "lookingForAJobDescription": "не ищу, а дурачусь",
//   "fullName": "samurai dimych",
//   "userId": 2,
//   "photos": {
//     "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
//     "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
//   }
// }