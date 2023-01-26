// mock-backend.js
// NOTE: This file is currently unused
const products = [
  {
    title: 'title1',
    body: 'body1',
    userID: '1',
    postID: '1'
  },
  {
    title: 'title2',
    body: 'body2',
    userID: '1',
    postID: '2'
  },
  {
    title: 'title3',
    body: 'body3',
    userID: '1',
    postID: '3'
  }  
];

/**
 * getProducts - Retrieves a list of products
 *
 * @returns {Promise<Array>} - A promise that resolves with an array of products
 */
export async function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
}

/**
 * createProduct - Creates a new product
 *
 * @param {Object} product - The product object to be created
 * @returns {Promise} - A promise that resolves after the product is added
 */
export async function createProduct(product) {
  return new Promise((resolve) => {
    setTimeout(() => {
      products.push(product);
      resolve();
    }, 1000);
  });
}