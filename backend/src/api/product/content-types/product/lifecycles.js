function generatePersianSlug(text) {
  return text
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^آ-یa-zA-Z0-9\-]/g, "")
    .toLowerCase();
}

module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;
    if (data.product_title) {
      if (!data.product_slug || data.product_slug == null) {
        data.product_slug = generatePersianSlug(data.product_title);
      }
    }
  },
  async beforeUpdate(event) {
    const { data, where } = event.params;
    
    if (!where || !where.id) {
      return;
    }

    const existingProduct = await strapi.entityService.findOne(
      "api::product.product",
      where.id
    );

    if (!existingProduct) {
      return;
    }

    if (data.product_title) {
      if (
        data.product_title &&
        data.product_title !== existingProduct.product_title &&
        (!data.product_slug || data.product_slug == null)
      ) {
        data.product_slug = generatePersianSlug(data.product_title);
      }
    }
  },
};
