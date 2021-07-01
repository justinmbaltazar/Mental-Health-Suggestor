<template>
  <div class="about">
    <amplify-chatbot :chatbotConfig="chatbotConfig"></amplify-chatbot>
  </div>
</template>

<script>
import{Interactions} from 'aws-amplify';

export default{
  name: 'App',
  data: () => ({
    chatbotConfig: {
      bot: "OrderFlowers_dev",
      clearComplete: false
    }
  }),
  mounted() {
    Interactions.onComplete("OrderFlowers_dev", this.handleComplete);
  },
  methods: {
    handleComplete(err, confirmation) {
      if(err){
        alert(err);
        return;
      }
      alert(JSON.stringify(confirmation));
    }
  }
}
</script>

