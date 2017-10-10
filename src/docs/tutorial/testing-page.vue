<template lang="pug">
  .my-node-page
    main
      back-nav(title='Unit and End-to-End Testing')
      section.section
        .container
          .content
            | In this section of the tutorial we'll look at Unit and End-to-End testing...

          .title.is-4 Unit Testing

          .content
            | Make sure you installed 
            code babel-polyfill
            | or es6 promises won't work in PhantomJS. If you didn't, you can install it with:  

          pre.block
            code.hljs.bash
              :highlight(lang='bash')
                npm install babel-polyfill --save-dev 


          .content
            | Then update your karma config file to include the polyfill:

          strong.my-italic test/unit/karma.conf.js
          pre.block
            code.hljs.javascript
              :highlight(lang='javascript')
                //...

                files: [
                  '../../node_modules/babel-polyfill/dist/polyfill.js',
                  './index.js'
                ],

          .content
            | A unit test is included from the Webpack template already. It's a simple example
            | that tests the content outputted from the Hello vue component:

          strong.my-italic test/unit/specs/Hello.spec.js
          pre.block
            code.hljs.javascript
              :highlight(lang='javascript')
                import Vue from 'vue';
                import Hello from 'src/components/Hello';

                describe('Hello.vue', () => {
                  it('should render correct contents', () => {
                    const vm = new Vue({
                      el: document.createElement('div'),
                      render: (h) => h(Hello)
                    })
                    expect(vm.$el.querySelector('.hello h1').textContent)
                      .to.equal('Welcome to Your Vue.js App')
                  })
                })


          .title.is-4 End-to-End Testing with Nightwatch and Selenium server

          .content
            | I find End-to-End testing and Integration testing even more beneficial.
            | Vue-cli has put together a nice setup that includes Nightwatch.js (which
            | uses Selenium and a Chrome driver) for e2e testing right out of the box. 
            | Let's remove the existing test located at `test/e2e/specs/test.js` since
            | it will no longer work with the changes we have made. Let's add a new test
            | that tests that our login form works and that we can reach the dashboard:

          strong.my-italic test/e2e/specs/loginTest.js
          pre.block
            code.hljs.javascript
              :highlight(lang='javascript')
                // For authoring Nightwatch tests, see
                // http://nightwatchjs.org/guide#usage

                /**
                * Test that user can login and see dashboard.
                */
                module.exports = {
                  'default e2e tests': function (browser) {
                    // automatically uses dev Server port from /config.index.js
                    // default: http://localhost:8080
                    // see nightwatch.conf.js
                    const devServer = browser.globals.devServerURL

                    browser
                      .url(devServer)
                      .waitForElementVisible('#app', 5000)

                      // Assert that user can see login.
                      .assert.elementPresent('.login')
                      .setValue('.js-login__username', 'demouser')
                      .setValue('.js-login__password', 'testpass')
                      .click('.js-login__submit')
                      .pause(1000)

                      // Assert that user can see dashboard.
                      .assert.containsText('.ev-dashboard__heading h1', 'This is the dashboard')
                      .pause(2000)
                      .end()
                  }
                }

          b-message(type='is-warning')
            | Note: You may wish to add another 
            code assert
            |  that asserts the dashboard is unreachable when a user is logged out.

          .title.is-4 Running the Tests

          .content
            | Now let's run both the unit test and the e2e test. Make sure you are in your project directory, then:

          pre.block
            code.hljs.bash
              :highlight(lang='bash')
                npm run test

          .content
            | You should see some output initially showing the results of each unit test ran:

          pre.block
            code.hljs.bash
              :highlight(lang='bash')
                Hello.vue  
                  ✓ should render correct contents  
                  ...  
                  PhantomJS 2.1.1 (Linux 0.0.0): Executed 1 of 1 SUCCESS (0.018 secs / 0.004 secs)
                TOTAL: 1 SUCCESS     
                    
                Then the Selenium server will fire up Chrome browser and run the e2e tests to see if those pass:

                ✔ Element <#app> was visible after 65 milliseconds.  
                ✔ Testing if element <.ev-login> is present.  
                ✔ Testing if element <.ev-dashboard__heading> contains text: "This is the dashboard".  
                ...  
                OK. 3 assertions passed. (18.522s)  

          .content
            | You can of course run unit tests and e2e tests seperately with: 
            code npm run unit
            | and 
            code npm run e2e
            |  .

    main-footer

</template>

<script>
import BackNav from '@/features/common/back-nav'

export default {
  name: 'http-client',

  components: { BackNav },

  mounted () {
    // @TODO: You don't have to do this if you are using "history" mode in VueRouter.
    // I'm doing this here because of GitHub Pages "hash" mode requirement/limitation.
    const titles = Array.from(document.getElementsByClassName('title'))
    const title = titles.filter((el) => el.innerHTML === this.$route.query.title)[0]
    if (title) title.scrollIntoView()
    else scroll(0, 0)
  },

  data () {
    return {

    }
  },

  methods: {
  }
}
</script>
