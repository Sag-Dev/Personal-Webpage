import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../utils/getEmPixels'

import Flags from '../flags'
import Title from '../title'
import Game from '../game'

class Welcome extends Component {
  render() {
    return (
      <>

        <Title files={ this.props.files } />

        <div data-aos="zoom-out" data-aos-once="true" data-aos-mirror="false"
        data-aos-duration="1800" id="welcome-section" className="container welcome">
          <Flags/>
          <div className='fake-background'>
            <Game/>
            <hr/>
          </div>
        </div>


      </>
    );
  }
}

Welcome.propTypes = {
  files: PropTypes.array.isRequired,
}

export default Welcome
