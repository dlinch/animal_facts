import React from 'react'

const AnimalSelection = ({onChange, animal}) => {
  return (
    <select onChange={e => onChange(e.target.value)} selected={animal}>
      <option value="cat">Cat</option>
      <option value="dog">Dog</option>
      <option value="horse">Horse</option>
      <option value="snail">Snail</option>
    </select>
  )
}

export default AnimalSelection;