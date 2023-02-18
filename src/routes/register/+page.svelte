<script>
// Svelte Component imports here
import Nav from "../../lib/Nav.svelte";
import Footer from "../../lib/Footer.svelte";


// Login variables here
let email = "";
let username ="";
let password ="";
</script>


<!--HTML COMPONENTS HERE-->
<body>
<Nav/>
<h1>Crossing Off Your Goals Begins Here!</h1>
<div class ="container">

    <form class ="form">
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
    <button class ="submit">Sign Up</button>
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
        height: 100vh;
    }

    h1{
        text-align: center;
        color:#000036;
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