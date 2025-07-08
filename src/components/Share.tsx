import CustomImage from "./Image"

const Share = ()=>{
    return <div className="p-4 flex gap-4">
        <div className="relative h-13 w-13 rounded-full overflow-hidden">
            <CustomImage src="https://ik.imagekit.io/mkhidgljz4/public/general/pfp.png?updatedAt=1751954676188"
            w={100} h={100} alt="pfp" />
        </div>
        <div className="flex-1 flex flex-col gap-4">
            <input type="text" placeholder="What's happening" />
        </div>
    </div>
}
export default Share