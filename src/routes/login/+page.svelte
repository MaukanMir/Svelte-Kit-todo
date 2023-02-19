<script>
    // Svelte Component imports here
    import Nav from "../../lib/Nav.svelte";
    import Footer from "../../lib/Footer.svelte";
    
    
    // Login variables here

    let username ="";
    let password ="";
    
    // Submit form here
    const onSubmit = async () =>{
    
        // Create user information here
        async function createUser(){
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
            console.log(json, result)
            console.log(json.username)
        }
        // Call function here
        createUser();
    
    };
    
    
    </script>
    
    
    <!--HTML COMPONENTS HERE-->
    <body>
    <Nav/>
    <h1>Welcome Back!</h1>
    <div class ="container">
    
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
        <button class ="submit">
            Login
        </button>
        <p class ="form-sub-title">
            Have you not made an account? Register
            <a href="/register"> here </a>
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
        height: 400px;
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
        background-color: #000036;
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