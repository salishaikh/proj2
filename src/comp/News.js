import React, { Component } from "react";
import Newsitem from "./Newsitem";
import { Spinner } from "./Spinner";
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    country : "in",
    pageSize : 8,
    category : 'science',
  }
  static propTypes = {
   country: PropTypes.string,
   pageSize : PropTypes.number,
   category : PropTypes.string,
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      todaydate:new Date(),
      category: ''
    };
  }

  async componentDidMount() {
    // for go to new category or routing
    let cat = window.location.href.replace(window.location.origin+'/', '');
    this.setState({
      category: cat
    })


    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&pageSize=${
      this.props.pageSize
    }&category=${cat}&apiKey=9469332ec247406581138408e7a922c7`;
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({
      articles: parseddata.articles,
      tootalResults: parseddata.totalResults,
      loading: false,
      todaydate: new Date()
    });
  }
  //***************************************** */ next and prevoius button *****************************************************
  handleNextClick = async () => {
    console.log("Next");
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&pageSize=${
        this.props.pageSize
      }&category=${this.state.category}&apiKey=9469332ec247406581138408e7a922c7&page=${this.state.page + 1}`;
      this.setState({ loading: true });
      let data = await fetch(url);

      let parseddata = await data.json();
      console.log(parseddata);

      this.setState({
        page: this.state.page + 1,
        articles: parseddata.articles,
        loading: false,
      });
    }
  };

  handlePrevClick = async () => {
    console.log("previus");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&pageSize=${
      this.props.pageSize
    }&category=${this.state.category}&apiKey=9469332ec247406581138408e7a922c7&page=${this.state.page - 1}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);

    this.setState({
      page: this.state.page - 1,
      articles: parseddata.articles,
      loading: false,
    });
  };

  render() {
    return (
      <div className="container my-3 ">
        <h2 className="text-center">Top headlines</h2>
        {/* // sponner loading */}
        {this.state.loading && <Spinner />}

        <div className="row">
          {!this.state.loading &&
            this.state.articles?.map((elem) => {
              return (
                <div className="col-md-4" key={elem.url}>
                  <Newsitem
                    title={elem.title?.slice(0, 45)}
                    decsription={elem.description?.slice(0, 80)}
                    urlimg={elem.urlToImage}
                    pageSize
                    newsUrl={elem.url}
                  />
                </div>
              );
            })}
        </div>

        <div className="container d-flex justify-content-evenly my-3 ">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default News;





// const apiLink = (page, todaydate, pageSize, category, country) => {
//   if(page)
//     return `https://newsapi.org/v2/top-headlines?country=${country}&from=${todaydate}&sortBy=publishedAt&pageSize=${
//       pageSize
//     }&category=${category}&apiKey=2cd02202a0984de38eb13fcf5cf318b6&page=${page - 1}`
//   else return `https://newsapi.org/v2/top-headlines?country=${country}&from=${todaydate}&sortBy=publishedAt&pageSize=${pageSize}&category=${category}&apiKey=2cd02202a0984de38eb13fcf5cf318b6`
// }