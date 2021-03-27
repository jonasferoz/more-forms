import React, {useState} from 'react';


const Form = () => {
    const [firstName,setfirstName] = useState("");
    const [lastName,setlastName] = useState("");
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [confirmPass,setconfirmPass] = useState("");

    const errorStyle = {
        fontSize: '70%',
    };





    return(
        <div>
            <form onChange={(e)=>e.preventDefault}>
                <p>First Name <input onChange={(e)=>setfirstName(e.target.value)}/></p>
                {
                    firstName.length !== 0 ?
                    (firstName.length < 2 ?
                        <p style={errorStyle}>First Name must be at least 2 characters</p> :
                        <p></p>):
                    <p></p>
                    

                }
                

                <p>Last Name <input onChange={(e)=>setlastName(e.target.value)}/> </p> 
                {
                    lastName.length !== 0 ?
                    (lastName.length < 2 ?
                    <p style={errorStyle}>Last Name must be at least 2 characters</p> :
                    <p></p>):
                    <p></p>

                }


                <p>Email <input onChange={(e)=>setemail(e.target.value)}/> </p> 
                {
                    email.length !==0?
                    (email.length < 5 ?
                    <p style={errorStyle}>Email must be at least 5 characters</p> :
                    <p></p>):
                    <p></p>
                }


                <p>Password <input onChange={(e)=>setpassword(e.target.value)}/> </p>
                {
                    password.length !==0?
                    (password.length < 8 ?
                    <p style={errorStyle}>Password must at least 8 characters</p> :
                    <p></p>):
                    <p></p>
                }


                <p>Confirm Password <input onChange={(e)=>setconfirmPass(e.target.value)}/> </p> 
                {
                    confirmPass.length !==0?
                    (confirmPass.length < 8 ?
                    <p style={errorStyle}>Password must at least 8 characters</p> :
                    
                        confirmPass !== password ?
                        <p style={errorStyle}>Passwords must match</p> :
                        <p></p>):
                        <p></p>
                }




            </form>




        </div>
    )
}
export default Form;