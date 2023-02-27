import React from 'react'
import "./Collapce.css"
import useCollapse from 'react-collapsed'


const Collapce = (props) => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
  return (
    <div className='collapce'>
       <span className='span2'><img src={props.img}/></span> <span className='span-collapce'>clothes</span><button className='btn-collapce'{...getToggleProps()}>
          {isExpanded ? '-' : '+'}
          </button>
          <section {...getCollapseProps()}>
          <hr style={{"width":"85%"}}/>
            <ul className='list-category'>
             <li><a className='a-collapce'>{props.title1}</a></li>
             <li><a className='a-collapce'>{props.title2}</a></li>
             <li><a className='a-collapce'>{props.title3}</a></li>
             <li><a className='a-collapce'>{props.title4}</a></li>
            </ul>
          
          
         </section>


         

        </div>

  )
}

export default Collapce