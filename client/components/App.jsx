import React from 'react'

import Header from './Header'

export default React.createClass({
  componentDidMount() {
    if(this.props.posts.length === 0){
      this.props.getInitialData()
    }
  },
  render() {
    return(
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
})
