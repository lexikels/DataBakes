import * as React from "react";
import PropTypes from "prop-types";

export default function Table({ websites }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Catagory</th>
          <th>Description</th>
          <th>Date Added</th>
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
            <td>{website.dateAdded}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
