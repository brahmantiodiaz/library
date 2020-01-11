import React, { Component } from "react";
import Books from "./Books";
import axios from "axios";

class ListBooks extends Component {
  // TODO: Buat sebuah state berisi books dengan nilai default array kosong []
  //       dan isLoading dengan nilai default false
  state = {
    books: [],
    isLoading: false
  };

  componentDidMount() {
    const context = this
    this.setState({isLoading: true}, () =>
    // TODO: Panggil API dengan method GET untuk mendapat semua data yang terdapat pada database.
    axios
    .get("https://library2020-api-diaz.herokuapp.com/library")
    .then(res =>{
      console.log(res);
      context.setState({
        books: res.data,
        isLoading: false
      })
    }
    )
    )    
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          {this.state.isLoading? <div>Lagi loading...</div>:
          // TODO: Panggil component BOOKS dengan membawa state books sebagai props books
          <Books
           books={this.state.books}
           />}
        </div>{" "}
      </div>
    );
  }
}

export default ListBooks;
