import * as React from "react";
import PropTypes from "prop-types";

export default function Table({ websites }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Catagory</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {websites.map((website, index) => (
          <tr key={index}>
            <td>
              <a href={website.url}>{website.name}</a>
            </td>
            <td>{website.catagory}</td>
            <td>{website.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
