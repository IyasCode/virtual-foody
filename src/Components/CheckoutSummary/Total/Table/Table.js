import React, { useContext, useMemo } from "react";
import { useTable, useSortBy } from "react-table";

import classes from "./Table.module.css";
import COLUMNS from "./Columns";
import { StateContext } from "../../../../containers/Checkout/Checkout";

const Table = (props) => {
  const state = useContext(StateContext);
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => state.totalData, [state.totalData]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // footerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  return (
    <table className={classes.customers} {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, index) => (
          <tr key={index} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, index) => (
              <th
                key={index}
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? "-" : "+") : ""}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row);
          return (
            <tr key={index} {...row.getRowProps()}>
              {row.cells.map((cell, index) => (
                <td {...cell.getCellProps()}>
                  {index === 2 ? "$ " : null}
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
      {/* <tfoot>
        {footerGroups.map((footerGroup, index) => (
          <tr key={index} {...footerGroup.getFooterGroupProps()}>
            {footerGroup.headers.map((column, index) => (
              <td key={index} {...column.getFooterProps}>
                {column.render("Footer")}
              </td>
            ))}
          </tr>
        ))}
      </tfoot> */}
    </table>
  );
};

export default Table;
