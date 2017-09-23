<template lang="pug">
  .my-node-page
    main
      back-nav(title='Pug')
      section.section
        .container
          .content
            | In this section of the tutorial we'll look at Pug (previously known as Jade) as a replacement
            | template language for HTML...

          .title.is-4 Install Pug

          pre.block
            code.hljs.bash
              :highlight(lang='bash')
                npm install pug@2.0.0-rc.4 pug-loader --save-dev

          b-message(type='is-info')
            | Here is a handy online tool to convert any HTML examples into Pug   
            | (check both boxes: "Bodyless" and "No commas in attributes"):
            br
            a(href='https://html2pug.herokuapp.com/') https://html2pug.herokuapp.com/


          .content
            | Pug lets us write out our template in a much more cleaner and effecient way. 

          .content
            | Here's a 
            a(href='http://bulma.io/documentation/components/card/') Bulma card
            |  example using HTML:

          pre.block
            code.hljs.html
              :highlight(lang='html')
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">
                      Component
                    </p>
                    <a href="#" class="card-header-icon" aria-label="more options">
                      <span class="icon">
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </a>
                  </header>
                  <div class="card-content">
                    <div class="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                      <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                      <br>
                      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                  </div>
                  <footer class="card-footer">
                    <a href="#" class="card-footer-item">Save</a>
                    <a href="#" class="card-footer-item">Edit</a>
                    <a href="#" class="card-footer-item">Delete</a>
                  </footer>
                </div>

          .content
            | Now compare with the same example, but using Pug's markup: 

          pre.block
            code.hljs.html
              :highlight(lang='html')
                .card
                  header.card-header
                    p.card-header-title
                      | Component
                    a.card-header-icon(href="#" aria-label="more options")
                      span.icon
                        i.fa.fa-angle-down(aria-hidden="true")
                  .card-content
                    .content
                      | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                      a(href="#") @bulmaio
                      | . 
                      a(href="#") #css
                      a(href="#") #responsive
                      br
                      time(datetime="2016-1-1") 11:09 PM - 1 Jan 2016
                  footer.card-footer
                    a.card-footer-item(href="#") Save
                    a.card-footer-item(href="#") Edit
                    a.card-footer-item(href="#") Delete

    main-footer

</template>

<script>
import BackNav from '@/features/common/back-nav'

export default {
  name: 'pug',

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
