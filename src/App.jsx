import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import CourseList from './pages/CourseList'
import MyCourses from './pages/MyCourses'
import Home from './pages/Home'
import CourseDetail from './pages/CourseDetail'
import NotFound from './pages/NotFound'
import { ToastContainer } from 'react-toastify';
import ChatBox from './components/chatbox/ChatBox.jsx'
function App() {

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ChatBox/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/course-list" element={<CourseList />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
