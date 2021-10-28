import React, { useState } from 'react'
import 'axios'

const OurTeam = (props) => {
    var axios = require("axios").default;
    var name = props.name
    const [data,setData] = useState({})

    var options = {
    method: 'GET',
    url: `https://api.agify.io?name=${name}`,
    };

    const calcAge = ()=>{
        axios.request(options).then(function (response) {
            console.log(response.data);
            let newData = response.data
            setData(newData)
        }).catch(function (error) {
            console.error(error);
         });
    }

    
    return (
        <div>
            <button onClick={calcAge}></button>
            <h1>{data.age}</h1>
        </div>
    )
}

export default OurTeam