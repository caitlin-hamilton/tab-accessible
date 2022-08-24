import React, { createRef, useEffect, useRef, useState } from 'react'
import Tab from './tab'

const Tabs = () => {
    const tabValues = [
       {
            title: "First tab",
            ref: useRef<HTMLButtonElement>(null)
          },
       {
            title: "Second tab",
            ref: useRef<HTMLButtonElement>(null)
          },
       {
            title: "Third tab",
            ref: useRef<HTMLButtonElement>(null)
          },
        ]
  
    const [selectedTab, setSelectedTab] = useState(0)
    const handleClick = (index: number) => setSelectedTab(index) 

    useEffect(() => {
        const doSomething = (event: KeyboardEvent) => {
            if(event.key === 'ArrowRight' && selectedTab < 2){
                let ref1 = tabValues[selectedTab + 1].ref.current
                if(ref1 !== null){
                    ref1.focus()
                    setSelectedTab(selectedTab + 1)
                }
            } 
            else if(event.key === 'ArrowLeft' && selectedTab > 0){
                let ref1 = tabValues[selectedTab - 1].ref.current
                if(ref1){
                    ref1.focus()
                    setSelectedTab(selectedTab - 1)
                }
            }
        }
        document.addEventListener('keydown', doSomething)
        
    })
    return (   
         <div role="tablist">
            <Tab
                id="firstTab"
                index={0}
                handleChange={handleClick}
                selectedTab={selectedTab}
                title={tabValues[0].title}
                tabRef={tabValues[0].ref}
            />
           <Tab
             id="secondTab"
             index={1}
             handleChange={handleClick}
             selectedTab={selectedTab}
             title={tabValues[1].title}
             tabRef={tabValues[1].ref}
           />
           <Tab
             id="thirdTab"
             index={2}
             handleChange={handleClick}
             selectedTab={selectedTab}
             title={tabValues[2].title}
             tabRef={tabValues[2].ref}
           />
           </div>
    )
  }

export default Tabs