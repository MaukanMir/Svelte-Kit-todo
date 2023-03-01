<script>
    //Component imports here
    import Nav from "../../lib/Nav.svelte";
    import Footer from "../../lib/Footer.svelte"
    // import icons here
    import FaTrashAlt from 'svelte-icons/fa/FaTrashAlt.svelte'
    // import svelte variables here
    import { onMount } from "svelte";
    //Svelte store components import here
    import {get} from "svelte/store";
    import {userDataBase} from "../../stores/userDataBase";
    // svelte nav imports here
    import {goto} from "$app/navigation"
    // Icon imports here
    import TiChevronLeft from 'svelte-icons/ti/TiChevronLeft.svelte'
    import TiChevronRight from 'svelte-icons/ti/TiChevronRight.svelte'

    const user = get(userDataBase)[0];
    let carouselIndex =0;

    async function load(){
        if(!user){goto("/register")}
    }

    load()

    /**
   * @type {any[]}
   */
    let posts = [];
    let toggle = false;

    
    onMount(async ()=>{
        if(user){
        
        // API Call to load in dataset
        const res = await fetch("http://localhost:5000/api/getgoals/find/" + user);
        // load in data to variable
        posts = await res.json();
        }
        else{
            toggle = !toggle;
        }

    });

    // Delete task functionality 
    async function deleteTask(/** @type {number} */ id){
        // Find deleted post
        const deletedpost = posts.filter(item=> item.id === id);
        //Filter posts here
        posts = posts.filter(item => item.id != id)
        console.log(deletedpost)
        // update database here
        const res = await fetch("http://localhost:5000/api/deletegoals/" + deletedpost[0]._id, {
            method: 'DELETE'
        }).then(response =>{
            if(!response.ok){console.log("opps")}
            else{console.log("success");}
        })
    };

    // Carousel back and fourth functionality

    const carousel = (index, direction)=> {

        if(direction === "left"){
            carouselIndex = index === 0 ? 0: carouselIndex-1
        }

        else if(direction === "right"){
            carouselIndex = index === posts.length -1 ? posts.length-1: carouselIndex+1
        }

    };

</script>
<body>
<Nav/>

<h1 class ="carousel-header">Tasks To Complete Today</h1>
<div class ="carousel">

    <button class ="l-btn" on:click={()=> carousel(carouselIndex,"left")}> <TiChevronLeft/> </button>
    <div class ="slide-show">
        <h2>Goal: { posts.length >0 ? posts[carouselIndex].goal: "Loading"}</h2>
        <h2>Hours practicing per a day: { posts.length >0 ? posts[carouselIndex].studyTime: "Loading"}</h2>
        <h2>Start Date: {posts.length >0 ? posts[carouselIndex].date: "Loading"} </h2>
        <h2>Due Date:{posts.length >0 ? posts[carouselIndex].setDate: "Loading"}</h2>
        <button class ="delete-carousel" on:click={() => deleteTask( posts.length >0 ? posts[carouselIndex].id :"Loading")}> <FaTrashAlt/> </button>

    </div>
    <button class ="r-btn" on:click={()=> carousel(carouselIndex,"right")}> <TiChevronRight/></button>
</div>

<div class ="tasks">
    <h1>Tasks To Complete Today:</h1>
    {#each posts as task}
    <div class ="inside-tasks"> 
    <h2>Goal: {task.goal}</h2>
    <h2>Hours practicing per a day: {task.studyTime}</h2>
    <h2>Start Date: {task.date}</h2>
    <h2>Due Date: {task.setDate}</h2>
    <button class ="delete" on:click={() => deleteTask(task.id)}> <FaTrashAlt/> </button>
    </div>
    {/each}
</div>
<Footer/>
</body>

<style>
    body{
        background: color #1e1e1e;
        font-family: sans-serif;
    }

    .carousel-header{
        text-align: center;
        margin-top:100px;
    }

    .carousel{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .slide-show{
        background-color: #fff;
        height: 600px;
        width: 600px;
        border-radius: 10px;
        color:blueviolet;
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* align-items: center; */
    }

    .slide-show h2{
        border-bottom: 3px solid blueviolet;
        margin: 20px 20px;
    }

    .delete-carousel{
        color:#1e1e1e;
        background-color: #fff;
        border:none;
        height: 80px;
        cursor: pointer;
        /* margin-right: 500px; */
    }

    .delete-carousel:hover{
        color:red;
    }


    .r-btn, .l-btn{
        height: 70px;
        width:100px;
        background-color: blueviolet;
        color:white;
        border-radius: 5px;
        border:none;
        margin: 0px 20px;
        cursor: pointer;
    }

    .r-btn:hover, .l-btn:hover{
        color:blueviolet;
        background-color: #fff;
    }
    .tasks h1{
        font-size: 32px;
        margin:10px;
    }

    .tasks{
        display:flex;
        flex-direction: column;
        margin:20px;
        border-radius: 20px;
        color:#fff;
    }

    .inside-tasks{
        border: 2px solid blueviolet;
        margin:10px;
        padding:10px;
        border-radius: 10px;
        color:#fff;
    }

    .delete{
        color: #fff;
        border:none;
        height: 30px;
        background-color:#1e1e1e;
    }

    .delete:hover{
        color:red;
    }
</style>