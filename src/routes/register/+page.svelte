<script>
// Svelte Component imports here
import Nav from "../../lib/Nav.svelte";
import Footer from "../../lib/Footer.svelte";
// Svelte store import here
import { userDataBase } from "../../stores/userDataBase";
import {onDestroy} from "svelte"
import { redirect } from '@sveltejs/kit';

// Set userDataBase Here


// Login variables here
let email = "";
let username ="";
let password ="";


async function load(){
    if(username && email && password){
        throw redirect(307, "/login")
    }
}

// Submit form here
const onSubmit = async () =>{

    // Create user information here
    async function createUser(){
        console.log(email,username, password)
        const res = await fetch("http://localhost:5000/api/auth/register",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                username,
                email,
                password
            })
        });
        const json = await res.json();
        const result = JSON.stringify(json);
        console.log(json, result)

        // user = json.username != undefined ? json.username:"";

        // userDataBase.update(item => {
        //     return [...user]
        // })
    }
    // Call function here
    createUser();
    load()


};

onDestroy(()=>{
        console.log("Recycled")
    });


</script>


<!--HTML COMPONENTS HERE-->
<body>
<Nav/>
<h1>Crossing Off Your Goals Begins Here!</h1>
<div class ="container">

    <form class ="form" on:submit|preventDefault={onSubmit}>
        <div class ="inner-form"> 
        <label for ="email">Email</label>
        <input
        type ="text"
        placeholder="email"
        required
        id ="email"
        bind:value={email}
        />
        </div>
        <div class ="inner-form"> 
        <label for ="username">Username </label>
        <input
        type ="text"
        placeholder="username"
        required
        id ="username"
        bind:value={username}
        />
        </div>
        <div class ="inner-form">
        <label for ="password">Password </label>
        <input
        type ="password"
        placeholder="password"
        required
        id ="password"
        bind:value={password}
        />
    </div>
    <button class ="submit">
        Sign Up
    </button>
    <p class ="form-sub-title">
        Already have an account? Sign in
        <a href="/login"> here </a>
    </p>
    </form>

</div>
</body>
<Footer/>


<style>
    body{
        background-color:gainsboro;
        background-color: #000036;
        height: 100vh;
    }

    h1{
        text-align: center;
        color:white;
    }

.container{
    display:flex;
    justify-content: center;

}

.form{
    display: flex;
    flex-direction: column;
    margin:20px;
    border: 2px solid whitesmoke;
    border-radius: 10px;
    padding:20px;
    background-color: white;
    height: 500px;
    width: 400px;
}

.inner-form {
    display:flex;
    margin:10px;
    flex-direction: column;

}

.inner-form label{
    margin-bottom:10px;
    font-size: 20px;
}

.inner-form input{
    padding:10px;
    border-radius: 10px;
}

.submit{
    border-radius: 10px;
    padding:10px;
    color:white;
    background-color: #000036;
}



.submit:hover{
    background-color: green;
    color:white;
}


.form-sub-title{
    text-align: center;
    margin-top:50px;
}

</style>