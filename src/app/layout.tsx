
import "./globals.css";
import Leftbar from "@/components/LeftBar";
import Rightbar from "@/components/Rightbar";



export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
        <div className="flex justify-between mx-auto max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl">
          <div className="w-[88px] xxl:w-[250px] min-w-[88px] px-2 xxl:px-8 xsm:px-4">
            <Leftbar />
          </div>
          <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-border-gray">
            {children}
            {modal}
          </div>
          <div className="ml-4 md:ml-8 hidden lg:flex flex-1">
            <Rightbar />
          </div>
        </div>
      </body>
    </html>
  );
}
