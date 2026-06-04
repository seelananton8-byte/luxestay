import data from '../assets/projects.json'
import { useState } from 'react'
import { Product } from '../service/Product'

export default function Home() {
    const [products] = useState(data)
    return (
        <div className="product-container">
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
            </div>
    )
}