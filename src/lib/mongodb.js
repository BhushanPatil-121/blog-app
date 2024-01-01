const {username, password} = process.env
export const connectionStart="mongodb+srv://"+username+":"+password+"@cluster0.bs1ycdv.mongodb.net/blogDB?retryWrites=true&w=majority"