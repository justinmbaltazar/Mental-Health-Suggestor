<template>
  <div class="home">
    <Header/> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <div class="container">
      <div class="textcontainer">
        <img src= "@/assets/rainbowtext.png">
        <p class="largetext">You are not alone, evexia is on your side<i class="fas fa-arrow-right"></i></p>
        <p class="description">Mental health is a journey, not a destination. Free-automated chatbot called Evexia will be your +1 in your mental wellness improvement. Use Evexia to talk as a friend and/or find useful advice to keep in mind.</p>
        <router-link to ="/about"><button class ="chatbotbutton"> Talk Now</button></router-link>
        <router-link to ="/signin"><button class="loginbutton">Login</button></router-link>
        <p class="makean">Make an <span class = "account">account</span></p>
        <div class="paragraphbox">
          <div class="paragraphcontainer1">
            <span class="percentage">90%<p class="text">Of those who die by sucide have an underlying mental illness</p></span>
            </div>
            <div class = "paragraphcontainer2">
              <span class="percentage">70%<p class="text">Children & adolescents who experience mental health don’t have apporiate interventions  </p></span>
              </div>
              <div class = "paragraphcontainer3">
                <span class="percentage">39%<p class = "text">LGBTQ+ population has reported having a mental illness in the past year. almost 3x more likely to experience a mental health condition </p></span>
                </div>
          </div>
        </div>
      <div class="photocontainer">
        <div class="photo">
          <img src="@/assets/home page image.png" alt="logo">
        </div>
      </div>
      
  </div>  
  
 <footer>
    <Disclaimer/>
  </footer>
</div>
            
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Disclaimer from "@/components/disclaimer.vue";
export default {
  name: "Home",
  components: {
    Header,
    Disclaimer
  }
};

</script>

<style scoped lang="scss">
@import "@/global-styles/colors.scss";
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

*{
  padding: 0;
  margin: 0;
}
.container{
  min-width: 300px;
  min-height: 80vh;
}
.textcontainer{
  float: left;
  width: 50%;
  height: 100%;
}
.photocontainer{
  float: right;
  width: 50%;
}
img{
  width: 100%;
}


.largetext{
  margin-top: 20px;
  font-size: 40px;
  line-height: 47px;
  font-weight: 800px;
  color: #000;
  font-family: 'Inter', sans-serif;
  
}

.description{
  margin-top: 20px;
  font-style: normal;
  font-weight: 0px;
  font-size: 15px;
  line-height: 18px;
  text-align: left;

  color: #7C7C7C;
  font-family: 'Inter', sans-serif;

}

.chatbotbutton{
  margin-top: 40px;
  float: left;
  background-color: $light-purple;
  border-radius: 50px;
  box-shadow: none;
  border:none;
  width: 45%;
  height: 50px;
  
  
  font-weight: 1000;
  font-size: 20px;
  color: white;
  &:hover {
    cursor:pointer;
}
}

.loginbutton{
  margin-top: 40px;
  float: right;
  border-radius: 50px;
  border-style: solid;
  border-color:$light-purple;
  background: white;
  width: 45%;
  height: 50px;
  
  
  font-weight: 1000;
  font-size: 20px;
  &:hover {
    cursor:pointer;
}
}
.makean{
  margin-top: 10px;
  margin-right: 25px;
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  float: right;
}
.account{
  color: $light-purple;
  text-decoration: underline;
}

.paragraphbox{
  margin-top: 160px;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fit,minmax(150px,1fr) );
  
}

.paragraphcontainer1{
  float: left;
  margin-left: 10px;
}
.paragraphcontainer2{
  float: left;
  margin-left: 25px;
}
.paragraphcontainer3{
float: right;
margin-right: 10px;
}
.percentage{
  color: $light-purple;
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: 900;
  font-size: 34px;
  line-height: 42px;
}

.text{
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 20px;
  color: black;
  text-align: left;

}





</style>
