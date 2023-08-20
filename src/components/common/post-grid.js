import React, {useState, useMemo, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Pagination } from 'antd'
import { TagRow } from './'

export default function PostGrid ({posts, handleRemove}){
    const [pageSize, setPageSize] = useState(9)
    const [current, setCurrent] = useState(1)
    const [searchTerm, setSearchTerm] = useState('');

    const paginatedPosts = useMemo(() => {
        const lastIndex = current * pageSize
        const firstIndex = lastIndex - pageSize

        return posts.slice(firstIndex, lastIndex);
    }, [current, pageSize, posts]); // Include "posts" in the dependency array

    const filteredPosts = useMemo(() => {
        return posts.filter(post =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }, [searchTerm, posts]);

    useEffect(() => {
        // Update current page to prevent incorrect rendering after removal
        const lastPage = Math.ceil(posts.length / pageSize);
        setCurrent(current => Math.min(current, lastPage));
    }, [pageSize, posts.length]);

    useEffect(() => {
        window.scroll({
            top: 500,
            left: 0,
            behavior: 'smooth'
        })
    }, [current, pageSize])

    const handleSearchChange = e => {
        setSearchTerm(e.target.value);
        setCurrent(1);
      };

    return(
        <section className='grid-pagination-container'>
        <div className="header-search-container">
            <h2>All Posts</h2>
            <input
                className='search-bar'
                type="text"
                placeholder="Search by Title"
                value={searchTerm}
                onChange={handleSearchChange}
            />
        </div>
            <section className='post-grid container'>
                {filteredPosts.map((post, index) => (
                    <div key={index} className='post-container'>
                        <figure>
                            <Link to={post.link}>
                                <img src={require(`../../assets/images/${post.image}`)} alt={post.image}/>
                            </Link>
                        </figure>
                        <TagRow tags={post.categories} />
                        <h2>{post.title}</h2>
                        <p className='author-text'>
                            <span>
                                By:
                                <Link to={`/authors/${post.author}`}>
                                    {post.author}
                                </Link>
                            </span>
                            <span>
                                - {post.date}
                            </span>
                        </p>
                        <p className='description-text'>
                            {post.description}
                        </p>
                        <Link to ={post.link}>Read More...</Link>
                        <button onClick={() => handleRemove(post)}>Remove</button>
                    </div>
                ))}
            </section>
            <Pagination 
                simple 
                showSizeChanger 
                onShowSizeChange={setPageSize} 
                pageSize={pageSize}
                total={filteredPosts.length}
                defaultCurrent={current}
                onChange={setCurrent}
            />
        </section>
    )
}