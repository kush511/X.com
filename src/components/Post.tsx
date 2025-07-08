import { Image } from "@imagekit/next"
import CustomImage from "./Image"
import PostInfo from "./PostInfo"

const Post = ()=>{
    return(
        <div className="p-4 border-y-[1px] text-border-gray">
        {/* post type  */}
        <div className="flex items-center gap-2 text-sm text-text-gray font-bold mb-2">
            icon
            <span>kiri reposted</span>
        </div>
        {/* POST  */}
        <div className="flex gap-4">
            {/* pfp  */}
            <div className="relative h-10 w-10 rounded-full overflow-hidden">
                <CustomImage tr={true} src="https://ik.imagekit.io/mkhidgljz4/public/general/pfp.png?updatedAt=1751954676188" w={100} h={100} alt="profile"/>
            </div>
            {/* Content  */}
            <div className="flex-1 ">
            <div className="flex items-center gap-2 justify-between">
                <div className="flex items-center gap-2 flex-wrap">
                    <h1>Kiri</h1>
                    <span>@kush</span>
                    <span>7 July</span>
                </div>
                <PostInfo/>
                </div>
                </div>
                
            
        </div>
        </div>

        


    ) 
    
}
export default Post