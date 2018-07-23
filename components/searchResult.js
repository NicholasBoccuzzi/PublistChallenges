import React from 'react';

class SearchResult extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      url: props.url,
      image: props.image,
      title: props.title,
      description: props.description,
    }
  }

  render () {
    return(
      <a className="article-container" href={this.state.url}>
        <style jsx>
          {`
            .article-container {
              padding: 5px;
              display:flex;
              flex-direction: column;
              text-decoration: none;
              color: black;
              margin-bottom: 20px;
            }
            .article-container:hover {
              text-decoration: underline;
              color: rgb(163,163,163);
              box-shadow: 0 2px 8px rgba(0,0,0,.2);
            }
            .article-title {
              font-size: 20px;
            }
            .article-description {
              font-size: 14px;
            }
            .article-image-container {
            }
            .article-image {
              max-width: 200px;
              max-height: 200px;
              object-fit: cover;
            }
          `}
        </style>
        <div className="article-image-container">
          <img className="article-image" src={this.state.image}></img>
        </div>
        <div className="article-title">{this.state.title}</div>
        <div className="article-desc">{this.state.description}</div>
      </a>
    )
  }
}

export default SearchResult;
