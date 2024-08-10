document.addEventListener('alpine:init', () => {
    Alpine.data('product', () => ({
        items: [
            { id: 1, name: 'Nasi Goreng', img: '1.jpg', price: 20000 },
            { id: 2, name: 'Nasi Goreng', img: '1.jpg', price: 20000 },
            { id: 3, name: 'Nasi Goreng', img: '1.jpg', price: 20000 },
            { id: 4, name: 'Nasi Goreng', img: '1.jpg', price: 20000 },
            { id: 5, name: 'Nasi Goreng', img: '1.jpg', price: 20000 },
        ],
    }));
});