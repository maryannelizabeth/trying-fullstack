import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { NavLink, NavGroup } from './Styled'

function Nav() {
  const { loginWithRedirect, logout } = useAuth0()
  // thumbnail
  // username
  // email

  const handleLogOff = (e) => {
    e.preventDefault()
    logout()
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    loginWithRedirect()
  }

  return (
    <>
      <NavGroup>
        <NavLink to="/">Home</NavLink>
        <IfAuthenticated>
          <NavLink to="/" onClick={handleLogOff}>
            Log off
          </NavLink>
          {/* <p>
            <span role="img" alt={user.icon}>
              {user.icon}
            </span>
            {' ' + user.username}
          </p> */}
        </IfAuthenticated>
        <IfNotAuthenticated>
          <NavLink to="/" onClick={handleSignIn}>
            Sign In
          </NavLink>
        </IfNotAuthenticated>
      </NavGroup>
    </>
  )
}

//eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlZzblZSSHVQYjZTYUFTX1pneFlmbSJ9.eyJpc3MiOiJodHRwczovL21hbmFpYS1tYXJ5YW5uLmF1LmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExNDg2NjE4Nzk2NDA5MDQwODc4OSIsImF1ZCI6WyJodHRwczovL2NsYXNzcm9vbXRvb2xib3gvYXBpIiwiaHR0cHM6Ly9tYW5haWEtbWFyeWFubi5hdS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjYzMDI3MjA1LCJleHAiOjE2NjMxMTM2MDUsImF6cCI6IkRNRWVINGR1S2ozR2RoVXFybm5JYTRzaVR4M2lWOXJsIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCJ9.fXysWrwty6A8DSzdWl1NnM70QKnUHpwEsnGxdOMVYxZTeDd_zU6HY1ILPemhRHJPNVcGz81_1rjcMC3sigOUDBZ0BFICG3eBZU3vdWF7gQJ8rnqueAIbpmCRsil5w_8gf04EVg0yBO6_fTXchjW9veBQkKYXDZ3XtRr8LG5pf4pLSSvUCiuMcTBg9P1UczABNWF2gaUXhTNyPBnzVpgNp1HXGG1aSXNBFyVpYE7SGhXNAunMYSy5i8E4oEcRmi36I1bzegvMq6brrBH1G3-Rl3a1N4D8Tisjv3wmMjUqTuUxv-VXBawqIdHovpWIG7IfaqY1eMMgL_CyqCzwtE0AsQ

// https://jwt.io/

export default Nav
