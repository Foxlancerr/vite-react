import React,{useContext} from 'react';
import userContext from '../context/UserContext';

const Profile = () => {
  const {userInfo} = useContext(userContext)
  return (
    <div>
      <h1 className='text-center text-2xl'>Username: {userInfo}</h1>
    </div>
  );
}

export default Profile;
