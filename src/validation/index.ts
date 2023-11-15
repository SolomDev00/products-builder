export const productValidation = (product: {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}) => {
  const errorsObj: {
    title: string;
    description: string;
    imageURL: string;
    price: string;
  } = { title: "", description: "", imageURL: "", price: "" };

  /* -------- RegX Validation -------- */
  const validURL = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL);

  /* -------- Validation [ Title, Description, ImageURL, Price ] -------- */
  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    errorsObj.title = "Product title must be between 10 and 80 characters!";
  }

  if (
    !product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 900
  ) {
    errorsObj.description =
      "Product description must be between 10 and 900 characters!";
  }

  if (!product.imageURL.trim() || !validURL) {
    errorsObj.imageURL = "Valid image URL is required!";
  }

  if (!product.price.trim() || isNaN(Number(product.price))) {
    errorsObj.price = "Valid price is required!";
  }

  return errorsObj;
};
