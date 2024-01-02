import React from "react";

const DataAttributeTable = ({ api, category }) => {
  const { props } = api; // tag, props, dataattribute 다 포함한 것들
  // console.log(props);
  // console.log(category);
  return (
    <table>
      <thead>
        <tr>
          <td>Data attribute</td>
          <td>Values</td>
        </tr>
      </thead>
      <tbody>
        {props.map((prop, i) => {
          if (prop.tag === category) {
            // console.log(prop.dataAttribute);
            return <RowElement dataAttribute={prop.dataAttribute} key={i} />;
          }
        })}
      </tbody>
    </table>
  );
};
export default DataAttributeTable;

function RowElement(props) {
  // console.log(dataAttribute.dataAttribute);
  //   console.log(props.prop);

  const arr = props.dataAttribute;
  // console.log(arr);
  const result = arr.map((data, i) => {
    return <DataElement data={data} key={i} />;
  });
  return result;
}

function DataElement(props) {
  // console.log(prop.data);
  const { attribute, values } = props.data;
  //   console.log(name);
  return (
    <tr>
      <td>{attribute}</td>
      <td>{values.toString()}</td>
    </tr>
  );
}
