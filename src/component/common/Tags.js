import React from 'react';

const Tags = ({ product }) => {
  return (
    <>
      {product.length !== 0 && (
        <div className="flex flex-row">
          <span className="bg-gray-100 border-0 text-gray-500 rounded-full inline-flex items-center justify-center px-2 py-1 text-xs font-semibold font-serif mt-2">
            Test
          </span>
          <span className="bg-gray-100 border-0 text-gray-500 rounded-full inline-flex items-center justify-center px-2 py-1 text-xs font-semibold font-serif mt-2 mx-3">
           Test
          </span>
        </div>
      )}
    </>
  );
};

export default Tags;
