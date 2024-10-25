import PropTypes from 'prop-types';
import Bookmark from '../bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-400 ml-4 rounded-xl">
            <div>
                <h3 className='text-3xl'>Reading Time: {readingTime}</h3>
            </div>
           <h2 className="text-3xl p-3">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks:PropTypes.array.isRequired,
    readingTime: PropTypes.number
}
export default Bookmarks;