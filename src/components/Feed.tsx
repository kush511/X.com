import { prisma } from "@/prisma"
import Post from "./Post"

const Feed = async()=>{
   const posts = await prisma.post.findMany()
   
   return <div className="border-border-gray border-1">
        {posts.map((post)=>(
            <div key={post.id}>
                <Post/>
            </div>
        ))}
        
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
}
export default Feed