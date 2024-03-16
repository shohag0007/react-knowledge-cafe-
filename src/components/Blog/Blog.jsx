
import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa"
const Blog = ({blog, handleAddToBookmark}) => {
    const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`Cover Picture Of the Title ${title}`}/>
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14 rounded-full' src={author_img} alt=""/>
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button 
                    onClick={() =>handleAddToBookmark(blog)}
                    className='ml-2 text-2xl text-red-600 '
                    
                    ><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map(hash => <span><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.protoTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
}

export default Blog;