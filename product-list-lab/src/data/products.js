// src/data/products.js
export const categories = [
    { id: 'all', name: 'ทั้งหมด' },
    { id: 'electronics', name: 'อิเล็กทรอนิกส์' },
    { id: 'clothing', name: 'เสื้อผ้า' },
    { id: 'books', name: 'หนังสือ' }
];

// ข้อมูลสินค้าพื้นฐาน - นักศึกษาจะเพิ่มเติมใน Challenge
export const products = [
    {
        id: 1,
        name: 'iPhone 15 Pro',
        category: 'electronics',
        price: 45900,
        originalPrice: 49900,
        discount: 8,
        image: 'https://placehold.co/300x300/007bff/ffffff?text=iPhone+15',
        description: 'สมาร์ทโฟนล่าสุดจาก Apple',
        inStock: true,
        rating: 4.8
    },
    {
        id: 2,
        name: 'เสื้อยืดผ้าฝ้าย',
        category: 'clothing',
        price: 299,
        originalPrice: 399,
        discount: 25,
        image: 'https://placehold.co/300x300/ffc107/000000?text=T-Shirt',
        description: 'เสื้อยืดผ้าฝ้าย 100% นุ่มสบาย',
        inStock: true,
        rating: 4.2
    },
    {
        id: 3,
        name: 'หนังสือ React.js Guide',
        category: 'books',
        price: 650,
        originalPrice: 650,
        discount: 0,
        image: 'https://placehold.co/300x300/17a2b8/ffffff?text=React+Book',
        description: 'คู่มือเรียนรู้ React.js ฉบับสมบูรณ์',
        inStock: false,
        rating: 4.7
    },
    {
        id: 4,
        name: 'หูฟังไร้สาย',
        category: 'electronics',
        price: 1990,
        originalPrice: 2490,
        discount: 20,
        image: 'https://placehold.co/300x300/6f42c1/ffffff?text=Wireless+Headphones',
        description: 'หูฟังไร้สายคุณภาพเสียงเยี่ยม',
        inStock: true,
        rating: 4.5
    },
    {
        id: 5,
        name: 'กระเป๋าเป้เดินทาง',
        category: 'clothing',
        price: 1290,
        originalPrice: 1590,
        discount: 19,
        image: 'https://placehold.co/300x300/28a745/ffffff?text=Backpack',
        description: 'กระเป๋าเป้เดินทางขนาดใหญ่',
        inStock: true,
        rating: 4.3
    },
    {
        id: 6,
        name: 'ชุดเครื่องเขียน',
        category: 'books',
        price: 150,
        originalPrice: 200,
        discount: 25,
        image: 'https://placehold.co/300x300/dc3545/ffffff?text=Stationery+Set',
        description: 'ชุดเครื่องเขียนสำหรับนักเรียน',
        inStock: true,
        rating: 4.6
    }
];