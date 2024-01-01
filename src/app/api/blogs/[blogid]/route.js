import { Blog } from "@/lib/model/blog";
import { connectionStart } from "@/lib/mongodb";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET(request,content){
    const blogId = content.params.blogid;
    const record={_id:blogId};
    try {
        await mongoose.connect(connectionStart);
        const data=await Blog.findById(record);
        return NextResponse.json({result:data,success:true})
    } catch (error) {
        return NextResponse.json({result:["Error"],success:false})
    }
}

export async function PUT(request, content){
    const blogId = content.params.blogid;
    const filter={_id:blogId};
    const payload = await request.json();
    try {
        await mongoose.connect(connectionStart);
        const data=await Blog.findOneAndUpdate(filter,payload);
        return NextResponse.json({result:data,success:true})
    } catch (error) {
        return NextResponse.json({result:["Error"],success:false})
    }
}
