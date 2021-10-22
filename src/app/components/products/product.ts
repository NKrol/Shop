export interface Product {
    items: [
        productId: number,
        productName: string,
        productDesc: string,
        productCode: number,
        category: string,
        subcategory: string,
        bruttoPrice: number,
        nettoPrice: number,
        quantity: number,
        imgPath: string
    ],
    totalPages: number,
    itemFrom: number,
    itemsTo: number,
    totalItems: number
}