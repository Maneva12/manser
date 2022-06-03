const maneva = (event) => require(`../events/${event}`);
module.exports = client => {
  client.on('message', maneva('message'));
};
