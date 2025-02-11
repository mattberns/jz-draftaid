import React from 'react';
import PropTypes from 'prop-types';
import Undrafted from './Undrafted'

function UndraftedPositions(props) {
  const fields = ['tier', 'name', 'team'];

  return (
    <div className='col-md-6 col-sm-12 hidden-xs'>
      <div className='aid-title'>
        <i className='fa fa-signal'></i> Top Picks By Position
      </div>

      <div class="row">
        <div className='col-sm-6'>
          <span className="col-sm-12 position-title">Runningbacks</span>
          <Undrafted
            fields={fields}
            players={props.players}
            draft={(p) => props.draft(p)}
            size={15}
            position='RB'
          />
        </div>

        <div className='col-sm-6'>
          <span className="col-sm-12 position-title">Wide Receivers</span>
          <Undrafted
            fields={fields}
            players={props.players}
            draft={(p) => props.draft(p)}
            size={15}
            position='WR'
          />
        </div>
      </div>

      <div class="row">
        <div className='col-sm-6'>
          <span className="col-sm-12 position-title">Quarterbacks</span>
          <Undrafted
            fields={fields}
            players={props.players}
            draft={(p) => props.draft(p)}
            size={15}
            position='QB'
          />
        </div>

        <div className='col-sm-6'>
          <span className="col-sm-12 position-title">Tightends</span>
          <Undrafted
            fields={fields}
            players={props.players}
            draft={(p) => props.draft(p)}
            size={15}
            position='TE'
          />
        </div>
      </div>
    </div>
  )
}

UndraftedPositions.propTypes = {
  draft: PropTypes.func.isRequired,
  players: PropTypes.array.isRequired,
};

export default UndraftedPositions
