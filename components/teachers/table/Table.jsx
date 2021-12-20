import React from "react";
import "./Table.css";

const Table = ({ el }) => {
  return (
    <table style={{ width: "90%" }}>
      <tbody>
        <tr key="1">
          <td className="td-1">Овог</td>
          <td className="td-2">{el.lastName}</td>
        </tr>
        <tr key="2">
          <td className="td-1">Нэр</td>
          <td className="td-2">{el.firstName}</td>
        </tr>
        <tr key="3">
          <td className="td-1">Хүйс</td>
          <td className="td-2">{el.sex}</td>
        </tr>
        <tr key="4">
          <td className="td-1">Төлөв</td>
          <td className="td-2">{el.tolow}</td>
        </tr>
        <tr key="5">
          <td className="td-1">Эзэмшсэн боловсрол</td>
          <td className="td-2">{el.bolowsrol}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
