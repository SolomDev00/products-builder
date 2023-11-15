import Image from "./Image";
import Button from "./UI/Button";
import { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";

interface IProps {
  product: IProduct;
}

const ProductsCard = ({ product }: IProps) => {
  const { title, description, imageURL, price, category } = product;

  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
      <Image imageURL={imageURL} alt={title} className="rounded-md mb-2" />
      <h3 className="text-lg font-semibold">{txtSlicer(title, 25)}</h3>
      <p className="text-xs text-gray-500 breack-words">
        {txtSlicer(description, 65)}
      </p>
      <div className="flex items-center my-4 space-x-2">
        <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-yellow-500 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-red-500 rounded-full cursor-pointer" />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-base text-indigo-600">{price}$</span>
        <Image
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
