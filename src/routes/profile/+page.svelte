<script>
    // import svelte componets here
    import Nav from "../../lib/Nav.svelte";
    import Footer from "../../lib/Footer.svelte";
    // import svelte store componets here
    import {userDataBase} from "../../stores/userDataBase";
    import {userInfoDb} from "../../stores/userInfoDb";
    import {get} from "svelte/store";
    // svelte components here
    import {onMount} from "svelte";
    import {goto} from "$app/navigation";
    import FaUserEdit from 'svelte-icons/fa/FaUserEdit.svelte'

    let user = get(userDataBase)[0];
    let userInfo = get(userInfoDb)[0]
    console.log(get(userDataBase))
    console.log(get(userInfoDb))

    //Get all user information here
    onMount(async ()=>{
        if(user){
            const res = await fetch("http://localhost:5000/api/user/find/" + userInfo._id);
            userInfo = await res.json();
        }
    })

    async function load(){
        goto("/login");
    }

    async function loadPage(){
        goto("/editprofile");
    }


    const signOut = ()=>{

        const signOutUser =[
                {
                    _id:"",
                    username:"",
                    email:""
                }
            ]
        // Set svelte stores to null
        userInfoDb.set(signOutUser);
        userDataBase.set([""]);
        // redirect user to login page
        load()
    };



</script>

<!--HTML Components Begin Here-->
<body>

    <Nav/>

    <div class ="welcome">
        <h1 class ="welcome-header">Welcome Back, {user[0].toUpperCase() + user.substring(1)}!</h1>
    </div>
    <div class ="center"> 
    <div class ="profile">
        <h2>Current User Settings:</h2>
        <h3>Username: {userInfo.username}</h3>
        <h3>Email: {userInfo.email}</h3>
        <h3>Goals Completed: 0</h3>
        <h3> Max Study Streak: </h3>
        <h3>Edit Profile Below:</h3>
        <div class="edit-container"> 
        <button class="edit-icon" on:click={()=> loadPage()}> <FaUserEdit/> </button>
        <button class ="signout" on:click={() => signOut()}>Log Off</button>
        </div>
    </div>
</div>

    <Footer/>
</body>


<style>
    body{
        height:100vh;
        background-color: #1e1e1e;
        font-family: sans-serif;
    }

    .welcome-header{
        color:white;
        text-align: center;
    }

    .center{
        display: flex;
        justify-content: center;
    }

    .edit-icon{
        display: flex;
        justify-content: center;
        height:100px;
        width: 100px;
        margin-left:10px;
        cursor: pointer;
        background-color: white;
        border:none;
        color:blueviolet;
    }

    .edit-icon:hover{
        color:green;
    }

    .profile{
        display: flex;
        flex-direction: column;
        color:blueviolet;
        background-color: white;
        border-radius: 10px;
        height: 650px;
        width:500px;

    }

    .profile h2, h3{
        margin:20px;
        border-bottom: 3px solid blueviolet;
        padding:5px;
    }

    .signout{
        background-color: green;
        color:white;
        padding:10px;
        margin:10px;
        border-radius: 10px;
        width:200px;
        font-size: 16px;
        border: white;
    }

    .signout:hover{
        background-color: red;
    }

    .edit-container{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }


</style>