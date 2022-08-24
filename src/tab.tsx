import React from 'react'

interface Props {
    id: string
    index: number
    selectedTab: number
    title: string
    handleChange: (index: number) => void
}
const Tab = ({ id, index, selectedTab, title, handleChange } : Props) => {
    return (
        <div>
      <button role="tab" onClick={() => handleChange(index)} tabIndex={selectedTab === index ? 0 : -1}>{title}</button>
      {selectedTab === index &&       <p>{title}</p>}

      </div>
    )
  }

  export default Tab