const {username, password} = process.env
export const connectionStart="mongodb+srv://"+username+":"+password+"@cluster0.bs1ycdv.mongodb.net/blogDB?retryWrites=true&w=majority"
export const BASE_API_URL= process.env.NEXT_PUBLIC_BASE_API_URL
export const PASS_DELETE = process.env.NEXT_PUBLIC_DELETE_PASS