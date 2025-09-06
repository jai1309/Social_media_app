import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Feed from './pages/Feed'
import Profile from './pages/Profile'
import Messages from './pages/Messages'
import ChatBox from './pages/ChatBox'
import Connections from './pages/Connections'
import Discover from './pages/Discover'
import CreatePost from './pages/CreatePost'
import Login from './pages/Login'
import {useUser, useAuth} from '@clerk/clerk-react'
import Layout from './pages/Layout'
import {Toaster} from 'react-hot-toast'

const App = () => {

    const { isLoaded, user } = useUser();

    if (!isLoaded) return <div>Loading...</div>; // Wait for Clerk to load


  return (
    <>
    <Toaster/>
    <Routes>
      <Route path='/' element={ !user ? <Login /> : <Layout/>}>
      <Route index element={<Feed/>}/>
      <Route path='profile/:userId' element={<Profile/>}/>
      <Route path='messages' element={<Messages/>}/>
      <Route path='messages/:userid' element={<ChatBox/>}/>
      <Route path='connections' element={<Connections/>}/>
      <Route path='discover' element={<Discover/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='create-post' element={<CreatePost/>}/>
      <Route path='*' element={<div>404 Not Found</div>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App