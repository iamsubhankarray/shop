const {Client, ID,Account,Databases,Storage,}= require('appwrite')
const client = new Client()
.setEndpoint("https://cloud.appwrite.io/v1")
.setProject("66dc499d0035fd5a6d11")
const account= new Account(client)
const databases= new Databases(client)
const storage =  new Storage(client)
const id = new ID(client)
module.exports= {account,databases,storage,id}