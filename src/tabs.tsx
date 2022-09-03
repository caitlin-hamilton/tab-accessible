import React, { createRef, useEffect, useRef, useState } from 'react'
import Tab from './tab'

const Tabs = () => {
    const tabValues = [
       {
            title: "First tab",
            ref: useRef<HTMLDivElement>(null),
            children: <h2>I am the first tab</h2>
          },
       {
            title: "Second tab",
            ref: useRef<HTMLDivElement>(null),
            children: <h2>I am the second tab</h2>
          },
       {
            title: "Third tab",
            ref: useRef<HTMLDivElement>(null),
            children: <h2>I am the third tab</h2>
          },
        ]
  
    const [selectedTab, setSelectedTab] = useState(0)
    const handleSelect = (index: number) => {
        setSelectedTab(index) 
        tabValues[index].ref.current?.focus()
            
    }
    return (   
         <div role="tablist">
            <Tab
                id="firstTab"
                index={0}
                handleChange={handleSelect}
                selectedTab={selectedTab}
                title={tabValues[0].title}
                tabRef={tabValues[0].ref}
                children={tabValues[0].children}
            />
           <Tab
             id="secondTab"
             index={1}
             handleChange={handleSelect}
             selectedTab={selectedTab}
             title={tabValues[1].title}
             tabRef={tabValues[1].ref}
             children={tabValues[1].children}
           />
           <Tab
             id="thirdTab"
             index={2}
             handleChange={handleSelect}
             selectedTab={selectedTab}
             title={tabValues[2].title}
             tabRef={tabValues[2].ref}
             children={tabValues[2].children}
           />
           </div>
    )
  }

export default Tabs