<template lang="pug">
  .my-main-footer.footer.has-text-white(v-if="$store.state.auth.isLoggedIn" style='background-color:#4A4A4A;')
    .container
      .content.has-text-centered
        p
          |&copy 2016 - 2017 Example 
          a(href='#', style='margin-left: 20px;') Privacy
          a(href='#', style='margin-left: 20px;') TOS

</template>

