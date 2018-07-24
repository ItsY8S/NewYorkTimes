import React from 'react'
import LeftArrow from '../assets/images/LeftArrow.svg'
import RightArrow from '../assets/images/RightArrow.svg'
import '../assets/css/Article.css'

class Article extends React.Component {
  renderArticle = () => {
    return (
      <div>
        <h1> {this.props.data.webTitle} </h1>
        <div
          dangerouslySetInnerHTML={{ __html: this.props.data.fields.body }}
        />
      </div>
    )
  }
  render() {
    return (
      <article className="Article">
        <div id="arrows">
          <img
            src={LeftArrow}
            className="leftArrow"
            onClick={this.props.previous}
            alt="Left Arrow"
          />
          <img
            src={RightArrow}
            className="rightArrow"
            onClick={this.props.next}
            alt="Right Arrow"
          />
        </div>
        <h1 className="type">
          Section: {this.props.type[this.props.currentArticle].pillarName}
        </h1>
        {this.props.data ? this.renderArticle() : <h1> No data</h1>}
      </article>
    )
  }
}

export default Article
