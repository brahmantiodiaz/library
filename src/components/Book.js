import React, { Component } from "react";
import PropTypes from "prop-types";
import { Badge } from 'reactstrap';
import { Card, Button, CardTitle, CardText, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import axios from 'axios';

class Book extends Component {
  // TODO: Buat state modal dengan nilai default false dan selectedBook dengan default {}
  state = {
    //isi disini
  }

  toggle = (buku) => this.setState({ modal: !this.state.modal, selectedBook: buku });

  // TODO: Isi fungsi untuk memanggil method PUT untuk fitur merubah status peminjaman
  EditBook = buku => {
    // isi disini
      .then(res => {
        // ubah kembali state modal menjadi false
        // this.setState()
        
        // Tampilakan window alert yang memberitahu informasi bahwa perubahan berhasil
        // Isi disini
        window.location.reload();
      }
      );
  };

  
  onSubmit = e => {
    e.preventDefault();
    // TODO: Panggil fungsi EditBook 
    // isi disini

  };

  render() {
    // TODO: Buat variabel judulBuku, pengarangBuku, genreBuku, dan isDipinjam yang nilainya didapat dari props `book`
    // isi disini

    return (
      <div>
        <Card body style={{ marginBottom: '12px', cursor: 'pointer' }} onClick={() => { this.toggle(this.props.book) }}>
          <CardTitle>
            <label style={{ fontWeight: 'bold' }}>{judulBuku}</label>
            <Badge style={{ marginLeft: '5px', fontSize: '9px' }} color={isDipinjam ? "danger" : "success"}>
              {/* TODO: Buat sebuah ternary. Jika isDipinjam true menampilkan kata "Lenyap,*/}
              {/* Jika false menampilkan kata "Tersedia" */}
              {/* isi disini */}
            </Badge>
          </CardTitle>
          <CardText style={{ fontSize: '12px' }}><b>Pengarang:</b> {pengarangBuku}</CardText>
          <CardText style={{ fontSize: '12px' }}><b>Genre: </b>{genreBuku}</CardText>
        </Card>
        <Modal isOpen={this.state.modal} toggle={this.toggle} >
          <ModalHeader toggle={this.toggle}>{this.state.selectedBook.judulBuku}</ModalHeader>
          <ModalBody>
            Apakah Anda yakin untuk {isDipinjam ? "mengembalikan" : "meminjam"} buku ini?
        </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.onSubmit}>{isDipinjam ? "Kembalikan Buku" : "Pinjam Buku"}</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

//PropTypes
Book.propTypes = {
  book: PropTypes.object.isRequired
};

export default Book;
