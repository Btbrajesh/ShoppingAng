export interface Product{
    productId : number;
    productName : string;
    productCategory : number;
    productSubCategory : number;
    productDescription : string;
    productPrice : DoubleRange;
    status : boolean;
    productImages :[
        productImageId : number,
        productId : number,
        imageName : string
    ]
}