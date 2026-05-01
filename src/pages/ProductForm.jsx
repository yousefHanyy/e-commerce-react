function ProductForm() {
  // Name
  // Price
  // Choosing a category from a dropdown list and when chosen assigns a categoryId value.
  return (
    <div className="flex justify-center items-center mt-25">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Adding products:</legend>

        <label className="label">Product Name</label>
        <input type="text" className="input" placeholder="Fries" />

        <label className="label">Product Price</label>
        <input type="text" className="input" placeholder="75" />

        <label className="label">Author</label>
        <input type="text" className="input" placeholder="Name" />
      </fieldset>
    </div>
  );
}

export default ProductForm;
