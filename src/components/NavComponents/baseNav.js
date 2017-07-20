import React from 'react'
// import { browserHistory } from 'react-router'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
import Menu from 'material-ui/Menu'
import Badge from 'material-ui/Badge'
// import api from 'utils/api'
import { ToolbarGroup } from 'material-ui/Toolbar'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import Popover from 'material-ui/Popover'
import Icon from 'material-ui/svg-icons/action/record-voice-over'
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar'

import { connect } from 'react-redux'
import { currentUser } from "../actions"
import {getRequests} from '../actions'
import {addConnection} from '../actions'


// import getstream from 'utils/getstream'
// import { getCurrent } from 'utils/auth'


export class Requests extends React.Component{
  constructor(){
    super()
    this.state ={
      showCreateOptions: false,
      showCreateOptionsEl: null,
      user: currentUser(),
      notifications: [],
      unread: 0,
      isLoading: true,
      loadRequests: "true",
      requests:[],
      feed: 'USER_REQUESTS',
      icon: <Icon color='white' />,
      tooltip: 'Requests',
      badgeRightPos: 8,
      // notifications: this.state.requests.map(data=>{
      //   console.log(data,"this is the data I'm passing into dropdown");
      //   const option = {
      //       text: data.title,
      //       value: data._id,
      //       image: { avatar: true, src: data.image },
      //       key: data._id,
      //       button: {icon:"accept"},
      //       trigger: {}
      //     }
      //   return option
      // })
    }
  }


  //
  // getInitialState() {
  //   return {
  //     showCreateOptions: false,
  //     showCreateOptionsEl: null,
  //     user: currentUser(),
  //     notifications: [],
  //     unread: 0,
  //   }
  // },

  componentWillMount() {
    console.log(this.state.user);
        if (this.state.isLoading === true) {
          this.props.getRequests().then(data=>
            {
              console.log("What are my requests?????",data);
              if (data.requests === null || data.requests.requests.length === 0){
              this.setState({loadRequests: "zero"})
            }else{
              this.setState({notifications: data.requests})
              console.log(this.state.notifications);
              console.log(this.state.feed);
              this.setState({loadRequests: false})
            }
          }).then(()=>{

              const query = `
                query Query(
                  $feed: FeedType!
                ){
                  getFeed(
                    feed: $feed
                  ){
                    notifications{
                      model
                      label
                      avatar
                      time
                    }
                    unread
                  }
                }
              `
              const vars = {
                feed: this.feed
              }
        })
      }
    }

componentDidMount(){

}

  render() {
    if(this.state.loadRequests === true){
      return
      <MuiThemeProvider>
      <ToolbarGroup>

        <Badge
          style={{paddingTop: 7}}
          badgeContent={this.state.unread}
          secondary={true}
          badgeStyle={{top: 12, right: this.badgeRightPos, border: '1px solid #eee'}}
          >
          <IconButton
            tooltip={this.tooltip}
            >
            {this.icon}
          </IconButton>
        </Badge>
      </ToolbarGroup>
    </MuiThemeProvider>
  } else if(this.state.notifications === null ||this.state.notifications.length === 0 ){
      return (
        <MuiThemeProvider>
        <ToolbarGroup>

          <Badge
            style={{paddingTop: 7}}
            badgeContent={this.state.unread}
            secondary={true}
            badgeStyle={{top: 12, right: this.badgeRightPos, border: '1px solid #eee'}}
            >
            <IconButton
              tooltip={this.tooltip}
              >
              {this.icon}
            </IconButton>
          </Badge>
        </ToolbarGroup>
      </MuiThemeProvider>
      )
    }else{

console.log(this.state.notifications, "does this ever run ?");

    const handleShowCreateOptions = (event)=>{
      event.preventDefault()
      this.setState({
        showCreateOptions: true,
        showCreateOptionsEl: event.currentTarget,
      })
    }

    const handleHideCreateOptions =()=> {
      this.setState({
        showCreateOptions: false,
      })
    }

    const handleSubmit = (activity, action)=>{
      console.log("something");
      if (action === "true"){
        addConnection(activity)

          console.log("its working?")
        }
    }


    const handleClickActivity = (activity, action)=>{

    }





    const getMenuItemContent = (activity) =>{

        return (
          <div>
            <div className='row'>
              <div className='col-sm-2'><IconButton><Avatar src={activity.image} /></IconButton></div>
              <div className='col-sm-10'>
                <div className='notification-label'>{activity.title}</div>
                <div>
                  <FlatButton label={'Accept'} onClick={handleSubmit.bind(this, activity, "true")}/>
                <FlatButton label={'Reject'} onClick={handleSubmit.bind(this, activity, "false")}/>
                </div>
              </div>
            </div>
          </div>
        )

      }

    return (
      <MuiThemeProvider>
      <ToolbarGroup>

        <Badge
          style={{paddingTop: 7}}
          badgeContent={this.state.unread}
          secondary={true}
          badgeStyle={{top: 12, right: this.badgeRightPos, border: '1px solid #eee'}}
          onClick={handleShowCreateOptions}>
          <IconButton
            tooltip={this.tooltip}
            onClick={handleShowCreateOptions}>
            {this.icon}
          </IconButton>
        </Badge>

        <Popover
          open={this.state.showCreateOptions}
          anchorEl={this.state.showCreateOptionsEl}
          onRequestClose={handleHideCreateOptions}
          targetOrigin={{horizontal: 'middle', vertical: 'top'}}
          anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}>
          <Menu>

            {this.state.notifications.requests.map((activity, idx)=>(
              <MenuItem
                key={idx}
                style={{lineHeight: 2}}
                primaryText={getMenuItemContent.call(this, activity)}
                onClick={handleClickActivity.bind(this, activity)} />
            ))}

          </Menu>
        </Popover>
      </ToolbarGroup>
    </MuiThemeProvider>
    )
}
  }

}

Requests.propTypes={
  requests: React.PropTypes.array.isRequired,
  getRequests: React.PropTypes.func.isRequired
}

Requests.defaultProps={
  requests: React.PropTypes.array
}

function mapStateToProps(state) {
  console.log(state);
  return{
    requests: state.requestConnections.requests
  }
}

export default connect(mapStateToProps, {getRequests})(Requests)
