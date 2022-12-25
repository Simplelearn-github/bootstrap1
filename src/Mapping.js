import React from 'react'

export const Mapping = () => {
    const Student=[
        {
            id:101,
            name:"Naveen",
            mail:"naveenkonakati143@gmail.com"
        },
        {
            id:102,
            name:"Prashanth",
            mail:"prashu67@gmail.com"
        },
        {
            id:103,
            name:"Basheer",
            mail:"basheermd@gmail.com"
        },
        {
            id:104,
            name:"Nirosha",
            mail:"nirosha@gmail.com"
        },
        {
            id:105,
            name:"Muthireddy",
            mail:"muthireddy@gmail.com"
        }
    ]
    return(
        <div>
            {
                Student.map((stu)=>{
                    return(
                        <h1 key={stu.id}>Id is:<b style={{color:"red"}}>{stu.id} </b>&nbsp;&nbsp;Name is <b style={{color:"red"}}>{stu.name} </b>&nbsp;&nbsp;Mail Id:<b style={{color:'red'}}>{stu.mail}</b></h1>
                    )
                }
                )
            }




        </div>
    )
}
