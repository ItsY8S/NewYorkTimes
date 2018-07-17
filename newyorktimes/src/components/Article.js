import React from 'react'
import '../assets/css/Article.css'

class Article extends React.Component {
  renderArticle = () => {
    console.log(this.props.data)
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
          <button className="leftArrow" onClick={this.props.previous}>
            &lt;
          </button>
          <button className="rightArrow" onClick={this.props.next}>
            &gt;
          </button>
        </div>
        {this.props.data ? this.renderArticle() : <h1> No data</h1>}
      </article>
    )
  }
}

export default Article
