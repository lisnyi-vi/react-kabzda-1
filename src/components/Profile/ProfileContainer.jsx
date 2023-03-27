import React from "react";
// import classes from './Profile.module.css'
import Profile from "./Profile";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  getUserProfile,
  getStatus,
  updateStatus,
} from "../../redux/profile-reducer";
// import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import { useLocation, useNavigate, useParams } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId || userId === "*") {
      userId = this.props.authorizedUserId;
      if (!userId || userId === "*") {
        // this.props.history.push("/login")
        console.log("Refactor history Error")
      }
      // userId = 28113
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }
  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter
  // withAuthRedirect,
)(ProfileContainer);
