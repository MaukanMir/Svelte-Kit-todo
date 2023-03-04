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
                <li><a href="/goals">Create Goals</a></li>
                <li><a href="/editgoals">Edit Goals</a></li>
                <li><a href="/goalstats">Stats</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
            </ul>
        </div>
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
        justify-content: space-evenly;
        align-items: center;
        position:absolute;
        left: -90px;
        width: 200px;
        height:200px;
    }

    .goals{
        position: relative;
    }

    .goals ul a{
        text-decoration: none;
        color:#fff;
        opacity: 1;
        font-size: 1.5em;
    }

    .goals button:focus + ul{
        opacity: 1;
        pointer-events: all;
        transform: translateY(0px);
        z-index: -1;
    }

    /* .goals a:hover{
        color:blueviolet;
        cursor: pointer;
    } */






</style>