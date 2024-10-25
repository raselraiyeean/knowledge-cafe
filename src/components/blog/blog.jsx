import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";


const Blog = ({blog, handleAddToBookMark, handleMarkAsRead}) => {
    const {title, cover, author_image, author, posted_date, reading_time, hashtag} =blog;
    return (
        <div className='mb-20'>
            <img src={cover} alt="" />
            <div className='flex justify-between my-10'>
                <div className='flex gap-4'>
                <img className='h-14 w-14' src={author_image} alt="" />
                <div>
                    <h3 className='text-3xl'>{author}</h3>
                    <p>{posted_date}</p>
                </div>
                </div>
                <div className='flex items-center'>
                    <span className='mr-2'>{reading_time} read</span>
                    <button onClick={() => handleAddToBookMark(blog)} className='text-red-400'><CiBookmark /></button>
                    
                </div>
            </div>
            <h2 className='text-4xl font-extrabold'>{title}</h2>
            <p>{hashtag} </p>
            <button 
            onClick={() => handleMarkAsRead(reading_time)}
            className='my-4 font-bold text-purple-500 underline'
            ><a href="#">Mark As red</a></button>
        </div>
    );
};
 Blog.propTypes = {
 blog: PropTypes.object.isRequired,
 handleAddToBookMark: PropTypes.func.isRequired,
 handleMarkAsRead: PropTypes.func.isRequired
}
export default Blog