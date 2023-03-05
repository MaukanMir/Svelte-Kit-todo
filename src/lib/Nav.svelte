<script>
    // Svelte store import here
    import {userDataBase} from "../stores/userDataBase"

    
</script>

<body>
<nav>

    <div class="nav">
        <button> <a href="/" class ="home">Home</a></button>

        <div class="goals">
            <button>Goals</button>
            <ul>
                <div class="check"> </div>
                <li><a class ="link" href="/goals">Goals</a></li>
                <li><a class ="link" href="/creategoals">Create Goal</a></li>
                <li><a class ="link" href="/editgoals">Edit Goals</a></li>
                <li><a class ="link" href="/goalstats">Stats</a></li>
            </ul>
        </div>

        {#each $userDataBase as user}

        <div class="goals">
            <button>{user ? user[0].toUpperCase() + user.substring(1): "Login"}</button>
            <ul>
                <div class="check"> </div>
                <li><a class ="link" href="/login">Profile</a></li>
            </ul> 
        </div>

        {/each}


    </div> 




    <!-- {#each $userDataBase as user}
    <a href="/">GoalsCrusher</a>
    <a href="/goals">Goals</a>
    <ul class ="dropdown">
    <li> <a href="/editgoals">Edit Goals</a> </li>
    <li> <a href="/creategoals">Create Goals</a> </li>
    <li> <a href="/goalstats">Goal Stats</a> </li>
    {#if !user}
    <li> <a href="/register">Register</a> </li>
    {:else if user}
    <li> <a href="/profile">{user[0].toUpperCase() + user.substring(1)}</a> </li>
    {:else}
    <li> <a href="/login">Login</a> </li>
    {/if}
    </ul>
    {/each} -->
</nav>
</body>

<style>

    body{
        font-family: sans-serif;
        margin:0px;
        padding:0px;
    }

    .nav{
        display:flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin:auto;
        margin-bottom: 150px;
    }

    .home, .goals button{
        background-color:#1e1e1e;
        border:none;
        cursor: pointer;
        font-size: 2em;
        color:#fff;
        text-decoration: none;
        cursor: pointer;
    }

    button{
        background-color: #1e1e1e;
        border:none;
    }

    .goals ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        position:absolute;
        left: -20px;
        width: 110px;
        height:110px;
        padding:20px;
        color:blueviolet;
    }

    .goals{
        position: relative;
        color:blueviolet;
    }

    .goals ul{
        opacity:0;
    }

    .link{
        text-decoration: none;
    }

    .goals ul {
        /* opacity: 0; */
        color:blueviolet;
        font-size: 1.1em;
        border-radius: 10px;
        height:110px;
        width:100px;
    }

    .goals button:focus + ul{
        opacity: 1;
        pointer-events: all;
        transform: translateY(0px);
        color:blueviolet;
        background-color: #fff;
    }

    .goals ul:hover{
        background-color: #fff;
        color:blueviolet;
        opacity:1;
    }

    .link:hover{
        color:blueviolet;
        opacity: 1;
    }













</style>