<script>

</script>

<div class ="footer">

    <div class ="inner-footer">
        <li class ="icons">Facebook</li>
        <li class ="icons">Instagram</li>
        <li class ="icons">Twitter</li>
        <li class ="icons">LinkedLn</li>
    </div>
    <p>All Rights Reserved</p>
</div>

<style>
.footer{
    display:flex;
    flex-direction: column;
    background-color: #000036;
    color:white;
    border: 4px solid black;
    margin:20px;
}
.inner-footer{
    display:flex;
    flex-direction: row;
    list-style: none;
    /* justify-content: center; */
    font-size: 20px;
    padding:10px;
    justify-content: space-around;
}

.icons{
    margin:20px;
    display: flex;
}

.footer p{
    display: flex;
    justify-content: center;
}

.inner-footer li:hover{
color: 	white;
cursor:pointer;
}
</style>