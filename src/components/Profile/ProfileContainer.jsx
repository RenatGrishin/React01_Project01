import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";

class ProfileContainer extends React.Component{
    render() {
        return<Profile
            user={this.props.user}
        />
    }
}

const mapStateToProfile = (state) =>{
    return{
        user: state.UserReducer
    }
}

export default connect (mapStateToProfile,{})(ProfileContainer)