<template lang="pug">
  .my-node-page
    main
      back-nav(title='Editors')
      section.section
        .container
          .content
            | In this section of the tutorial we'll discuss code editors...

          .title.is-4 Advantages of VS Code

          .content

            | After using 
            a(href='https://www.sublimetext.com/3') Sublime Text 3 
            | extensively and dabbling in 
            a(href='https://code.visualstudio.com/') Atom, 
            | I've found 
            a(href='https://github.com/Microsoft/vscode') VS Code 
            | to be my choice editor.

            ul 
              li It's open source. Sublime Text 3 is not (and that's not a bad thing for software, but it's nice to have an open source editor).  
              li 
                | It can  
                a(src='https://github.com/Microsoft/vscode/issues/30180') handle large files
                | .  
              li File explorer is built in and extensions are super easy to manage.  
              li Built-in Markdown support.  
              li Built-in TypeScript support (Microsoft are the makers of TypeScript).  
              li Actively maintained (Sublime Text 3 is not regularly maintained).  
              li Easier to setup ESLint.
              li Built-in support for Markdown editing and preview (with split-screen).  

          .title.is-4 Setting Up VS Code

          .title.is-6 User and Workspace Settings

          .content
            | If you navigate to 
            code File > Preferences > Settings 
            | , VS Code will open up a tab into your 
            code settings.json 
            | (User level). You'll notice the left pane lists all the defaults settings for the
            | editor and also for any extensions you've installed. You can override these values in your
            code settings.json 
            | file. You can read more about this 
            a(href='https://code.visualstudio.com/docs/getstarted/settings') here 
            | , but we are more focused on providing a workspace settings file in this project.

          .content
            | VS Code provides two different scopes for settings:  

            ul
              li 
                | User: These settings apply globally to any instance of VS Code you open.  
              li 
                | Workspace: These settings are stored inside your workspace in a .vscode folder 
                | and only apply when the workspace is opened. Settings defined on this scope override the user scope.  

            | I've added a 
            code .vscode 
            | folder to the project to hold the workspace settings. There are 2 files located there. The 
            code settings.json
            | file to hold the settings for the project and the 
            code extensions.json 
            | file to hold the 
            a(href='https://code.visualstudio.com/docs/editor/extension-gallery#_workspace-recommended-extensions')
              | recommended extensions for a project.

         
          strong.my-italic .vscode/settings.json 
          pre.block
            code.hljs.javascript
              :highlight(lang='javascript')
                // Place your settings in this file to override the default and user settings
                {
                    // Settings for .js, .vue, .styl files.
                    "[javascript]": {
                        "editor.tabSize": 2,
                        "editor.insertSpaces": true
                    },
                    "[vue]": {
                        "editor.tabSize": 2,
                        "editor.insertSpaces": true
                    },
                    "[stylus]": {
                        "editor.tabSize": 2,
                        "editor.insertSpaces": true
                    },

                    // This is required for ESLint to work in Vue in VS Code.
                    "eslint.options": {
                        "extensions": [".html", ".js", ".vue", ".jsx"]
                    },
                    "eslint.validate": [
                        {
                            "language": "html",
                            "autoFix": true
                        },
                        {
                            "language": "vue",
                            "autoFix": true
                        },
                        {
                            "language": "javascript",
                            "autoFix": true
                        },
                        {
                            "language": "javascriptreact",
                            "autoFix": true
                        }
                    ],

                    // When you hit ctrl+e to search, you don't want node_modules to be included.
                    "search.exclude": {
                        "**/.git": true,
                        "**/node_modules": true,
                        "**/tmp": true
                    }
                }

          strong.my-italic .vscode/extensions.json 
          pre.block
            code.hljs.javascript
              :highlight(lang='javascript')
                {
                  // See http://go.microsoft.com/fwlink/?LinkId=827846
                  // for the documentation about the extensions.json format
                  "recommendations": [
                    // Extension identifier format: ${publisher}.${name}. Example: vscode.csharp
                    "dbaeumer.vscode-eslint",
                    "sysoev.language-stylus",
                    "octref.vetur"				
                  ]
                }

          .title.is-6 Key Bindings

          .content
            | If there are some key shortcuts you want to change, it's super easy.
            | Go to 
            code File > Preferences > Keyboard Shortcuts 
            | and then search for the command you want to change. You'll also see 
            | a link under the search bar 
            code 
              | For advanced customizations open and edit 
              span.my-underline keybindings.json
              | .
            | This will open up a .json file for you to add bindings and you'll see a list of defaults 
            | open in a tab to your left called "Default Keybindings".


          .content
            | For example, I like to have a more simplified "copy line down" command and 
            | use 
            code ctrl+d 
            | to duplicate a line downwards:  

          strong.my-italic ~/.config/Code/User/keybindings.json
          pre.block
            code.hljs.javascript
              :highlight(lang='javascript')
                // Place your key bindings in this file to overwrite the defaults
                [
                    {
                        "key": "ctrl+d",
                        "command": "editor.action.copyLinesDownAction",
                        "when": "editorTextFocus && !editorReadonly"
                    }
                ]

          b-message(type='is-warning')
            | NOTE: Restart the editor and you'll see syntax highlighting, linting, and all things working nicely!

          .title.is-4 Setting Up Sublime Text 3

          .title.is-6 Install Package Control
          
          .content
            a(href='https://packagecontrol.io/installation') https://packagecontrol.io/installation

          .title.is-6 Install Babel syntax definitions for ES6 JavaScript

          .content
            ul
              li 
                | 1. Go to 
                code Preferences > Package Control > Install Package
                |  or press 
                code ctrl+shift+p
                |  (Win, Linux) or 
                code cmd+shift+p
                |  (OS X) and  search for "Package Control: Install Package".
              li 2. Search for the package "Babel" and install it.
              li 
                | 3. Open any .js file in Sublime. Then go to 
                code View > Syntax > Open all with current extension as... > Babel > Javascript (Babel)
                | .

          .title.is-6 Install a theme that works well with Babel

          .content
            | For example, here's how you can install the 
            code Oceanic Next
            |  theme:

            ul
              li 
                | 1. Try the Oceanic Next theme: 
                code Open Package Control -> Install Package
                | and search for Oceanic Next color theme.
              li 
                | 2. Go to 
                code Preferences > Oceanic Next Color theme > Oceanic next
                | .

          .title.is-6 Setup soft tabs and 2 space indention

          .content
            ul
              li 
                | 1. Open any .js file. Go to 
                code Preferences > Settings - More > Syntax Specific - User
                | .
              li 
                | 2. It should open a file like 
                code JavaScript (Babel).sublime-settings
              li 
                | 3. Add these parameters to the file:

                pre.block
                  code.hljs.javascript
                    :highlight(lang='javascript')
                      {
                        "extensions":
                        [
                          "js"
                        ],
                        "tab_size": 2,
                          "translate_tabs_to_spaces": true
                      }  
              li 
                | 4. Open any 
                code .vue
                |  file and repeat this process.


          .title.is-6 Install Stylus package for Sublime

          .content
            ul
              li
                | Open 
                code Package Control: Install Package
                |  and search for 
                code Stylus
                |  and install it (should be billymoon/Stylus package).
              li Restart Sublime.

          .title.is-6 Install Sublime-linter and ESLinter

          .content
            ul
              li 
                | Open 
                code Package Control: Install Package
                | and search for 
                code SublimeLinter
                | and install it.
              li 
                | Search for 
                code SublimeLinter-contrib-eslint
                | and install it as well.
              li Restart Sublime.

          b-message(type='is-warning')
            | Note: In the next section you'll configure eslint. If you install eslint into the same directory
            | you are modifying Sublime files from (and same machine), then Sublimelinter will have no problem
            | using it. Or you can also install eslint (and all the other eslint-* packages) globally on the 
            | same machine as Sublime. But if you are using a server or a virtual machine (Vagrant/Virtualbox)
            | configuration, then you need to tell sublimelinter where eslint is. You can change the path with
            code Sublime Text -> Prefences -> Package Settings -> SublimeLinter -> Settings-User
            | .


    main-footer

</template>

<script>
import BackNav from '@/components/common/back-nav'

export default {
  name: 'editors',

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
