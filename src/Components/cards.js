import React from 'react'

const Users = ({users}) => {
    return (
          <div id="content">
             {users.map(user =>
                      <div className="profilecontainer">
                        <div className="profile">
                          <img src={user.avatar} alt={user.avatar} className="useravatar"></img>
                          <h1 className="uname">{user.first_name} {user.last_name}</h1>
                          <p className="uemail">{user.email}</p>
                          <p class="uid">USER ID: {user.id}</p>
                        </div>
                      </div>
                )
              }
          </div>
       )
}
export default Users;
