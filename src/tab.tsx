import React, { RefObject } from 'react'

interface Props {
    id: string
    index: number
    selectedTab: number
    title: string
    handleChange: (index: number) => void
    tabRef: RefObject<HTMLButtonElement>
}
const Tab = ({ id, index, selectedTab, title, handleChange, tabRef } : Props) => {
    return (
<div>
      <button role="tab" onClick={() => handleChange(index)} tabIndex={selectedTab === index ? 0 : -1} ref ={tabRef}>{title}</button>
      {selectedTab === index && <p>{title}</p>}
      </div>
      )
  }

  export default Tab