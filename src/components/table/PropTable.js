import React from "react";

const PropTable = ({ api, category }) => {
  const { props } = api;

  return (
    <table>
      <thead>
        <tr>
          <td>Prop</td>
          <td>Type</td>
          <td>Default</td>
          <td>Description</td>
        </tr>
      </thead>
      <tbody>
        {props.map((prop, i) => {
          if (prop.tag === category) {
            // console.log(prop);
            return <RowElement prop={prop.props} key={i} />;
          }
        })}
      </tbody>
    </table>
  );
};
export default PropTable;

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
  const {
    name,
    required,
    type,
    typeSimple,
    defaultValue,
    description,
    guide,
    url,
  } = props.data;
  //   console.log(name);
  return (
    <tr>
      <td>
        {name} {required ? "(* required)" : ""}
      </td>
      <td>{typeSimple ? `${typeSimple} ${type}` : type}</td>
      <td>{defaultValue}</td>
      <td>
        {description}
        {/* {guide ? <a href={url}>{guide}</a> : ""} */}
      </td>
    </tr>
  );
}
