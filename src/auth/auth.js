export function createToken(user){

const payload={

username:user.username,

role:user.role,

time:new Date().getTime()

}


const token =
btoa(
JSON.stringify(payload)
)


localStorage.setItem(
"token",
token
)


localStorage.setItem(
"user",
JSON.stringify(user)
)


}



export function getToken(){

return localStorage.getItem(
"token"
)

}



export function logout(){

localStorage.removeItem(
"token"
)

localStorage.removeItem(
"user"
)

}



export function getUser(){

return JSON.parse(
localStorage.getItem("user")
)

}