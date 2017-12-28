import React from 'react'
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        {/* test comment */}
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store -></button>
      </form>
    )
  }
}

export default StorePicker
