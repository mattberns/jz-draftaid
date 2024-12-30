import React from 'react';
import PropTypes from 'prop-types';
import Undrafted from './Undrafted'

function UndraftedAll(props) {
  return (
    <div className='col-md-3 col-sm-12 col-xs-12'>
      <div className="aid-title hidden-xs">
        <i className="fa fa-sort-amount-asc"></i> Overall Rankings
      </div>

      <div className="row form-group">
        <div className="form-group col-md-4">
          <select value={ props.format } onChange={ props.fetch } >
            <option value="standard">Standard</option>
            <option value="ppr">PPR</option>
            <option value="half_ppr">0.5 PPR</option>
          </select> &nbsp;
          <select value={ props.year } onChange={ props.fetch } >
            <option value="2024">2024</option>
          </select>
        </div>

        <div className="col-md-8">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            onChange={props.search}
            value={ props.query }
          />
        </div>
      </div>

      <div className='scrollable overall-rankings'>
        <Undrafted
          fields={['rank', 'tier', 'position', 'name', 'team']}
          players={props.players}
          draft={(p) => props.draft(p)}
        />
      </div>
    </div>
  )
}

UndraftedAll.propTypes = {
  players: PropTypes.array.isRequired,
  format: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
  fetch: PropTypes.func.isRequired,
};

export default UndraftedAll
