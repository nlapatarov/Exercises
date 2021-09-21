import React, {useState} from 'react'

function HookCounterThree() {
    
    const [name, setName] = useState({firstName: "", lastName: ""})
    console.log(name);
    return (
        <div>
            <form>
                <input 
                type="text" 
                value={name.firstName} 
                onChange={e => setName({...name, firstName: e.target.value})}/>
                {/* без spread оператора след като данните в input полето за  firstName са попълнени и започнем да попълваме input полето за lastName, input полето за  firstName ще се изтрие. Със spread оператора казваме да се вземат всички стойности от name обекта */}
                
                <br />
               
                <input 
                type="text" 
                value={name.lastName} 
                onChange={e => setName({...name, lastName: e.target.value})}/>

                <h2>Your first name is {name.firstName} </h2>
                <h2>Your last name is {name.lastName} </h2>
            </form>
        </div>
    )
}

export default HookCounterThree
