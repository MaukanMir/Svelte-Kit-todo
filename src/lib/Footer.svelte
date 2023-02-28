<script>
import FaFacebook from 'svelte-icons/fa/FaFacebook.svelte'
import FaTwitterSquare from 'svelte-icons/fa/FaTwitterSquare.svelte'
import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte'
import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte'

</script>

<body>
<div class ="footer">

    <div class ="inner-footer">
        <li class ="icons">
            <FaFacebook/>
        </li>
        <li class ="icons">
            <FaInstagram/>
        </li>
        <li class ="icons">
            <FaLinkedin/>
        </li>
        <li class ="icons">
            <FaTwitterSquare/>
        </li>
    </div>
    <p>All Rights Reserved</p>
</div>

</body>

<style>

body{
    font-family: sans-serif;
}
.footer{
    display:flex;
    flex-direction: column;
    background-color: #1e1e1e;
    color:#fff;
    margin:20px;
}
.inner-footer{
    display:flex;
    flex-direction: row;
    list-style: none;
    font-size: 20px;
    padding:10px;
    justify-content: space-around;
    margin:20px;
}

.icons{
    margin:20px;
    display: flex;
    height:60px;
    width:80px;
}

.footer p{
    display: flex;
    justify-content: center;
}

.inner-footer li:hover{
    color:blueviolet;
cursor:pointer;
}
</style>