import React from 'react'
import Select from 'react-select'

export default function SelectFilters({ options, callback, initial }) {
  const customStyles = {
    option: (styles, { isSelected }) => {
      return {
        ...styles,
        color: isSelected ? 'white' : 'black',
        ':active': {
          ...styles[':active'],
          backgroundColor: isSelected
            ? 'var(--main-color)'
            : 'var(--main-colorLight)',
        },
      }
    },
  }
  return (
    <Select
      defaultValue={initial}
      options={options}
      isSearchable={false}
      styles={customStyles}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary25: 'var(--main-colorLight)',
          primary: 'var(--main-color)',
        },
      })}
      onChange={(e) => {
        callback(e)
      }}
    />
  )
}
