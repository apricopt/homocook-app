import * as React from 'react';
import { DataTable } from 'react-native-paper';

const optionsPerPage = [2, 3, 4];

const MyComponent = () => {
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Order Name</DataTable.Title>
        <DataTable.Title numeric>Price</DataTable.Title>
        <DataTable.Title numeric>OrderStatus</DataTable.Title>
      </DataTable.Header>

    

      <DataTable.Row>
        <DataTable.Cell>Aaloo gobi</DataTable.Cell>
        <DataTable.Cell numeric>150 PKR</DataTable.Cell>
        <DataTable.Cell numeric>Come Get it</DataTable.Cell>
      </DataTable.Row>

      {/* <DataTable.Pagination
        page={page}
        numberOfPages={3}
        onPageChange={(page) => setPage(page)}
        label="1-2 of 6"
        optionsPerPage={optionsPerPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        showFastPagination
        optionsLabel={'Rows per page'}
      /> */}
    </DataTable>
  );
}

export default MyComponent;