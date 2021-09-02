import React, { useEffect, useState } from 'react'

const Menu = ({items}) => {
    const [alert,setAlert] = useState(false);

    // useeffect for timeOut
    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            setAlert(false)
        },3000)
        return () => clearTimeout(timeOut)
    },[alert])



    return (<>
    
        {items.map((i)=>{
            const {id,title,category} = i;
            
            return(
                
                <div className="card" key={id} style={{margin:"20px", width:"200px", cursor:"grab", backgroundColor: alert && "rgba(4, 161, 4, 0.507)"}} onClick={()=>{navigator.clipboard.writeText(category)
                setAlert(true)}}>
                    <h1>{title}</h1>
                    <h4 className={alert && "link-primary"}>{category}</h4>
                    {alert && <p>COPIED</p>}

                </div>
                
            )
        })}
        
    </>)
}

export default Menu;