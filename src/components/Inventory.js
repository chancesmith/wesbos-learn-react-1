import React from 'react'
import AddFishForm from './AddFishForm'

class Inventory extends React.Component {
  render() {
    return (
      <div>
        <p>Inventory here</p>
        <AddFishForm addFish={this.props.addFish} />
      </div>
    )
  }
}

export default Inventory
