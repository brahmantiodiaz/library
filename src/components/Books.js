import React, {
  Component
} from 'react';
import Book from './Book';
import PropTypes from 'prop-types';
import { CardColumns } from 'reactstrap';

class Books extends Component {
  render() {
    return (
      <CardColumns>
        {this.props.books.map(book => (
          <Book
            key={book._id}
            book={book}
            />
        ))
        }
      </CardColumns>
    )
  }
}

//PropTypes
Books.propTypes = {
  books: PropTypes.array.isRequired,
}


export default Books;