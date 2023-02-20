<script>
    // import svelte componets here
    import Nav from "../../lib/Nav.svelte";
    import Footer from "../../lib/Footer.svelte";
    // import svelte store componets here
    import {userDataBase} from "../../stores/userDataBase";
    import {get} from "svelte/store";

    let user = get(userDataBase)[0];

    //edit profile

    let editUsername = "";
    let editPassword ="";
    let editEmail ="";



</script>

<!--HTML Components Begin Here-->
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
    }




</style>