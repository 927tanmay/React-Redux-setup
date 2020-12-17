import React, { Component } from 'react'

import { connect } from 'react-redux'
import { get } from '../Actions/index'

class home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <div>Setup for react-redux</div>
  }
}

function mapStateToProps(state) {
  return { name: state.reducer_name1 }
}

function mapDispatchToProps(dispatch) {
  return {
    get: () => {
      return dispatch(get())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(home)
