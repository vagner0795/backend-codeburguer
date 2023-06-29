module.exports = {
  dialect: 'postgres',
  url: 'PGPASSWORD=6icbGsMUdOFET44TLFJU psql -h containers-us-west-180.railway.app -U postgres -p 7637 -d railway',
  define: {
    timespamps: true,
    underscored: true,
    underscoredAll: true,
  },
}
