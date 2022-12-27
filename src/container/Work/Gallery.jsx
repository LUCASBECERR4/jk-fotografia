import React, {useState} from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { AiOutlineClose } from 'react-icons/ai'
// import { LazyLoadImage } from 'react-lazy-load-image-component';

import './Gallery.scss';

import galeria1 from '../../assets/galeria/galeria1.jpg'
import galeria2 from '../../assets/galeria/galeria2.jpg'
import galeria3 from '../../assets/galeria/galeria3.jpg'
import galeria4 from '../../assets/galeria/galeria4.jpg'
import galeria5 from '../../assets/galeria/galeria5.jpg'
import galeria6 from '../../assets/galeria/galeria6.jpg'
import galeria7 from '../../assets/galeria/galeria7.jpg'
import galeria8 from '../../assets/galeria/galeria8.jpg'
import galeria9 from '../../assets/galeria/galeria9.jpg'
import galeria10 from '../../assets/galeria/galeria10.jpg'
import galeria11 from '../../assets/galeria/galeria11.jpg'
import galeria12 from '../../assets/galeria/galeria12.jpg'
import galeria13 from '../../assets/galeria/galeria13.jpg'
import galeria14 from '../../assets/galeria/galeria14.jpg'
import galeria15 from '../../assets/galeria/galeria15.jpg'
import galeria16 from '../../assets/galeria/galeria16.jpg'
import galeria17 from '../../assets/galeria/galeria17.jpg'
import galeria18 from '../../assets/galeria/galeria18.jpg'
import galeria19 from '../../assets/galeria/galeria19.jpg'
import galeria20 from '../../assets/galeria/galeria20.jpg'
import galeria21 from '../../assets/galeria/galeria21.jpg'
import galeria22 from '../../assets/galeria/galeria22.jpg'
import galeria23 from '../../assets/galeria/galeria23.jpg'
import galeria24 from '../../assets/galeria/galeria24.jpg'
import galeria25 from '../../assets/galeria/galeria25.jpg'
import galeria26 from '../../assets/galeria/galeria26.jpg'
import galeria27 from '../../assets/galeria/galeria27.jpg'
import galeria28 from '../../assets/galeria/galeria28.jpg'


const Gallery = () => {

    
  let images =[
    {
        id:1,
        imgSrc: galeria1,
    },
    {
        id:2,
        imgSrc: galeria2,
    },
    {
        id:3,
        imgSrc: galeria3,
    },
    {
        id:4,
        imgSrc: galeria4,
    },
    {
        id:5,
        imgSrc: galeria5,
    },
    {
        id:6,
        imgSrc: galeria6,
    },
    {
        id:7,
        imgSrc: galeria7,
    },
    {
        id:8,
        imgSrc: galeria8,
    },
    {
        id:9,
        imgSrc: galeria9,
    },
    {
        id:10,
        imgSrc: galeria10,
    },
    {
        id:11,
        imgSrc: galeria11,
    },
    {
        id:12,
        imgSrc: galeria12,
    },
    {
        id:13,
        imgSrc: galeria13,
    },
    {
        id:14,
        imgSrc: galeria14,
    },
    {
        id:15,
        imgSrc: galeria15,
    },
    {
        id:16,
        imgSrc: galeria16,
    },
    {
        id:17,
        imgSrc: galeria17,
    },
    {
        id:18,
        imgSrc: galeria18,
    },
    {
        id:19,
        imgSrc: galeria19,
    },
    {
        id:20,
        imgSrc: galeria20,
    },
    {
        id:21,
        imgSrc: galeria21,
    },
    {
        id:21,
        imgSrc: galeria21,
    },
    {
        id:22,
        imgSrc: galeria22,
    },
    {
        id:23,
        imgSrc: galeria23,
    },
    {
        id:24,
        imgSrc: galeria24,
    },
    {
        id:25,
        imgSrc: galeria25,
    },
    {
        id:26,
        imgSrc: galeria26,
    },
    {
        id:27,
        imgSrc: galeria27,
    },
    {
        id:28,
        imgSrc: galeria28,
    },
  ]

const [model, setModel] = useState(false);
const [tempimgSrc, setTempimgSrc] = useState('')

const getImg = (imgSrc) =>{
    setTempimgSrc(imgSrc);
    setModel(true);
}
    
  return(
    <>
     <div className={ model? "model open" : "model" }>
        <img src={tempimgSrc} />
        <AiOutlineClose onClick={()=> setModel(false)} />
     </div>

    <div style={{ padding: "10px" }}>

     <ResponsiveMasonry
        columnsCountBreakPoints={{350:1, 750:2, 900:3}}
       >
        <Masonry gutter='20px'>
            {images.map((image, i)=>(
                <img
                key={i}
                src={image.imgSrc}
                style={{ with: "100%", display:"block", cursor:"pointer" }}
                alt="foto"
                onClick={()=> getImg(image.imgSrc)}
                loading="lazy"
                />
            ))}
        </Masonry>
      </ResponsiveMasonry>

    </div>
    </>
  )
}

export default Gallery