import { useState } from "react";
import { formInputList, productList } from "./data";
import Modal from "./components/UI/Modal";
import Button from "./components/UI/Button";
import ProductsCard from "./components/ProductsCard";
import Input from "./components/UI/Input";

const App = () => {
  /* -------- STATE -------- */
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  /* -------- HANDLER -------- */
  const renderProductList = productList.map((product) => (
    <ProductsCard key={product.id} product={product} />
  ));
  const renderFormInputList = formInputList.map((input) => (
    <div className="flex flex-col">
      <label
        htmlFor={input.id}
        className="mb-[1px] text-sm font-medium text-gray-700"
      >
        {input.label}
      </label>
      <Input type={input.type} id={input.id} name={input.name} />
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
        <form className="space-y-3">
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
