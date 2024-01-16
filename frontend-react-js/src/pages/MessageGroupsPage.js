import './MessageGroupsPage.css';
import React from "react";

import DesktopNavigation  from '../components/DesktopNavigation';
import MessageGroupFeed from '../components/MessageGroupFeed';

// [TODO] Authenication
import { getCurrentUser, fetchUserAttributes } from 'aws-amplify/auth';

export default function MessageGroupsPage() {
  const [messageGroups, setMessageGroups] = React.useState([]);
  const [popped, setPopped] = React.useState([]);
  const [user, setUser] = React.useState(null);
  const dataFetchedRef = React.useRef(false);

  const loadData = async () => {
    try {
      const backend_url = `${process.env.REACT_APP_BACKEND_URL}/api/message_groups`
      const res = await fetch(backend_url, {
        method: "GET"
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setMessageGroups(resJson)
      } else {
        console.log(res)
      }
    } catch (err) {
      console.log(err);
    }
  };  

  const checkAuth = async () => {
    await getCurrentUser({
      // Optional, By default is false. 
      // If set to true, this call will send a 
      // request to Cognito to get the latest user data
      bypassCache: false 
    })
    .then((user) => {
      console.log('user',user);
      console.log(localStorage.getItem("access_token"))
      return fetchUserAttributes()
    }).then((cognito_user) => {
        setUser({
          display_name: cognito_user.name,
          handle: cognito_user.preferred_username
        })
    })
    .catch((err) => console.log(err));
  };

  React.useEffect(()=>{
    //prevents double call
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    loadData();
    checkAuth();
  }, [])
  return (
    <article>
      <DesktopNavigation user={user} active={'messages'} setPopped={setPopped} />
      <section className='message_groups'>
        <MessageGroupFeed message_groups={messageGroups} />
      </section>
      <div className='content'>
      </div>
    </article>
  );
}