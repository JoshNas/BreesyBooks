import React, { Component } from "react";
import { API } from "aws-amplify";
import "./GetBook.css";
import $ from 'jquery';


export class GetBook extends Component {
  constructor(props) {
    super(props);

    this.file = null;
    this.state = {
      isLoading: null,
      searchTerm: "",
      title: "",
      author: "",
      pages: 0,
      books: []
    };

    this.getBooks = this.getBooks.bind(this)
  }

  validateForm() {
    return this.state.searchTerm.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    try {
      await this.createBook({
        title: this.state.title,
        author: this.state.author,
        pages: this.state.pages
      });
      console.log(this.props)
      // this.props.history.push("/");
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  }

  createBook(book) {
    return API.post("books", "/books", {
      body: book
    });
  }

  getBooks() {
    const search = this.state.searchTerm

    $.ajax({
      url: 'https://www.googleapis.com/books/v1/volumes?q=' + search +'&maxResults=10',
      dataType:  "json",
        success: (data) => {
          this.setState({
            books: data.items
          })
        },
        type: 'GET'
    })
  }

  handleSelect = (e, book) => {
    e.preventDefault();

    this.setState({
      title: book.title,
      author: book.authors,
      pages: book.pageCount,
    })

    this.setState({ isLoading: true });

    try {
      this.createBook({
        title: this.state.title,
        author: this.state.author,
        pages: this.state.pages
      });
      this.props.history.push("/");
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  }


  render() {
    return (
      <div className="NewBook">
        <div className="d-flex flex-column">
          <form id="searchForm">
            <div className="form-group">
              <label>What are you reading?</label>
              <input className="form-control form-control-lg" onChange={this.handleChange} value={this.state.searchTerm} id="searchTerm"></input>
            </div>
          </form>
          <button className="btn btn-info search" onClick={this.getBooks}>Search</button>
        </div>
        {
          this.state.books.map((book, index) => (
            <div key={index} className="d-flex flex-column bd-highlight mb-3 bg-secondary text-white">
              <button onClick={((e) => this.handleSelect(e, book.volumeInfo))} className="p-2 bd-highlight">Add this book</button>
              <p className="p-2 bd-highlight">by: {book.volumeInfo.title}</p>
              <p className="p-2 bd-highlight">by: {book.volumeInfo.authors}</p>
              <p className="p-2 bd-highlight">pages: {book.volumeInfo.pageCount}</p>
              <img className="img-fluid align-self-center" src={book.volumeInfo.imageLinks.thumbnail} alt="cover"></img>
            </div>
          ))
        }
      </div>
    );
  }
}
