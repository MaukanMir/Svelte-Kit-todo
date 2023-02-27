
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

    import IoIosArrowRoundForward from 'svelte-icons/io/IoIosArrowRoundForward.svelte'


</script>
<body>
<Nav/>

<div class ="container">

    <section class ="header">
        <h1 class ="header-h1">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Molestias nesciunt ducimus sit..</h1>
            <p class ="p-tag">We broke the code to make your life easier</p>
    </section>

    <div class="card-container">
        <div class="inner-l">
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, reiciendis.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam 
                similique dolorum commodi eligendi 
                sit dicta, sed modi nulla amet? Deleniti.</p>

            <div class="wrap-icon"> 
            <button class ="inner-button-l">
                <div class ="arrow-icon"> 
                <span>Login</span>
                <IoIosArrowRoundForward/>
                </div>
            </button>
            </div>
        </div>

        <div class="inner-r">
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, reiciendis.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam 
                similique dolorum commodi eligendi 
                sit dicta, sed modi nulla amet? Deleniti.</p>
            <div class="wrap-icon"> 
            <button class ="inner-button-r">
                <div class ="arrow-icon"> 
                    <span>Register</span>
                    <IoIosArrowRoundForward/>
                    </div>
            </button>
            </div>
        </div>

        <div class ="text-divder">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias repellendus tempore
            <br>
            <br>
            cum in, quidem libero facilis qui consequuntur magni voluptatibus. 
            Quia ipsa deserunt 
            accusamus magni? Harum dolor quis nam excepturi?</p>

        </div>

    </div>


</div>

<Footer/>

</body>

<style>

    body{
        background-color: #1e1e1e;
        color:white;
        font-family: sans-serif;
    }

    .header{
        margin:20px;
    }

    .header-h1{
        font-size: 2.5em;
        width:400px;
        margin-left: 90px;

    }
    .p-tag{
        margin-left: 90px;
    }

    .card-container{
        display: flex;
        justify-content: space-evenly;
        margin-top: 90px;
    }

    .inner-l h3, .inner-r{
        width:300px;
    }

    .inner-l p, .inner-r p{
        width:300px;
    }

    .inner-l{
        border: 2px solid blue;
        padding:20px;
        height: 300px;
    }

    .inner-r{
        border: 2px solid #F75D59;
        padding:20px;
        height:300px;
    }


    .inner-button-l{
        padding: 10px;
        background-color: blue;
        color:#fff;
        border:none;
        border-radius: 5px;
        margin-top: 20px;
        cursor: pointer;
        width:200px;
    }

    .inner-button-r{
        padding: 10px;
        background-color: #F75D59;
        color:#fff;
        border:none;
        border-radius: 5px;
        margin-top: 20px;
        cursor: pointer;
        width:200px;
    }

    .inner-button-r:hover{
        color:#F75D59;
        background-color: #fff;
    }

    .inner-button-l:hover{
        color:blue;
        background-color: #fff;
    }

    .text-divder p{
        width:300px;
    }

    .text-divder{
        align-items: center;
        margin-top: 120px;
    }

    .arrow-icon{
        height:40px;
        width:90px;
        display: inline-flex;
        align-items: center;
    }

    .arrow-icon span{
        font-size:16px;
    }









</style>

