import { useState } from 'react'
import PrintItem from './PrintItem'
const SelectItem = () => {
  const [selectedItem, setSelectedItem] = useState('')

  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => setSelectedItem(event.target.value)}>
        <option value=""></option>
        <option value="item 1"> item 1</option>
        <option value="item 2"> item 2</option>
      </select>
      <PrintItem item={selectedItem} />
    </div>
  )
}

export default SelectItem
