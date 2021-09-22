import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteTech } from "../../actions/techAction";
import M from "materialize-css/dist/js/materialize.min.js";

const TechItem = ({ tech: { id, firstName, lastName }, deleteTech }) => {
  const onDelete = () => {
    deleteTech(id);
    M.toast({ html: "Technician deleted" });
  };

  return (
    <div className='collection-item'>
      <div>
        {firstName} {lastName}
        <a
          href='#'
          className='secondary-content'
          onClick={onDelete}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </div>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
