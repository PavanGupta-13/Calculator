import React,{useState,useEffect} from 'react'

const Title = () => {

    const [flag, setFlag] = useState(false)
    useEffect(() => {
        let glowTxt = setInterval(()=>{
            setFlag(!flag)
        },2000)
        return () => {
            clearInterval(glowTxt)
        }
    }, [flag])

    return (
        <div>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@300&display=swap" rel="stylesheet"></link>
            <div style={{display:"flex", backgroundColor:"#BD97CB", paddingLeft:"20px"}}>
            <h1 className="display-1" style={{fontFamily:"Gemunu Libre"}}>PROJ</h1>
            <h1 className="display-1" style={{fontFamily:"Gemunu Libre", color:"#F8D210"}}>i</h1>
            <h1 className="display-1" style={{fontFamily:"Gemunu Libre"}}>L</h1>
            <h3 style={{marginLeft:"auto", marginRight:"20px", color:flag && "#F8D210"}}>Lighten your street</h3>
            </div>
        </div>
    )
}


export default Title

// font-family: 'Gemunu Libre', sans-serif;