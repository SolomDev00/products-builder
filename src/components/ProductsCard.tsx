import Image from "./Image";
import Button from "./schema/Button";
import CircleColor from "./CircleColor";
import { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";

interface IProps {
  product: IProduct;
}

const ProductsCard = ({ product }: IProps) => {
  const { title, description, imageURL, price, colors, category } = product;

  /* -------- HANDLER -------- */
  const renderProductColors = colors.map((color) => (
    <CircleColor key={color} color={color} />
  ));

  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
      <Image imageURL={imageURL} alt={title} className="rounded-md mb-2" />
      <h3 className="text-lg font-semibold">{txtSlicer(title, 20)}</h3>
      <p className="text-xs text-gray-500 breack-words">
        {txtSlicer(description, 65)}
      </p>
      <div className="flex items-center my-4 space-x-1">
        {renderProductColors}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-base text-indigo-600">{price}$</span>
        <Image
          title={category.name}
          imageURL={category.imageURL}
          alt={category.name}
          className="w-10 h-10 rounded-full object-center cursor-pointer"
        />
      </div>
      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button className="bg-indigo-700">Edit</Button>
        <Button className="bg-red-700">Delete</Button>
      </div>
    </div>
  );
};

export default ProductsCard;
