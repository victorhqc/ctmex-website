const getFilename = () => `bundle${process.env.NODE_ENV === 'production' ? '' : '.dev'}.js`;

module.exports = {
  getFilename,
};
