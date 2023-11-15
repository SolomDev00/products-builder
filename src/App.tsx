import { useState } from "react";
import { productList } from "./data";
import Modal from "./components/UI/Modal";
import Button from "./components/UI/Button";
import ProductsCard from "./components/ProductsCard";

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
        <div className="flex items-center space-x-3">
          <Button className="bg-indigo-700 hover:bg-indigo-800">Submit</Button>
          <Button
            className="bg-gray-600 hover:bg-gray-700"
            onClick={() => closeModal()}
          >
            Cancel
          </Button>
        </div>
      </Modal>
    </main>
  );
};

export default App;
