
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = props => {
    return (
        <div className="md:w-1/3">
            <h2 className="text-3xl">Bookmarked Blogs: {Bookmarks.length}</h2>
            {
                props.bookmarks.map( bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks;
