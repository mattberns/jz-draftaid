import React from 'react';
import PropTypes from 'prop-types';
import PlayerTable from './PlayerTable'

function Drafted(props) {
  let players = props.players.slice().filter(p => p.drafted);
  players = players.sort((a, b) => b.drafted - a.drafted);

  return (
    <div className='col-md-3 col-sm-12 col-xs-12'>
      <div className='aid-title hidden-xs'>
        <i className='fa fa-history'></i> Draft History
      </div>

      <div className="row form-group">
        <div className="col-md-12">
          <button
            className='btn btn-sm btn-info btn-responsive'
            onClick={()=>props.undo(props.currentDraft)}>
            <i className='fa fa-backward'></i> Undo
          </button>

          <button
            className='pull-right btn btn-sm btn-warning btn-responsive'
            onClick={()=>props.reset()}>
            <i className='fa fa-eject'></i> Reset
          </button>
        </div>
      </div>

      <PlayerTable
        fields={['drafted', 'name', 'position', 'team']}
        players={players}
        disableColor={true}
      />
    </div>
  );
}

Drafted.propTypes = {
  currentDraft: PropTypes.number.isRequired,
  reset: PropTypes.func.isRequired,
  undo: PropTypes.func.isRequired,
  players: PropTypes.array.isRequired,
};

export default Drafted
