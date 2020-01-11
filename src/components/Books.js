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
        {/* Buat sebuah perulangan untuk semua objek pada array book maka panggil component Book */}
        {/* Isi disini  */}
      </CardColumns>
    )
  }
}

//PropTypes
Books.propTypes = {
  books: PropTypes.array.isRequired,
}


export default Books;