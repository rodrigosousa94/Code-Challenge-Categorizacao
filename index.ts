interface Product {
    id: number;
    title: string;
    supermarket: string;
}

interface Category { 
    category: string;
    count: number
    products: { title: string, supermarket: string }[]
}

function organizeProductNames(name: string): string {

    return name.toLocaleLowerCase()
    .replace(/(\d+)\s?(litro|kg|quilo)/g, '$1l')  // Uniformiza unidade de medida (Litro/Quilo)
    .replace(/[^\w\s-]/g, '')  // Remove caracteres especiais
    .replace(/\s+/g, ' ')  // Substitui múltiplos espaços por um único
    .split(/\s+/)  // Divide em palavras
    .sort()  // Ordena as palavras para comparação
    .join(' ');  // Junta novamente em uma string

}

function categorizeProducts(products: Product[]): Category[] {
    const categories: { [key: string]: Category } = {}

    products.forEach((product) => {
        const organizedTitle = organizeProductNames(product.title)

        if(!categories[organizedTitle]){
            categories[organizedTitle] = {
                category: product.title,
                count: 0,
                products: []
            }
        }
            categories[organizedTitle].count +=1
            categories[organizedTitle].products.push({
                title: product.title,
                supermarket: product.supermarket
            })
        })
        return Object.values(categories)
}


const data01: Product[] = [
    { id: 1, title: "Leite Integral Piracanjuba 1L", supermarket: "Supermercado A" },
    { id: 2, title: "Leite Piracanjuba Integral 1L", supermarket: "Supermercado B" },
    { id: 3, title: "Leite Integral Italac 1L", supermarket: "Supermercado A" },
    { id: 4, title: "Leite Italac Integral 1L", supermarket: "Supermercado C" },
    { id: 5, title: "Leite Parmalat Integral 1L", supermarket: "Supermercado D" },
    { id: 6, title: "Leite Desnatado Piracanjuba 1L", supermarket: "Supermercado A" },
    { id: 7, title: "Piracanjuba Leite Desnatado 1L", supermarket: "Supermercado B" },
    { id: 8, title: "Leite Semi-Desnatado Piracanjuba 1L", supermarket: "Supermercado A" },
    { id: 9, title: "Leite Piracanjuba Semi Desnatado 1 Litro", supermarket: "Supermercado C" },
    { id: 10, title: "Arroz Branco Tio João 5kg", supermarket: "Supermercado A" },
    { id: 11, title: "Arroz Tio João Branco 5kg", supermarket: "Supermercado B" },
    { id: 12, title: "Arroz Tio João Integral 5kg", supermarket: "Supermercado A" },
    { id: 13, title: "Feijão Carioca Camil 1kg", supermarket: "Supermercado A" },
    { id: 14, title: "Feijão Camil Tipo Carioca 1kg", supermarket: "Supermercado C" },
    { id: 15, title: "Feijao Carioca Camil 1 Quilo", supermarket: "Supermercado D" }
  ];

  const categorizedProducts = categorizeProducts(data01)

  console.log(JSON.stringify(categorizedProducts, null, 2));