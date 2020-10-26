import React from 'react';

const CreateSO = (props) => {
  const { salesOrderData, handleSalesOrderSubmit } = props;

  return (
    <div>
      <h3>Create Sales Order</h3>
      {
        salesOrderData.products.map(product => (
          <div key={product.id}>
            <p>{product.name}</p>
          </div>
        )
          )
      }
      <button onClick={handleSalesOrderSubmit}>Submit Sales Order</button>
    </div>
  );
};

export default CreateSO;