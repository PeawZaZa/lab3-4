import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList({ products, categories, onAddToCart, onViewDetails }) {
    // State สำหรับการกรองและเรียงลำดับ
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('none'); // 'none', 'name_asc', 'price_asc', 'price_desc', 'rating_desc'

    // ใช้ useMemo ในการคำนวณ filtered และ sorted products เพื่อประสิทธิภาพ
    const displayedProducts = useMemo(() => {
        // 1. กรองสินค้าตามหมวดหมู่
        let currentProducts = selectedCategory === 'all' 
            ? products 
            : products.filter(product => product.category === selectedCategory);
        
        // 2. กรองสินค้าตามคำค้นหา (Search)
        if (searchQuery) {
            const lowerCaseQuery = searchQuery.toLowerCase();
            currentProducts = currentProducts.filter(product =>
                product.name.toLowerCase().includes(lowerCaseQuery) ||
                product.description.toLowerCase().includes(lowerCaseQuery)
            );
        }

        // 3. เรียงลำดับสินค้า (Sort)
        if (sortBy !== 'none') {
            currentProducts = [...currentProducts].sort((a, b) => {
                switch (sortBy) {
                    case 'name_asc':
                        return a.name.localeCompare(b.name);
                    case 'price_asc':
                        return a.price - b.price;
                    case 'price_desc':
                        return b.price - a.price;
                    case 'rating_desc':
                        return b.rating - a.rating;
                    default:
                        return 0;
                }
            });
        }

        return currentProducts;
    }, [products, selectedCategory, searchQuery, sortBy]);

    return (
        <div className="product-list-container">
            {/* Header */}
            <div className="header">
                <h1>🛍️ ร้านค้าออนไลน์</h1>
                <p>Lab 3.2 - การสร้าง Components และ Props</p>
            </div>

            {/* Controls: Category Filter, Search, and Sort */}
            <div className="controls-container" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '30px' }}>
                {/* Category Filter */}
                <div>
                    <label htmlFor="category-select">หมวดหมู่: </label>
                    <select 
                        id="category-select"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        style={{ padding: '8px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
                    >
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                
                {/* Search Box */}
                <div>
                    <label htmlFor="search-input">ค้นหา: </label>
                    <input
                        id="search-input"
                        type="text"
                        placeholder="ชื่อ, รายละเอียดสินค้า..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ padding: '8px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc', width: '250px' }}
                    />
                </div>

                {/* Sort Dropdown */}
                <div>
                    <label htmlFor="sort-select">เรียงลำดับโดย: </label>
                    <select 
                        id="sort-select"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        style={{ padding: '8px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
                    >
                        <option value="none">ไม่เรียงลำดับ</option>
                        <option value="name_asc">ชื่อ (A-Z)</option>
                        <option value="price_asc">ราคา (ต่ำไปสูง)</option>
                        <option value="price_desc">ราคา (สูงไปต่ำ)</option>
                        <option value="rating_desc">เรตติ้ง (สูงไปต่ำ)</option>
                    </select>
                </div>
            </div>

            {/* Products Display */}
            {displayedProducts.length > 0 ? (
                <div className="products-grid">
                    {displayedProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={onAddToCart}
                            onViewDetails={onViewDetails}
                        />
                    ))}
                </div>
            ) : (
                <div style={{ textAlign: 'center', padding: '50px', fontSize: '1.2rem', color: '#6c757d' }}>
                    ไม่พบสินค้าที่ตรงกับเงื่อนไขการค้นหา/กรอง
                </div>
            )}

            {/* TODO: นักศึกษาจะเพิ่ม:
                - Advanced filters (เหลือแค่ Advanced filters)
                - Empty state handling (ได้ทำไปแล้ว)
                - Loading states
            */}
        </div>
    );
}

// TODO: นักศึกษาจะปรับปรุง PropTypes ให้ละเอียดมากขึ้น
ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    onAddToCart: PropTypes.func.isRequired,
    onViewDetails: PropTypes.func.isRequired
};

export default ProductList;