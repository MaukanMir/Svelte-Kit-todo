
<script>
    // import components here
    import Nav from "../lib/Nav.svelte";
    import Footer from "../lib/Footer.svelte"
    // svelte components imported here
    import {onMount} from "svelte";
    // Svelte store import here
    import {userDataBase} from "../stores/userDataBase";
    import {get} from "svelte/store"
    // Svelte routing imports here
    import { goto } from '$app/navigation'

    const user = get(userDataBase)[0]
    console.log(user)
    console.log("user is" + user)
    // Dates
    let currentTime = new Date(new Date().toISOString().slice(0,10)).getTime();
    let oneDay = (1000 * 3600 * 24);
    /**
   * @type {any[]}
   */
    let posts = [];

    // As soon as the page loads, goals will be viewed.
    onMount(async ()=>{
        // API Call HERE
        if(user){
            const res = await fetch("http://localhost:5000/api/getgoals/find/" + user);
        // load in data to variable
        posts = await res.json();
        }
    });

    // Check in button fix here
    const onCheck = async(username,id) =>{

    };

    const onSubmit = async (username, id)=>{


    };

</script>
<body>
<Nav/>

<div class ="container">

    <div class ="grid-item">1</div>
    <div class ="grid-item">2</div>
    <div class ="grid-item">3</div>
    <div class ="grid-item">4</div>
    <div class ="grid-item">5</div>
    <div class ="grid-item">6</div>
    <div class ="grid-item">7</div>
</div>

<Footer/>

</body>

<style>

    body{
        background-color: #000036;
        color:white;
    }

    .container{
        display: grid;
        column-gap: 10px;
    }



</style>

