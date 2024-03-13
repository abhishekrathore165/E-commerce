import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Component/Breadcrum/Breadcrum'
import  {ShopContext} from '../Context/ShopContext';
import { ProductDisplay } from '../Component/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../Component/DescriptionBox/DescriptionBox';
import { RelatedProduct } from '../Component/RelatedProduct/RelatedProduct';

 export const Product =()=>  {
  const {all_product} = useContext(ShopContext);
   const {ProductId} = useParams();
   const product = all_product.find((e) => e.id === Number(ProductId));
  
  return (
    <div>
         <Breadcrum product={product} />
         <ProductDisplay product={product}/>   
         <DescriptionBox/>
         <RelatedProduct/>
    </div>
  )
}
