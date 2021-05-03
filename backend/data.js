import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Peter',
            email: 'adminexample@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'John',
            email: 'admin12346768@example.com',
            password: bcrypt.hashSync('123456', 8),
            isAdmin: false,
        }

    ],
    products: [
        {
            name: 'Nike Slim Shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'High Quality Fitted Shirt'
        },
        {
            name: 'Adidas Slim Shirt',
            category: 'Shirts',
            image: '/images/p2.jpg',
            price: 100,
            countInStock: 20,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 10,
            description: 'High Quality Fitted Shirt'
        },
        {
            name: 'Lacoste Slim Shirt',
            category: 'Shirts',
            image: '/images/p3.jpg',
            price: 220,
            countInStock: 0,
            brand: 'Lacoste',
            rating: 4.8,
            numReviews: 17,
            description: 'High Quality Fitted Shirt'
        },
        {
            name: 'Nike Slim Pants',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 120,
            countInStock: 15,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'High Quality Fitted Pants'
        },
        {
            name: 'Puma Slim Pant',
            category: 'Pants',
            image: '/images/p5.jpg',
            price: 65,
            countInStock: 5,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 10,
            description: 'High Quality Fitted Pants'
        },
        {
            name: 'Adidas Slim Pant',
            category: 'Pants',
            image: '/images/p6.jpg',
            price: 139,
            countInStock: 20,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 10,
            description: 'High Quality Fitted Pants'
        }
    ]
}

export default data;