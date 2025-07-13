import Image from 'next/image';
import React from 'react'

const ImageEditor = ({ onClose, previewUrl, settings, setSettings }: {
    onClose: () => void;
    previewUrl: string;
    settings: {
        type: "original" | "wide" | "square";
        sensitive: boolean
    };
    setSettings: React.Dispatch<React.SetStateAction<{
        type: "original" | "wide" | "square";
        sensitive: boolean;
    }>>

}) => {

    const handleChangeSensitive = (sensitive: boolean) => {
        setSettings(prev => ({ ...prev, sensitive }))
    }

    const handleChangeType = (type: "original" | "wide" | "square") => {
        setSettings(prev => ({ ...prev, type }))
    }
    return (
        <div className="fixed inset-0 bg-black/5 bg-white/5 z-10 flex items-center justify-center">
            <div className="bg-black rounded-xl p-8 flex flex-col gap-4 max-w-[700px] w-[90vw]">
                {/* top  */}
                <div className='flex items-center justify-between'>
                    <div className='flex gap-6 items-center'>
                        <svg onClick={onClose} className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width={32} height="20" viewBox="0 0 24 24">
                            <path fill="white"
                                d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"
                            />

                        </svg>
                        <h1 className='font-bold text-xl '>Crop media</h1>
                    </div>
                    <button onClick={onClose} className='py-2 px-4 text-black bg-white rounded-full cursor-pointer font-bold'>Save</button>
                </div>
                {/* image container  */}
                <div className={`flex items-center justify-center mx-auto max-w-full max-h-[60vh] w-[600px] ${
                    settings.type === "square" ? "aspect-square" : "aspect-video"
                }`}>
                    <Image
                        width={600}
                        height={settings.type === "square" ? 600 : 338} // 600/16*9 ≈ 338
                        src={previewUrl}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* settings  */}
                <div className='flex items-center justify-between text-sm '>
                    <div className='flex items-center gap-8'>
                        <div className='flex items-center cursor-pointer gap-2' onClick={() => handleChangeType("original")}>
                            <svg width={24} viewBox="0 0 24 24">
                                <path className={settings.type === "original" ? "fill-icon-blue": "fill-[#e7e9ea]"} d="M3 7.5C3 6.119 4.119 5 5.5 5h13C19.881 5 21 6.119 21 7.5v9c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 19 3 17.881 3 16.5v-9zM5.5 7c-.276 0-.5.224-.5.5v9c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-9c0-.276-.224-.5-.5-.5h-13z" />
                            </svg>
                            Original
                        </div>

                        <div className='flex items-center cursor-pointer gap-2' onClick={() => handleChangeType("wide")}>
                            <svg width={24} viewBox="0 0 24 24">
                                <path className={settings.type === "wide" ? "fill-icon-blue": "fill-[#e7e9ea]"} d="M3 9.5C3 8.119 4.119 7 5.5 7h13C19.881 7 21 8.119 21 9.5v5c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 17 3 15.881 3 14.5v-5zM5.5 9c-.276 0-.5.224-.5.5v5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-5c0-.276-.224-.5-.5-.5h-13z" />
                            </svg>
                            Wide
                        </div>

                        <div className='flex items-center cursor-pointer gap-2' onClick={() => handleChangeType("square")}>
                            <svg width={24} viewBox="0 0 24 24">
                                <path className={settings.type === "square" ? "fill-icon-blue": "fill-[#e7e9ea]"} d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v13c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-13c0-.276-.224-.5-.5-.5h-13z" />
                            </svg>
                            square
                        </div>

                    </div>
                    <div
                        className={`rounded-full py-1 px-4 cursor-pointer text-black ${settings.sensitive ? "bg-red-500" : "bg-white"}`}
                        onClick={() => handleChangeSensitive(!settings.sensitive)}
                    >Sensitive</div>
                </div>

            </div>

        </div>
    )
}

export default ImageEditor