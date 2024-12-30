import React from 'react';
import PropTypes from 'prop-types';
import PlayerTable from './PlayerTable'

function Undrafted(props) {
  let players = props.players.slice().filter(p => !p.drafted);

  if (props.position) {
    players = players.filter(p => p.position.includes(props.position));
  }

  players = players.sort((a, b) => a.rank - b.rank);

  return (
    <PlayerTable
      size={props.size}
      fields={props.fields}
      players={players}
      onClick={(p) => props.draft(p)}
    />
  );
}


Undrafted.propTypes = {
  draft: PropTypes.func.isRequired,
  players: PropTypes.array.isRequired,
  fields: PropTypes.array.isRequired,

  size: PropTypes.number,
  position: PropTypes.string,
};

export default Undrafted
