import React from "react";

interface Props {
  navItems: string[],
  gotoPage: (s: string) => void
}

export default function Navigation({ navItems, gotoPage }: Props) {

  

  return(
    <>
    <ul className="pl-5 pr-10 pb-5  bg-teal-300 flex flex-col">
      {
        navItems.map( ( item, index ) => (
          <li key={index} className="" onClick={
              (e) =>{ 
                gotoPage(e.currentTarget.innerText) 
              }
            }
          >{item}</li>
        ))
      }
    </ul>
    </>
  );
}
