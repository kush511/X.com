import Link from "next/link";
import PopularTags from "./PopularTags";
import Recommendations from "./Recommendations";
import Search from "./Search";

export default function Rightbar(){
    return <div className="pt-4 flex flex-col gap-4 sticky top-[12px] h-[calc(100vh-12px)] overflow-scroll scrollbar-hide ">
        <Search/>
        
        <PopularTags/>
        <Recommendations/>

       <div className="text-text-gray text-sm flex gap-x-4 flex-wrap " >
        
        <Link href="/"> Terms of service | </Link>
        <Link href="/"> Privacy policy | </Link>
        <Link href="/"> Cookie policy | </Link>
      <div className="flex gap-x-4 flex-wrap">
          <Link href="/"> Accessibility | </Link>
        <Link href="/"> Ads info | </Link>
        <Link href="/"> More ... </Link>
      </div>
        <span>2025 X corp</span>
       </div>
    </div>
}