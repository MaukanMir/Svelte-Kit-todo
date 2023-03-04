<script>
    // Svelte store import here
    import {userDataBase} from "../stores/userDataBase"

    
</script>

<body>
<nav class ="test">
    {#each $userDataBase as user}
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
    {/each}
</nav>
</body>

<style>

    body{
        font-family: sans-serif;
    }
    .test{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        background-color: #1e1e1e;;
        padding: 20px;
        height:100px;
    }

    .test a{
        text-decoration: none;
        font-size: 1.5rem;
        color:white;
    }

    a:hover{
        color: 	#7F00FF;
    }

    .dropdown{
        display:none;
        list-style: none;
    }

    .dropdown:hover{
        display: flex;
        flex-direction: column;
        margin:10px;
        background-color: #fff;
    }

</style>