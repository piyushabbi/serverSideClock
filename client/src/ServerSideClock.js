import React from 'react'
const style = { color: 'purple' }

const ServerSideClock = props => (
  <h1 style={style}>
    {props.time.getMonth() + 1}/
    {props.time.getDate()}/
    {props.time.getFullYear()}&nbsp;
    {props.time.getHours()}:{props.time.getMinutes()}:{props.time.getSeconds()}
  </h1>
);

export default ServerSideClock;