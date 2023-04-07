<script>
    // Svelte Component imports here
    import Nav from "../../lib/Nav.svelte";
    import Footer from "../../lib/Footer.svelte";
    // Svelte store import here
    import { userDataBase } from "../../stores/userDataBase";
    import {userInfoDb} from "../../stores/userInfoDb"
    import {userSession} from "../../stores/userSession";
    //Svelte key componets here
    import {onDestroy} from "svelte"
    import { goto } from '$app/navigation'
    import {get} from "svelte/store";

    //Set user Database here
let toggle = false;
// user login information
let authenticated = false;

    //user authenticate 
    function login(metaData){
        // Update user information here
        userSession.update(value =>{
            return {...value, user:metaData};
        })
    }
    
    // Login variables here
    let username ="";
    let password ="";

    // error state
    let error =""

    // Reroute user here
    async function load(){
        if(username && password){
            goto("/goalstats")
        }
    }
    // Submit form here
    const onSubmit = async () =>{
    
        // Create user information here
        async function createUser(){
            try{
            // Fetch user information from DB
            const res = await fetch("http://localhost:5000/api/auth/login",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    username,
                    password
                })
            });


            const json = await res.json();
            const result = JSON.stringify(json);
            console.log(result)
            if(res.status === 200){

            //Printing information here
            console.log(res.status)
            toggle = false;
            console.log(json)
            // Grab user data here
            const metaData ={
                user:json.username,
                _id:json._id,
                email:json.email,
                authenticated:true
            };

            console.log(metaData);

            // Login information here
            login(metaData);

                // save user info here
            // userInfo =[
            //     {
            //         _id:json._id,
            //         username:json.username,
            //         email:json.email
            //     }
            // ]

    
            // userInfoDb.set(userInfo);
            // // Set store global state to user
            // userDataBase.set([username]);
            // // Reroute user to home page
            load();

            // User login with local store here store here
            
            }else{
                toggle = true;
            }
    
        }
        catch(err){
            console.log(err)
            toggle = true;
        }
    };
    // Call function here
    createUser();
};



    </script>
    
    <!--HTML COMPONENTS HERE-->
    <body>
    <Nav/>
    <h1>Welcome Back!</h1>
    <div class ="container">
        {#if error ==="Wrong credentials!"}
        <h3 class ="display">{error}</h3>
        {:else}
        <form class ="form" on:submit|preventDefault={onSubmit}>
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
        <p class = {toggle ? "display":"hide"}>Invalid Credentials</p>
        <button class ="submit">
            Login
        </button>
        <p class ="form-sub-title">
            Have you not made an account? Register
            <a href="/register"> here </a>
        </p>
        </form>
    {/if}
    </div>
    </body>
    <Footer/>
    <style>
    

        .hide{
            display: none;
        }

        .display{
            color:red;
            text-align: center;
        }
        body{
            background-color: #1e1e1e;
            height: 100vh;
            font-family: sans-serif;
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
        height: 400px;
        width: 400px;
        color:blueviolet;
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
        color:blueviolet;
    }
    
    .submit{
        border-radius: 10px;
        padding:10px;
        background-color: blueviolet;
        color:white;
        font-size: 16px;
    }
    
    
    .submit:hover {
        background-color: green;
        color:white
    }
    
    .form-sub-title{
        margin-top: 40px;
        text-align: center;
    }
    </style>