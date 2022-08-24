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
      <button role="tab" onClick={() => handleChange(index)} tabIndex={selectedTab === index ? 0 : -1} ref ={tabRef}>{title}</button>
    )
  }

  export default Tab