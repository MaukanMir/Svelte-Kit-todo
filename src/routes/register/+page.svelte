<script>
// Svelte Component imports here
import Nav from "../../lib/Nav.svelte";
import Footer from "../../lib/Footer.svelte";
// Svelte store import here
import { userDataBase } from "../../stores/userDataBase";
import {userInfoDb} from "../../stores/userInfoDb";
import {userSession} from "../../stores/userSession";
//Svelte key componets here
import {onDestroy} from "svelte"
import { goto } from '$app/navigation'
import {get} from "svelte/store";


// console.log(userSession)

userSession.subscribe(storeValue => {
  if (storeValue.user) {
  }else{
    "no user"
  }

})

// Login variables here
let email = "";
let username ="";
let password ="";
// create error state

let error = false;

async function load(){
    if(username && email && password){
        goto("/")
    }
}

//Set user here
async function setUsername (auth){
if(auth ===200){
    load()
}
}

console.log(new Date());

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
        if(res.status === 201){

            userDataBase.set([username])
            userInfoDb.set([{
                
                _id:json._id,
                username:username,
                email:email,

            }])
            error = false;
        }else{
            error = true;
        }
    };

    // Create user stats here
    async function createUserStats(){
        if(error){return}
        const res = await fetch("http://localhost:5000/api/stats/" + username,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                username,
                goalCompleted:[
                    {
                    goal:"",
                    startDate:"",
                    endDate:"",
                    studyTime:0,
                    numberOfDays:0
                    }
                ],
                numberOfGoalsCompleted:0,
                hoursStudied:0,
                studyStreak:0
            })
        });
        const json = await res.json();
    }

    // Create user daily interval
    async function createUserInterval(){
        if(error){return}
        const res = await fetch("http://localhost:5000/api/streak/create/" + username,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                username,
                interval: new Date(),
                streak:0
            })
        });

        const json = await res.json();
        setUsername(res.status)

    }
    // Call create user account here
    createUser();
    // Call create user stats here;
    createUserStats();
    // Call createUser Interval Here
    createUserInterval()


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
    <p class = {error ? "display":"notDisplay"}> Invalid Credentials</p>
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
        background-color: #1e1e1e;
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
    color:blueviolet;
}

.inner-form input{
    padding:10px;
    border-radius: 10px;
    color:blueviolet;
}

.submit{
    border-radius: 10px;
    padding:10px;
    color:white;
    background-color: blueviolet;
}



.submit:hover{
    background-color: green;
    color:white;
}


.form-sub-title{
    text-align: center;
    margin-top:50px;
}

.display{
    color:red;
    text-align: center;
}

.notDisplay{
    display: None;
}

</style>