const Catalog = () => {
    
    
    
        axios.get('https://dummyjson.com/products/category/groceries')
            .then(response => {
                setCatalog(response.data.products)
            })
}