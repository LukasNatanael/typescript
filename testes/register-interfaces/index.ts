type categories  = 'Food' | 'Clothes' | 'Accessories' | 'Objects' | 'Eletronics' | 'Others'
type genres     = 'Masculino' | 'Feminina'
type clothesSize = 'PP' | 'P' | 'M' | 'G' | 'GG'
type shoesSize   = 36 | 37 | 38 | 39
type clothesMaterial = 'Algodão' | 'Seda' | 'Linho' | 'Poliéster' | 'Lã' | 'Couro' | 'Elastano' | 'Nylon' | 'Alfaiataria'

interface Product {
    name: string
    category: categories
    price: number
    registerDate: string
}

interface Clothes extends Product {
    size: clothesSize | shoesSize
    color: string
    genre: genres
    material: clothesMaterial
}

interface Food extends Product {
    validate: string
}


// criar função para criar novas categorias

// criar validador de opções

