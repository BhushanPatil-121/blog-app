import { Blog } from "@/lib/model/blog";
import { connectionStart } from "@/lib/mongodb";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await mongoose.connect(connectionStart);
    let data = await Blog.find();
    return NextResponse.json({ result: data, success: true });
  } catch (error) {
    return NextResponse.json({ result: "Error!", success: false });
  }
}

export async function POST(request, content) {
  try {
    await mongoose.connect(connectionStart);
    let payload = await request.json();
    let blog = new Blog(payload);

    if (
      !payload.name ||
      !payload.title ||
      !payload.subtitle ||
      !payload.info ||
      !payload.date
    ) {
      return NextResponse.json({ result: "Error", success: false });
    } else {
      const data = await blog.save();
      return NextResponse.json({ result: data, success: true });
    }
  } catch (error) {
    return NextResponse.json({ result: "Error!", success: false });
  }
}

export async function DELETE() {
  await mongoose.connect(connectionStart);
  let blog = new Blog();
  const data = await Blog.deleteMany();
  return NextResponse.json({ result: "DELETED" });
}
