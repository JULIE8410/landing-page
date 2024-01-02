import React from "react";

const KeyboardInteractionTable = ({ api, category }) => {
  const { accessibility } = api;

  return (
    <table>
      <thead>
        <tr>
          <td>Key</td>
          <td>Description</td>
        </tr>
      </thead>
      <tbody>
        {accessibility.map((prop, i) => {
          if (prop.tag === category) {
            // console.log(prop);
            return <RowElement prop={prop.props} key={i} />;
          }
        })}
      </tbody>
    </table>
  );
};
export default KeyboardInteractionTable;

function RowElement(props) {
  //   console.log(props);
  //   console.log(props.prop);

  const arr = props.prop;
  //   console.log(arr);
  const result = arr.map((data, i) => {
    return <DataElement data={data} key={i} />;
  });
  return result;
}

function DataElement(props) {
  // console.log(prop);
  const { keys, description } = props.data;
  //   console.log(name);
  return (
    <tr>
      <td>{keys}</td>
      <td>{description}</td>
    </tr>
  );
}
