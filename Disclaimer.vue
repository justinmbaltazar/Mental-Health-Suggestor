<template>
    <div class="disclaimerbox">
        <div class= "links">
            <p class= "about">About</p>
            <p class="privacy">Priacy Policy</p>
            <p class= "security">Security</p>
            <p class = "contact">Contact</p>
            <p class="chatbot">Chatbot</p>
        </div>
    <div class="warningbox">
        <p class= "warning">*Not used for profreessional medical diagnosis* </p>
        <div class = "teambox">
        <p class="rights">Rights reserved team evexia 2021</p>
    </div>
    </div>
    
    </div>
</template>

<script>
    export default {
        name: "Disclaimer"
    }
</script>

<style lang="scss" scoped>
@import "@/global-styles/colors.scss";
.disclaimerbox{
    margin-top: 10px;
    background: $green;
    width: 100%;
    display: grid;
    grid-template-rows: repeat(auto-fit,minmax(150px,1fr) );
}
.links{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(150px,1fr) );
    margin-top: 60px;
    margin-left: 50px;
    font-size: 18px;
    font-family: Helvetica ;


}
.warningbox{
    width: 60%;
    font-size: 14px;
    color: #C4C4C4;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(150px,1fr) );
}
.warning{
    margin-left: 30px;
}
.teambox{
margin-left: 280px;
width: 70%;

}
.rights{
    color: black;
    size: 16px;
}

</style>

