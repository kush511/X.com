"use client"
import Image from "next/image"
import CustomImage from "./Image"
import { useState } from "react"
import { shareAction } from "@/actions"
import ImageEditor from "./ImageEditor"

const Share = () => {

    const [media, setMedia] = useState<File | null>(null)
    const [isEditorOpen, setIsEditorOpen] = useState(false)
    const [settings, setSettings] = useState<{
        type: "original" | "wide" | "square";
        sensitive: boolean;
    }>({
        type: "original",
        sensitive: false,
    })

    function handleMediaChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files[0]) {
            setMedia(e.target.files[0])
        }
    }

    const previewUrl = media ? URL.createObjectURL(media) : null;

    return <form className="p-4 flex gap-4" action={formData => shareAction(formData,settings)}>
        <div className="relative h-13 w-13 rounded-full overflow-hidden">
            <CustomImage
                src="public/general/pfp.png"
                w={100}
                h={100}
                alt="pfp" />
        </div>
        <div className="flex-1 flex flex-col gap-4 ">
            <input autoComplete="off" name="desc"
                className="bg-transparent  outline-none text-xl placeholder:text-text-gray"
                type="text"
                placeholder="What's happening?" />
            {/* //preview image  */}
            {
                previewUrl && (<div className="relative rounded-xl overflow-hidden">
                    <Image className={`w-full h-full
                    ${settings.type === "original"
                                ? "object-contain"
                                : settings.type === "square"
                                    ? "aspect-square object-cover"
                                    : "aspect-video object-cover"}`} src={previewUrl} alt="" width={600} height={600}></Image>
                    <div onClick={()=>setIsEditorOpen(true)}
                     className="absolute top-2 left-2 bg-black/50  text-white py-1 px-4 rounded-full font-bold text-sm cursor-pointer">
                        Edit
                    </div>
                </div>
                )}
            {isEditorOpen && previewUrl && <ImageEditor
                onClose={() => setIsEditorOpen(false)}
                settings = {settings}
                previewUrl = {previewUrl}
                setSettings = {setSettings}
 />}

            <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex gap-4 flex-wrap">
                    <input name="file" id="image-upload" hidden type="file" onChange={handleMediaChange} />
                    <label htmlFor="image-upload"><Image alt="" src="/icons/image.svg" width={20} height={20} className="cursor-pointer" />
                    </label>
                    <Image alt="" src="/icons/gif.svg"
                        width={20}
                        height={20}
                        className="cursor-pointer" />
                    <Image alt="" src="/icons/poll.svg"
                        width={20}
                        height={20}
                        className="cursor-pointer" />
                    <Image alt="" src="/icons/emoji.svg"
                        width={20}
                        height={20}
                        className="cursor-pointer" />
                    <Image alt="" src="/icons/schedule.svg"
                        width={20}
                        height={20}
                        className="cursor-pointer" />
                    <Image alt="" src="/icons/location.svg"
                        width={20}
                        height={20}
                        className="cursor-pointer" />

                </div>
                <div>
                    <button className="cursor-pointer bg-white font-bold rounded-full text-black px-4 py-2">
                        Post
                    </button>
                </div>
            </div>
        </div>
    </form>
}
export default Share