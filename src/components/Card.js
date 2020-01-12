import React, {Component} from 'react'


class Card extends Component{
  render(){
    // console.log(this.props.charac)
    const {FirstURL, Text, Icon:{URL}, Result} = this.props.charac
    return(
      <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img alt={Text.split('-')[0]} src={URL} />
            </div>
            <div className="content">
              <div className="header">{Text.split('-')[0]}</div>
              <div className="meta">
                <a>Friends</a>
              </div>
              <div className="description">
                {Text}
              </div>
            </div>
            <div className="extra content">
              <span className="right floated">
                Joined in 2013
              </span>
              <span>
                <i className="user icon"></i>
                75 Friends
              </span>
            </div>
          </div>
      </div>
    )
  }
}

export default Card
