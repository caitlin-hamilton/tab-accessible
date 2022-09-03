import React, { RefObject } from 'react'

interface Props {
    id: string
    index: number
    selectedTab: number
    title: string
    handleChange: (index: number) => void
    tabRef: RefObject<HTMLDivElement>
    children: JSX.Element
}
const Tab = ({index, selectedTab, title, handleChange, tabRef, children } : Props) => {
    return (
<div>
      <button role="tab" onClick={() => handleChange(index)} onKeyDown={(keyEvent) => { if(keyEvent.key === 'Enter'){ handleChange(index)}}}>{title}</button>
      {selectedTab === index && (<div tabIndex={-1} ref={tabRef}>{children}</div>)}
      </div>
      )
  }

  export default Tab