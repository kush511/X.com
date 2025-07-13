import Link from 'next/link';
import Image from 'next/image';

const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];

export default function Leftbar(){
    return <div className='h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8' >
        <div className='flex flex-col items-center text-lg gap-4 xxl:items-start'>
            {/* LOGO */}
            <Link href="/" className='p-2 rounded-full hover:bg-[#181818]'>
            <Image src="/icons/logo.svg" alt='logo' width={24} height={24} className="fill-white"/>
            </Link>
        </div>
    {/* menu list */}
        <div className='flex flex-col gap-4 '>
        {menuList.map(item =>(
            <Link  href={item.link} className='rounded-full p-2 hover:bg-[#181818] flex items-center gap-4 ' key={item.id}>
               
                 <Image src={`icons/${item.icon}`} alt={item.name} width={24} height={24}/>
           <span className='hidden  xxl:inline pl-2'>{item.name}</span>
               
            </Link>
        ))}
        </div>
        {/* Button  */}
        <Link href="/" className='bg-white text-black rounded-full xxl:hidden   w-12 h-12 flex justify-center'>
        <Image src="/icons/post.svg"  alt='new post'  style={{ width: "auto", height: "auto" }} width={24} height={24}></Image>
        </Link>

        <Link href="/" className='hidden  xxl:block text-black px-20 py-2 bg-white rounded-full font-bold '>
        Post
        </Link>
        <div className='flex items-center justify-between'>
            {/* USER  */}
            <div className='flex items-center  gap-2'>
              <div className='rounded-full  relative overflow-hidden '>
                <Image src="/general/pfp.png" alt='profile' height={38} width={38}  ></Image>
              </div>
              <div className='hidden xxl:flex flex-col '>
                <span className='font-bold'>kiri</span>
                <span className='text-sm text-text-gray'>@kush</span>
              </div>
            </div>
            <div className='hidden xxl:block cursor-pointer font-bold'>...</div>
        </div>
    </div>
}