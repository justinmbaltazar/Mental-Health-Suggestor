<template>
  <div class="home">
    <Header />
    <div class= "paragraphbox">
    <div class="paragraph1">
      <p class="Percentage">70%</p>
      <p class="Text"> of children & adolescents who experience mental health issues don’t have access to any help.</p>
    </div>
    <div class="paragraph2">
      <p class="Percentage">90%</p>
      <p class="Text">of people who die by suicide have an underlying mental illnes.</p>
    </div>
    <div class="paragraph3">
      <p class="Percentage">39%</p>
      <p class="Text">of the LGBTQ population has reportd having a mental illness in the past year.</p>
    </div>
    </div>
    <div class="container">
           <div class="logo">
            <img src="@/assets/IMG_1625-removebg-preview.png">
            <p class="slogan">Chat with a friendly bot at your convience</p>

        </div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

        <router-link to ="/about"><button class="chatbotbutton">Talk Now!        <i class="fas fa-arrow-right"></i></button></router-link>
        <router-link to ="/signin"><button class="signinbutton"><i class="far fa-smile"> </i>Sign In!</button></router-link>
      <div class="borderextender"></div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
export default {
  name: "Home",
  components: {
    Header,
  },
};

</script>

<style scoped lang="scss">
@import "@/global-styles/colors.scss";

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container{
  width: 100%;
  min-height: 80vh;
  position: relative;
}
.paragraphbox{
  width: 100%;
  height: 220px;
  margin-top: -50px;
}
.Percentage{
  color:$light-purple;
  font-size: 40px;
  font-weight: 1000;
  margin-top: 3px;
  width: 100%;
}
.Text{
  font-style: normal;
  font-size: 14px;
  line-height: 18px;
  font-weight: 800;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  height: 100%;
}

.paragraph1{
  max-height: 210px;
  width: 25%;
  float: left; 
  border-radius: 18px;
  border-color: $dark-pink;
  border-style: solid;
  margin-left: 14px;
}
.paragraph2{
  width: 23%;
  float: left; 
  min-height: 110px;
  border-radius: 25px;
  border-color: $dark-pink;
  border-style: solid;
  margin-left: 150px;
  
}

.paragraph3{
  width:22%;
  background-color: white;
  float: right;
  border-radius: 25px;  
  border-color: $dark-pink;
  border-style: solid;
  margin-right: 80px;
  min-height: 110px;
  
}
.logo{
  margin-right: 25px;
  margin-top: -110px;
}

.slogan{
  font-weight: 1000px;
  font-size: 24px;
  line-height: 18px;
  margin-top: -100px;
  margin-bottom: 25px;
  color: #7C7C7C;
}

.chatbotbutton{
  height: 60px;
  width: 65%;
  background-color: $light-purple;
  border-radius: 25px;
  box-shadow: none;
  border:none;
  font-weight: 1000;
  font-size: 20px;
  color: white;
  &:hover {
    cursor:pointer;
  
  }
}
.signinbutton{
  height: 40px;
  width: 40%;
  background-color: $dark-blue;
  border-radius: 25px;
  margin-top: 30px;
  box-shadow: none;
  border:none;
  font-weight: 1000;
  font-size: 20px;
  color: white;
  &:hover {
    cursor:pointer;
  
  }
  
  
}

.borderextender{
  height: 100px;
}

</style>
