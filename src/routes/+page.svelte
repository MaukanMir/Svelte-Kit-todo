
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
    <section class ="first">
        <div class ="inner">

            <h1>Go After Your Dreams</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolorum delectus eum ipsum at 
                odio, numquam non autem tenetur consequatur?</p>
        </div>
    </section>

    <div class ="separator"></div>

    <section class ="second">
        <div class ="inner">
            <h1>Studies Show</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolorum delectus eum ipsum at 
                odio, numquam non autem tenetur consequatur?</p>
        </div>
    </section>

    <section class ="third">
        <div class ="inner">
            <h1>Heres how you do it</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolorum delectus eum ipsum at 
                odio, numquam non autem tenetur consequatur?</p>
        </div>
    </section>

</div>

<Footer/>

</body>

<style>

    body{
        background-color: #000036;
        color:white;
    }


    .inner{
        max-width: 1200px;
        margin:auto;
    }

    section{
        min-height: 500px;
        padding: 45px 30px;
        border-radius: 10px;
        margin:20px;
    }

    .first{
        background-image: linear-gradient(
    170deg,
    hsl(0deg 22% 4%) 0%,
    hsl(342deg 55% 12%) 9%,
    hsl(326deg 84% 16%) 18%,
    hsl(311deg 100% 20%) 27%,
    hsl(316deg 100% 27%) 36%,
    hsl(350deg 71% 43%) 45%,
    hsl(34deg 100% 36%) 55%,
    hsl(67deg 93% 33%) 64%,
    hsl(151deg 95% 38%) 73%,
    hsl(178deg 100% 37%) 82%,
    hsl(196deg 100% 47%) 91%,
    hsl(203deg 100% 50%) 100%
);
    }

    h1{
        font-size: 3em;
        color:#fff;
    }

    .separator{
        width:0;
        height:0;
        border-right: 99vw solid transparent;
        background-color: #fff;
        border-bottom: 13.9vw solid red;
    }

    .second{
        background-image: linear-gradient(
    80deg,
    hsl(0deg 22% 4%) 0%,
    hsl(348deg 48% 10%) 10%,
    hsl(335deg 68% 14%) 20%,
    hsl(323deg 90% 17%) 30%,
    hsl(312deg 100% 20%) 40%,
    hsl(298deg 93% 23%) 50%,
    hsl(329deg 100% 32%) 60%,
    hsl(357deg 63% 45%) 70%,
    hsl(30deg 98% 37%) 80%,
    hsl(51deg 100% 33%) 90%,
    hsl(86deg 58% 45%) 100%
);
    }

    .third{
        /* background: linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%); */
        background-image: linear-gradient(
        355deg,
        hsl(240deg 100% 20%) 0%,
        hsl(311deg 100% 25%) 10%,
        hsl(334deg 100% 40%) 20%,
        hsl(6deg 98% 61%) 30%,
        hsl(37deg 100% 50%) 40%,
        hsl(55deg 100% 50%) 50%,
        hsl(42deg 81% 51%) 60%,
        hsl(30deg 63% 46%) 70%,
        hsl(19deg 51% 35%) 80%,
        hsl(8deg 38% 21%) 90%,
        hsl(0deg 22% 4%) 100%
);
    }




</style>

