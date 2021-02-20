export default class Product {
	constructor(owner_id = 1, slug, price, title, id, sku, image_url, category, ss_image_url, sizes) {
		this.owner_id = owner_id;
		this.slug = slug;
		this.price = price;
		this.title = title;
		this.id = id;
		this.sku = sku;
		this.image_url = image_url;
		this.category = category;
		this.ss_image_url = ss_image_url;
		this.sizes = sizes;
	}
}
