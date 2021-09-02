import React, { useEffect } from 'react'
import { useSelector,useDispatch,connect } from 'react-redux'
import { fetchUser } from '../redux/users/userAction'

const Usersdata = ({ userData, fetchUser }) => {
    // const userData = useSelector(state => state.userReducer.Data)
    // const dispatch = useDispatch()
    useEffect(()=>{
        fetchUser()
    },[])
    return(userData.loadingFlag ? (
        <h1> Loading </h1>)
        : userData.error ? (
        <h1>{userData.error}</h1>
        ) : (
        <div>
            <h1>{userData &&
          userData.users &&
          userData.users.map(user => <p>{user.name}</p>)}</h1>
        </div>
    ))
}

const mapStateToProps = state => {
    return {
      userData: state.users
    }
  }

const mapDispatchToProps = dispatch => {
    return {
      fetchUser: () => dispatch(fetchUser())
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Usersdata)



{/* <h1>Users</h1> */}
