# MUSIC_APP_BACKEND
Server code for vbi music player

##  Prerequisites
* Nodejs
* MongoDb
* npm or yarn, but preferably yarn

## Run the App Locally

### Clone the Repo
git clone https://github.com/amitgouda/MUSIC_APP_BACKEND.git

### Install the dependencies
yarn install

### Start the application
 yarn run dev

### Application has been deployed in heroku
 [check end points](https://vbimusicplayerserver.herokuapp.com/api/check)

### End points realted details
| end points           | req type | functionality     | sample param                                                                         |
|----------------------|----------|-------------------|--------------------------------------------------------------------------------------|
| api/auth/signup      | post     | Sign up api       | {"firstName":"Amit","lastName":"gouda","email":"xyz@gmail.com","password":123456   } |
| api/auth/signin      | post     | Sign in api       |{"email":"amit@gmail.com","password":"123456"} |
| api/song/allSong     | get      | Get all songs     |  {}                                                                                    |
| api/song/createAlbum | post     | Create an album   |  {"title":"Hip Hop"}                                                                                    |
| api/playlist/create  | post     | Create a playlist |   {"name":"Winning",  "songsIdArray":["5fab6b38832b7220a4b30eb5"]}                                                                                   |
| api/playlist/all     | get      | Get all playlist  | {}                                                                                     |
| api/song/create      | post     | Add songs         |   {"title":"Chale Chalo","playTime":7010,"albumId":"5fab699d832b7220a4b30eaf","singer":"Arjit Singh"} |

## 🐛 Bugs or Requests

If you face any problems feel free to open an [issue](https://github.com/amitgouda/MUSIC_APP_BACKEND/issues/new) on GitHub and I will look into it.

 ##  Find me here
* [Linkedin](https://www.linkedin.com/in/amit-gouda-549871160/)