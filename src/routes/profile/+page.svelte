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

    //edit profile

    let editUsername = "";
    let editPassword ="";
    let editEmail ="";

    // API call here to edit user info
    const editUserInfo = async() =>{

        const editUser = async() =>{
        }

    };



</script>

<!--HTML Components Begin Here-->
<body>

    <Nav/>

    <div class ="welcome">
        
        <h1 class ="welcome-header">Welcome Back, {user}!</h1>
    </div>

    <div class ="container">

        {#if user}

        <form class="inside-container">

            <div class ="form">
                <label for ="editUsername">Edit Username</label>
                <input
                type="text"
                required
                placeholder="Username"
                bind:value={editUsername}
                />
            </div>

            <div class ="form">
                <label for ="editEmail">Edit Email</label>
                <input
                type="text"
                required
                placeholder="Email"
                bind:value={editEmail}
                />
            </div>

            <div class ="form">
                <label for ="editPassword">Edit Password</label>
                <input
                type="password"
                required
                placeholder="Password"
                bind:value={editPassword}
                />
            </div>
            <button class ="submit">Submit</button>
        </form>

        {/if}

    </div>


    <Footer/>
</body>


<style>
    body{
        height:100vh;
        background-color: #000036;
    }

    .welcome-header{
        color:white;
        text-align: center;
    }

    .container{
        display: flex;
        justify-content: center;
        margin:10px;
    }

    .inside-container{
        border-radius: 10px;
        justify-content: center;
        color:#000036;
        background-color: white;
        margin:10px;
        height:400px;
        width:400px;
    }

    .form{
        margin:15px;
        padding:5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .form input{
        border-radius: 10px;
        padding:10px;
        margin-top:10px;
    }

    .form label{
        font:20px;
    }

    .submit{
        display: flex;
        color:white;
        background-color: #000036;
        padding:10px;
        border-radius: 10px;
        width: 350px;
        justify-content: center;
        margin-left: 20px;
    }

    .submit:hover{
        background-color: green;
    }

</style>