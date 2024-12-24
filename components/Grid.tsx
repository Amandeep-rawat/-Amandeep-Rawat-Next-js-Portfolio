// import { section } from 'framer-motion/client';
import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { gridItems } from '@/data';

const Grid = () => {
  return (
    <section id='about' className=''>
        <BentoGrid>
            {gridItems.map((item,i)=>{
                return(
                    <BentoGridItem className={item.className}
                    key={item.id} title={item.title} description={item.description} id={item.id}  img={item.img} imgClassName={item.imgClassName} titleClassName={item.titleClassName} spareImg={item.spareImg}/>
                )
            })}
        </BentoGrid>
    </section>
  );
}

export default Grid;
