//Functional composition 

function getProfilePic(username) {
  return 'https://photo.fb.com/' + username
}

function getProfileLink(username) {
  return 'https://www.fb.com/' + username
}

function getAvatarInfo(username){
  return {
    pic: getProfilePic(username),
    link: getProfileLink(username)
  }
}

getAvatarInfo('Tyler')

//"React"

function ProfilePic(props) {
  return (
    <img src={'https://photo.fb.com/' + props.username} />
  )
}

function ProfileLink(props) {
  return (
    <a href={'https://www.fb.com/' + props.username }>
      {props.username}
    </a>
  )
}

function Avatar(props){
  return (
    <div>
      <ProfilePic username={props.username} />
      <ProfileLink username={props.username} />
    </div>
  )
}

<Avatar username='Tyler' />
