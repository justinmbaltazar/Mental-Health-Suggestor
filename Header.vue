<template>
    <div id= "nav">
    <div class="headercontainer">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
        <router-link to =/about><p class="telephone"><i class="fas fa-phone-alt"></i>+1-800-273-TALK</p></router-link>
        <router-link to ="/about"><p class="chatbotbutton">About</p></router-link>
        <router-link to = "/signin"><p class="resourcebutton">Resources</p></router-link>
        <router-link to ="/signin"><p class="signinbutton">Login</p></router-link>
        <router-link to ="/"><p class = "homebutton">Home</p></router-link>
        <img src="@/assets/Group 16.png" width="150" height="50">
    </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
        
    };
</script>

<style scoped lang="scss" >
@import "@/global-styles/colors.scss";

.headercontainer{
    width: 100%;
    height: 100px;
    grid-template-columns: repeat(auto-fit,minmax(150px,1fr) );
    
}
.chatbotbutton{
    float: right;
    border: none;
    font-weight: 700;
    
    width: 10%;
    height: 30px;

    font-size: 15px;
    color: black;
    &:hover {
        cursor:pointer;
        border-bottom-color: $light-purple;
        border-bottom-style: solid;
    }
    font-family: Helvetica Neue; 

}
.resourcebutton{
    float: right;
    height: 30px;
    width: 15%;
    font-weight: 700;
    margin-right: 20px;
    font-size: 15px;
    font-family: 'Helvetica Neue';
    color: black;
    &:hover{
        cursor:pointer;
        border-bottom-color: $light-purple;
        border-bottom-style: solid;
    }
}

.signinbutton{
    float: right;
    height: 30px;
    width: 10%;
    border: none;
    font-weight: 700;
    margin-right: 10px;
    font-size: 15px;
    color: black;
    &:hover{
        cursor:pointer;
        border-bottom-color: $light-purple;
        border-bottom-style: solid;
    }
}
.homebutton{
    
float: right;
border: none;
font-weight: 700;
margin-right: 10px;
width: 10%;
height: 30px;

font-size: 15px;
color: black;
&:hover {
    cursor:pointer;
    border-bottom-color: $light-purple;
    border-bottom-style: solid;
}


}

img{
    float:left;
    margin-bottom: 20px;
    width: 20%;
    margin-left: -40px;
}
.telephone{
    float:right;
    font-weight: 700;
    font-size: 15px;
    width: 25%;
    color: $light-purple;
    &:hover {
    cursor:pointer;
    border-bottom-color: $light-purple;
    border-bottom-style: solid;
}

    
}
</style>