import React from 'react'
import RecentBlogs from '../components/RecentBlogs'
import PageTitle from '../components/PageTitle'
import Blogs from '../components/Blogs'

const Home = () => {
  return (
    <div className='container' >
      <PageTitle title="THE BLOG" />
      <RecentBlogs/>
      <Blogs/>
    </div>
  )
}

export default Home
