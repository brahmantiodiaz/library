import React, { Component } from "react";
import Books from "./Books";
import axios from "axios";

class ListBooks extends Component {
  // TODO: Buat sebuah state berisi books dengan nilai default array kosong []
  //       dan isLoading dengan nilai default false
  state = {
    // isi disini
  };

  componentDidMount() {
    const context = this
    this.setState({isLoading: true}, () =>
    // TODO: Panggil API dengan method GET untuk mendapat semua data yang terdapat pada database.
    // isi disini
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
          // isi disini
        }
        </div>{" "}
      </div>
    );
  }
}

export default ListBooks;
