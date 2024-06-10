# Movies-Hive
-create react app
-configured tailwindCss
-header
-login-form
-sign up form
-form validation
-useRef hooks
-firebase setup
-deploying project to production
-create signup user account
-implement signin user api
-created redux store using userSlice
-implemented signout 
-update profile
-bug fix:sign up user display name
-bugfix:if user us not logged in redirect /browse to login page and vice versa
-Unsubscribe to the onAuthStateChanged callback
-Add harcoded values to the constants 
-register for tmdb api and create an app and get access token
-get data from tmdb now playing movies list api


# features 
-login/signUp
    -sign in/sign up form
    -redirect to browse page
-browse(after authentication)
    -header
    -main movie
        -trailer in bg
        -movie title and description
    -movies suggestions
        -movies list (horizontal scrollable)
-moviesGPT
    -search bar
    -movies suggestion

# tips 
-use formik to build forms easily
-always use web modular APIs

# steps for setting firebase also hosting a project
-setup project on firebase 
-npm firebase
-config firebase
-setup authentication on firebase
-npm i -g firebase-tools
-firebase login
-firebase init
-hosting :configure files for firebase hosting(select by using space bar and hit enter)
-use exiting project
-select netflix
-what do you want to use as your public directory?-build
-configure as a single page app ?-no
-set up automatic builds and deploys with github-no
-npm run build 
-firebase deploy
-read documentation for authenticating user with password
-check for signin or signup
-import variables from firebase for auth
-auth can be done anyware but calling getAuth for once makes more sense
-onauthVariableChange is called whenever a auth takes place