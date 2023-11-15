import Modal from "./components/UI/Modal";
import Input from "./components/UI/Input";
import Button from "./components/UI/Button";
import { ChangeEvent, FormEvent, useState } from "react";
import { formInputList, productList } from "./data";
import ProductsCard from "./components/ProductsCard";
import { IProduct } from "./interfaces";

const App = () => {
  const defaultProductObj = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  /* -------- STATE -------- */
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const sumbitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  const onCancel = () => {
    setProduct(defaultProductObj);
    closeModal();
  };

  /* -------- HANDLER -------- */
  const renderProductList = productList.map((product) => (
    <ProductsCard key={product.id} product={product} />
  ));
  const renderFormInputList = formInputList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label
        htmlFor={input.id}
        className="mb-[1px] text-sm font-medium text-gray-700"
      >
        {input.label}
      </label>
      <Input
        type={input.type}
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
    </div>
  ));

  return (
    <main className="container">
      <Button
        className="bg-indigo-700 hover:bg-indigo-800"
        onClick={() => openModal()}
      >
        ADD A NEW CAR
      </Button>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW CAR!">
        <form className="space-y-3" onSubmit={sumbitHandler}>
          {renderFormInputList}
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800">
              Submit
            </Button>
            <Button
              className="bg-gray-600 hover:bg-gray-700"
              onClick={() => closeModal()}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
};

export default App;
