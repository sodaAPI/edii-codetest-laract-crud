import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { FaEdit, FaPlusCircle, FaSearch, FaSpinner, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Pagination from "../components/Pagination";

export default function Management() {
  const navigate = useNavigate();
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state

  const getItem = async () => {
    setIsLoading(true); // Set loading to true before fetching data
    try {
      const response = await axios.get(`http://localhost:8000/api/item/get`);
      setItem(response.data);
    } catch (error) {
      console.error("Error fetching item data:", error);
      alert(error);
    } finally {
      setIsLoading(false); // Set loading to false after fetching data
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  const deleteItem = async (id) => {
    const result = window.confirm("Are you sure you want to delete this item?");
    if (result) {
      try {
        await axios.delete(`http://localhost:8000/api/item/delete/${id}`);
        getItem();
      } catch (error) {
        console.error("Error deleting booking:", error);
        alert(error);
      }
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter items based on the search term
  const filteredItems = item.filter((items) =>
    new RegExp(searchTerm, "i").test(items.name)
  );

  // Calculate the index of the last item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  // Calculate the index of the first item on the current page
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Get the current items to display based on filtered items
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const formatPrice = (price) => {
    return `Rp. ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
  };

  return (
    <>
      <Header />
      <section className="pt-[125px] px-[50px]">
        <h1 className="text-[24px] font-bold pb-5">Shop Database</h1>
        <div className="flex flex-row gap-5 pb-5">
          <button
            onClick={() => navigate(`/management/create`)}
            className="flex flex-row gap-2 items-center bg-[#85a236] p-3 rounded-[16px] text-[16px] text-white font-semibold hover:bg-[#9ec040]">
            <FaPlusCircle /> Create
          </button>
          <div className="flex flex-row items-center">
            <div className="bg-[#c14fee] p-3 rounded-l-xl">
              <FaSearch className="w-6 h-6 text-white" />
            </div>
            <input
              className="bg-white rounded-r-xl border-none rounded-l-none p-3 text-gray-800"
              type="text"
              placeholder="Search item name ..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>
        </div>
        <div className="overflow-auto">
          {isLoading ? ( 
            <div className="flex flex-col text-[32px] items-center gap-5 text-center py-[100px]">
              <FaSpinner className="animate-spin text-[#FF6A35]" />
            </div>
          ) : (
            <>
              {filteredItems.length === 0 ? ( // Check if no items found
                <div className="flex flex-col text-center py-5">
                  <p className="text-xl">No items found.</p>
                </div>
              ) : (
                <>
                  <table className="table table-zebra">
                    <thead>
                      <tr className="text-[16px]">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentItems.map((items) => (
                        <tr key={items.id}>
                          <td>{items.id}</td>
                          <td>{items.name}</td>
                          <td>{items.description}</td>
                          <td>{items.stock}</td>
                          <td>{formatPrice(items.price)}</td>
                          <td className="flex flex-row gap-5 items-center">
                            <button
                              onClick={() => deleteItem(items.id)}
                              className="flex flex-row gap-2 items-center bg-[#ff0000] p-2 rounded-[16px] text-white font-semibold hover:bg-[#ff4747]">
                              <FaTrash /> Delete
                            </button>
                            <button
                              onClick={() => navigate(`/management/update/${items.id}`)}
                              className="flex flex-row gap-2 items-center bg-[#693edf] p-2 rounded-[16px] font-semibold text-white hover:bg-[#8154ff]">
                              <FaEdit /> Update
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="max-sm:pb-[50px]">
                    <Pagination
                      currentPage={currentPage}
                      itemsPerPage={itemsPerPage}
                      totalItems={filteredItems.length}
                      handlePageChange={handlePageChange}
                    />
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
