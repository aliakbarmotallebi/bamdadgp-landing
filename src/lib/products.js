import { mockProducts } from '@/data/mockProducts'

function toListItem(product) {
  return {
    id: product.id,
    product_slug: product.product_slug,
    product_title: product.product_title,
    product_price: product.product_price,
    product_image: product.product_image,
    product_category: product.product_category,
  }
}

export function getProducts({ page = 1, limit = 20 } = {}) {
  const safePage = Math.max(1, Number(page) || 1)
  const safeLimit = Math.min(50, Math.max(1, Number(limit) || 20))
  const start = (safePage - 1) * safeLimit
  const sliced = mockProducts.slice(start, start + safeLimit)

  return {
    data: sliced.map(toListItem),
    meta: {
      pagination: {
        page: safePage,
        pageSize: safeLimit,
        pageCount: Math.ceil(mockProducts.length / safeLimit) || 1,
        total: mockProducts.length,
      },
    },
  }
}

export function getProductBySlug(slug) {
  const product = mockProducts.find(item => item.product_slug === slug)
  return {
    data: product ? [product] : [],
  }
}

export function getRelatedProducts(catId, excludeSlug, limit = 10) {
  const related = mockProducts
    .filter(
      item =>
        String(item.product_category?.id) === String(catId) &&
        item.product_slug !== excludeSlug
    )
    .slice(0, limit)
    .map(toListItem)

  return { data: related }
}

export function getProductsByIds(ids = []) {
  const idSet = new Set(ids.map(String))
  return mockProducts
    .filter(item => idSet.has(String(item.id)))
    .map(product => ({
      id: product.id,
      product_slug: product.product_slug,
      product_title: product.product_title,
      product_price: product.product_price,
      product_image: product.product_image,
      product_category: product.product_category,
    }))
}

export function getAllProductSlugs() {
  return mockProducts.map(item => item.product_slug)
}
