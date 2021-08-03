import testObject from "../testObject"

const ProductCard = ({ product }) => {

    let productName = product.productName.replace('WAC ', '').replace('Waconia ', '')
    let saleDate = product.saleDate.split(' ')[0]


    if (productName.includes('(')){
        // console.log('Brackets')
        // console.log(productName.split('(')[0])
        productName = productName.split(' (')[0]
    }

    if (productName.includes('16oz')){
        productName = productName.split(' 16oz')[0]
    }

    let casedProduct = productName.split(' ')
        .map(w => {
            if (w === "CPB" || w === 'IPA'){
                return w.toUpperCase()
            } else {
                return w[0].toUpperCase() + w.substr(1).toLowerCase()
            }
        })
        .join(' ')
    
    return (
        <>
            <li>
                <span>{casedProduct}</span> - <span>{saleDate}</span>
            </li>
        </>
    )
}

export default ProductCard;