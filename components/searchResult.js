import React from "react";

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: props.url,
      image: props.image,
      title: props.title,
      description: props.description
    };
  }

  render() {
    return (
      <a className="article-container" href={this.state.url}>
        <style jsx>
          {`
            .article-container {
              padding: 5px;
              display: flex;
              flex-direction: row;
              text-decoration: none;
              color: black;
              margin-bottom: 20px;
              align-items: center;
            }
            .article-text-container {
              margin: auto;
            }
            .flex-query {
              display: flex;
              flex-direction: row;
            }
            .article-container:hover {
              text-decoration: underline;
              color: rgb(163, 163, 163);
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
            }
            .article-title {
              font-size: 20px;
              margin-bottom: 10px;
            }
            .article-description {
              font-size: 14px;
              margin-bottom: 10px;
            }
            .article-image-container {
              width: 200px;
              margin-right: 50px;
            }
            .article-image {
              max-width: 200px;
              max-height: 200px;
              object-fit: cover;
            }
            @media only screen and (max-width: 900px) {
              .flex-query {
                flex-direction: column;
                justify-content: center;
              }
              .article-image-container {
                margin: 0 auto;
              }
              .article-description {
                font-size: 12px;
                text-align: center;
              }
              .article-title {
                font-size: 16px;
                text-align: center;
              }
            }
          `}
        </style>
        <div className="flex-query">
          <div className="article-image-container">
            <img className="article-image" src={this.state.image} />
          </div>
          <section className="article-text-container">
            <div className="article-title">{this.state.title}</div>
            <div className="article-description">{this.state.description}</div>
          </section>
        </div>
      </a>
    );
  }
}

export default SearchResult;
