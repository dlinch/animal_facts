import React from 'react'

const AnimalSelection = ({onChange, animal}) => {
  return (
    <label> Animal Selection
      <select onChange={e => onChange(e.target.value)} selected={animal}>
        <option value="cat">Cat</option>
        <option value="dog">Dog</option>
        <option value="horse">Horse</option>
        <option value="snail">Snail</option>
      </select>
    </label>
  )
}

export default AnimalSelection;