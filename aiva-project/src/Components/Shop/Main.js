import React from 'react'
import Product from './Product'
import img from '../../images/bec.png'

export default function Main() {

  const DOLLAR_TO_LEI = 4.75

  function transformLeiToDollar (value) {
    return Math.round(value / DOLLAR_TO_LEI) - 0.01
  }
  const data = [
  {
    id:1,
    img: img,
    status:true,
    name: 'Bec LED Philips, E27, 13W (90W), 1450 lm,Clasa energetica F, lumina naturala rece (6500K)',
    link:'https://www.emag.ro/bec-led-philips-e27-13w-90w-1450-lm-clasa-energetica-f-lumina-naturala-rece-6500k-8718699745660/pd/DHK483MBM/?X-Search-Id=1486006f8f02053e2682&X-Product-Id=7034352&X-Search-Page=1&X-Search-Position=1&X-Section=search&X-MB=0&X-Search-Action=view',
    price:transformLeiToDollar(12.99) 
  },
  {
    id:2,
    img: img,
    rating:4.47,
    reviewNumber:40,
    status:true,
    name: 'Bec LED Philips, E27, 13W (90W), 1450 lm,Clasa energetica F, lumina naturala rece (6500K)',
    link:'https://www.emag.ro/bec-led-philips-e27-13w-90w-1450-lm-clasa-energetica-f-lumina-naturala-rece-6500k-8718699745660/pd/DHK483MBM/?X-Search-Id=1486006f8f02053e2682&X-Product-Id=7034352&X-Search-Page=1&X-Search-Position=1&X-Section=search&X-MB=0&X-Search-Action=view',
    price:transformLeiToDollar(12.99) 
  },
  {
    id:3,
    img: img,
    rating:4.47,
    reviewNumber:40,
    status:true,
    name: 'Bec LED Philips, E27, 13W (90W), 1450 lm,Clasa energetica F, lumina naturala rece (6500K)',
    link:'https://www.emag.ro/bec-led-philips-e27-13w-90w-1450-lm-clasa-energetica-f-lumina-naturala-rece-6500k-8718699745660/pd/DHK483MBM/?X-Search-Id=1486006f8f02053e2682&X-Product-Id=7034352&X-Search-Page=1&X-Search-Position=1&X-Section=search&X-MB=0&X-Search-Action=view',
    price:transformLeiToDollar(12.99) 
  },
  {
    id:4,
    img: img,
    rating:4.47,
    reviewNumber:40,
    status:true,
    name: 'Bec LED Philips, E27, 13W (90W), 1450 lm,Clasa energetica F, lumina naturala rece (6500K)',
    link:'https://www.emag.ro/bec-led-philips-e27-13w-90w-1450-lm-clasa-energetica-f-lumina-naturala-rece-6500k-8718699745660/pd/DHK483MBM/?X-Search-Id=1486006f8f02053e2682&X-Product-Id=7034352&X-Search-Page=1&X-Search-Position=1&X-Section=search&X-MB=0&X-Search-Action=view',
    price:transformLeiToDollar(12.99) 
  }
]

  const productElements = data.map(item => {
    return <Product
      {...item}
      key = {item.id}
    />
  }) 
  return (
    
    <main className='shop--main'>
      {productElements}
    </main>
  )
}
