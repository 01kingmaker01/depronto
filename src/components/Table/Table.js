import { useSortableTable } from "../../hooks/useSortableTable";
// import data from "./data.json";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = ({ caption, data, columns }) => {
  const [dataState, handleSorting] = useSortableTable(data);

  return (
    <div className="tableCon" id="data-table">
      <table className="table">
        <caption>{caption}</caption>
        <TableHead columns={columns} handleSorting={handleSorting} />
        <TableBody columns={columns} data={dataState} />
      </table>
    </div>
  );
};

export default Table;
