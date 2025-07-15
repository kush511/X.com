import { Image } from "@imagekit/next"
import CustomImage from "./Image"
import PostInfo from "./PostInfo"
import PostInteraction from "./PostInteraction"
import { imagekit } from "@/utils"
import Video from "./Video"

const Post = async ()=>{
    interface FileDetailsResponse{
        width:number;
        height:number;
        url:string;
        filePath:string;
        fileType:string;
        customMetadata?:{sensitive:boolean};
    }

    const getFileDetails = async (fileId:string):Promise=>{
        return new Promise((resolve,reject)=>{
            imagekit.getFileDetails(fileId,function (error,result) {
                if(error) reject(error);
                else resolve(result as FileDetailsResponse);
                
                
            })
        })
    }

    const fileDetails  = await getFileDetails("6873cb825c7cd75eb8709248")

    console.log(fileDetails);
    
    return(
        <div className="p-4 border-y-[1px] text-border-gray">
        {/* post type  */}
        <div className="flex items-center gap-2 text-sm text-text-gray font-bold mb-2">
           <div className="h-4 w-4"> 
  <CustomImage  
    src="/public/svg/repost.svg" 
    alt="repost" 
    h={15} 
    w={15}
    className="brightness-0 invert opacity-60"
  />
</div>
   <span>kiri reposted</span>
</div>
        {/* POST  */}
        <div className="flex gap-4">
            {/* pfp  */}
            <div className="relative h-10 w-10 rounded-full overflow-hidden">
                <CustomImage tr={true} src="/public/general/pfp.png" w={100} h={100} alt="profile"/>
            </div>
            {/* Content  */}
            <div className="flex-1 flex flex-col gap-2">
            <div className="flex items-center gap-2 justify-between">
                <div className="flex items-center gap-2 flex-wrap">
                    <h1 className="text-md text-white font-bold">Kiri</h1>
                    <span className="text-text-gray">@kush</span>
                    <span className="text-text-gray">7 July</span>
                </div>
                <PostInfo/>
                </div>
                {/* Text & media  */}
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit blanditiis ab corporis recusandae deleniti, repellat corrupti, modi obcaecati ipsam distinctio cupiditate pariatur rem minima, temporibus officia quam minus sunt! Saepe!
                Repellat, dicta non. Repudiandae, similique earum. Dolore, rem nemo doloremque accusantium magni perferendis id aspernatur impedit soluta ipsa assumenda ea enim sint adipisci eum explicabo laborum. Recusandae accusantium sit excepturi!
                Delectus tempore qui, sequi amet autem nam temporibus cupiditate vero eius nemo pariatur veniam, est at hic maiores excepturi harum rerum? Autem ipsa voluptas enim ut dicta deserunt! Iusto, possimus.</p>
                {/* <CustomImage w={500} h={500} src="/public/posts/image.png" alt="postimg" /> */}
               {fileDetails && fileDetails.fileType === "image" ?(<CustomImage src={fileDetails.filePath}
                alt="" 
                w={fileDetails.width}
                 h={fileDetails.height}
                className={fileDetails.customMetadata?.sensitive ? "blur-lg":""}/>)
                :<Video path={fileDetails.filePath} className={fileDetails.customMetadata?.sensitive ? "blur-lg":""}/>}
                <PostInteraction/>
                </div>
                
            
        </div>
        </div>

        


    ) 
    
}
export default Post