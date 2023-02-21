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

    let user = get(userDataBase)[0];
    let userInfo = get(userInfoDb)[0]
    console.log(get(userDataBase));
    console.log(get(userInfoDb));

    //edit profile

    let editUsername = "";
    let currentPassword ="";
    let editEmail ="";

    // API call here to edit user info
    const editUserInfo = async() =>{

        const editUser = async() =>{
            // Fetch user information from DB
            const res = await fetch("http://localhost:5000/api/user/" + userInfo._id,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    id: userInfo._id,
                    username:editUsername,
                    email:editEmail,
                    password:currentPassword,
                })
            });
            const json = await res.json();
            const result = JSON.stringify(json);
            console.log(result)
            // save user info here
            const userUpdateInfo =[
                {
                    _id:json._id,
                    username:json.username,
                    email:json.email
                }
            ]
            // Set svelte stores with updated user information
            userInfoDb.set(userUpdateInfo);
            userDataBase.set([userUpdateInfo[0].username])
        }

    };

</script>

<!--HTML components here-->
<body>
<Nav/>

<div class ="container">

    {#if user}
    <form class="inside-container">

        <div class ="form">
            <label for ="editUsername">Edit Username</label>
            <input
            type="text"
            required
            placeholder={userInfo.username}
            bind:value={editUsername}
            />
        </div>

        <div class ="form">
            <label for ="editEmail">Edit Email</label>
            <input
            type="text"
            required
            placeholder={userInfo.email}
            bind:value={editEmail}
            />
        </div>

        <div class ="form">
            <label for ="currentPassword">Current Password</label>
            <input
            type="password"
            required
            placeholder="Password"
            bind:value={currentPassword}
            />
        </div>
        <button class ="submit">Save</button>
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
        margin:20px;
        height:500px;
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