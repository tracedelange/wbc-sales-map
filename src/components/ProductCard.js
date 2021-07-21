const ProductCard = ({product}) => {


    let splitProductName = (product.productName).split(' ')
    let productName = (splitProductName.splice(1)).join(' ')

    let saleDate = product.saleDate.split(' ')[0]


    return (
        <>
        <li>
            <span>{productName}</span> - <span>{saleDate}</span>
        </li>
        </>
    )
}

export default ProductCard;