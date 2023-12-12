import Image from "./Image";
import Button from "./schema/Button";
import CircleColor from "./CircleColor";
import { IProduct } from "../interfaces";
import { txtSlicer, numberWithCommas } from "../utils/functions";
import { memo } from "react";

interface IProps {
  idx: number;
  product: IProduct;
  openEditModal: () => void;
  openConfirmModal: () => void;
  setProductToEditIdx: (value: number) => void;
  setProductToEdit: (product: IProduct) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
const ProductsCard = ({
  product,
  setProductToEdit,
  openEditModal,
  idx,
  setProductToEditIdx,
  openConfirmModal,
}: IProps) => {
  const { title, description, imageURL, price, colors, category } = product;

  /* -------- RENDER -------- */
  const renderProductColors = colors.map((color) => (
    <CircleColor key={color} color={color} />
  ));

  /* -------- HANDLER -------- */
  const onEdit = () => {
    setProductToEdit(product);
    openEditModal();
    setProductToEditIdx(idx);
  };

  const onRemove = () => {
    setProductToEdit(product);
    openConfirmModal();
  };

  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
      <Image imageURL={imageURL} alt={title} className="rounded-md mb-2" />
      <h3 className="text-lg font-semibold">{txtSlicer(title, 20)}</h3>
      <p className="text-xs text-gray-500 breack-words">
        {txtSlicer(description, 65)}
      </p>
      <div className="flex items-center flex-wrap space-x-1 my-3">
        {!colors.length ? (
          <p className="min-h-[20px]">Not available colors!</p>
        ) : (
          renderProductColors
        )}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-lg text-indigo-600 font-medium">
          ${numberWithCommas(price)}
        </span>
        <Image
          title={category.name}
          imageURL={category.imageURL}
          alt={category.name}
          className="w-10 h-10 rounded-full object-center cursor-pointer"
        />
      </div>
      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={onEdit}>
          Edit
        </Button>
        <Button className="bg-[#c2344d] hover:bg-red-800" onClick={onRemove}>
          Remove
        </Button>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(ProductsCard);
