import React, { useState } from 'react'
import trending from '../assets/mocks/trending'
import {MasonryPost, PostMasonry, PostGrid} from '../components/common'
import featured from '../assets/mocks/featured'

const trendingConfig ={
    1:{
        gridArea: '1 / 2 / 3 / 3'
    }
}

const featuredConfig ={
    0:{
        gridArea: '1 / 1 / 2 / 3',
        height: '300px'
    },
    1:{
        height: '300px'
    },
    3:{
        height: '630px',
        marginLeft: '30px',
        width: '630px'
    }
}

const mergeStyles = function (posts, config) {
    posts.forEach((post,index) => {
        post.style = config[index]
        post.author = 'Laurynas Seredochas'
        post.description = 'lorem ipsum xdeeee'
    })
}

const recentPosts = [...trending, ...featured, ...featured]

mergeStyles(trending, trendingConfig)
mergeStyles(featured, featuredConfig)

const lastPost = featured.pop()

export default function Home () {
    const [posts, setPosts] = useState([...trending, ...featured, ...featured]);
  
    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase()
      );
      
      const handleRemove = postToRemove => {
        const updatedPosts = posts.filter(post => post !== postToRemove);
        setPosts(updatedPosts);
    };

    return (
    <main className='home'>
    <section className='container'>
        <div className='row'>
            <section className='featured-posts-container'>
                <PostMasonry posts={featured} columns={2} tagsOnTop={true}/>
                <MasonryPost post={lastPost} tagsOnTop={true}/>
            </section>
        </div>
    </section>

    <section className='container'>
        <div className='row'>
          <PostGrid posts={filteredPosts} handleRemove={handleRemove}/>
        </div>
      </section>

    <section className='container'>
        <div className='row'>
            <PostMasonry posts={trending} columns={3}/>
        </div>
    </section>
    </main>
)}