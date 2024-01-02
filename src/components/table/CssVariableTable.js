import React from "react";

const CssVariableTable = ({ api, category }) => {
  const { props } = api; // tag, props, dataattribute 다 포함한 것들
  // console.log(props);
  // console.log(category);
  return (
    <table>
      <thead>
        <tr>
          <td>CSS Variable</td>
          <td>Description</td>
        </tr>
      </thead>
      <tbody>
        {props.map((prop, i) => {
          if (prop.tag === category) {
            // console.log(prop.dataAttribute);
            return <RowElement cssVariable={prop.cssVariable} key={i} />;
          }
        })}
      </tbody>
    </table>
  );
};
export default CssVariableTable;

function RowElement(props) {
  // console.log(dataAttribute.dataAttribute);
  //   console.log(props.prop);

  const arr = props.cssVariable;
  // console.log(arr);
  const result = arr.map((data, i) => {
    return <DataElement data={data} key={i} />;
  });
  return result;
}

function DataElement(props) {
  // console.log(prop.data);
  const { cssVariable, description } = props.data;
  //   console.log(name);
  return (
    <tr>
      <td>{cssVariable}</td>
      <td>{description}</td>
    </tr>
  );
}
