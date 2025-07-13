import { Image, ImageKitProvider } from '@imagekit/next';

type ImageType = {
    src: string,
    w?: number,
    h?: number,
    alt: string,
    className?: string,
    tr?: boolean
}

export default function CustomImage({tr, src, w, h, alt, className}: ImageType) {
  return (
      <ImageKitProvider urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT}>
      <Image
        src={src}
        width={w}     // Map w to width
        height={h}    // Map h to height  
        alt={alt}
        
        {...(tr ? { 
          transformation: [{
            width: w,
            height: h
          }] 
        } : {})}
        className={className}
      />
    </ImageKitProvider>
  );
}
