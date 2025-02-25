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
    const { data } = event.params;
    console.log(data);
    if (data.product_title) {
      if (
        !data.product_slug ||
        data.product_slug != data.product_title ||
        data.product_slug == null
      ) {
        data.product_slug = generatePersianSlug(data.product_title);
      }
    }
  },
};
