import React, { createRef, useEffect, useRef, useState } from 'react'
import Tab from './tab'

const Tabs = () => {
    const tabValues = [
       {
            title: "First tab",
            ref: useRef<HTMLDivElement>(null)
          },
       {
            title: "Second tab",
            ref: useRef<HTMLDivElement>(null)
          },
       {
            title: "Third tab",
            ref: useRef<HTMLDivElement>(null)
          },
        ]
  
    const [selectedTab, setSelectedTab] = useState(0)
    const [focusTab, setFocusTab] = useState(0)
    const handleClick = (index: number) => setSelectedTab(index) 

    

    useEffect(() => {
        const doSomething = (event: KeyboardEvent) => {
            console.log(event.key)
            console.log(selectedTab)
            if(event.key === 'ArrowRight' && selectedTab < 2){
                console.log('right', selectedTab)
                if(tabValues[1].ref.current !== null){
                    console.log('right focus')
                    tabValues[1].ref.current.focus()
                    setFocusTab(selectedTab + 1)
                }
            } 
            else if(event.key === 'ArrowLeft' && selectedTab > 0){
                console.log('left', selectedTab)
                let ref1 = tabValues[selectedTab - 1].ref.current
                if(ref1){
                    console.log('left focus')
                    ref1.focus()
                    setFocusTab(selectedTab - 1)
                }
            }
            else if(event.key === 'Enter'){
                setSelectedTab(focusTab)
            } 
        }
        document.addEventListener('keydown', doSomething)
        
    }, [tabValues[0].ref.current, tabValues[1].ref.current, tabValues[2].ref.current, focusTab])
    return (   
         <div role="tablist">
             <div ref={tabValues[0].ref}>
            <Tab
                id="firstTab"
                index={0}
                handleChange={handleClick}
                selectedTab={selectedTab}
                title={tabValues[0].title}
            />
           </div>
           <div ref={tabValues[1].ref}>
           <Tab
             id="secondTab"
             index={1}
             handleChange={handleClick}
             selectedTab={selectedTab}
             title={tabValues[1].title}
           />
           </div>
           <div ref={tabValues[2].ref}>
           <Tab
             id="thirdTab"
             index={2}
             handleChange={handleClick}
             selectedTab={selectedTab}
             title={tabValues[2].title}
           />
           </div>
           </div>
    )
  }

export default Tabs