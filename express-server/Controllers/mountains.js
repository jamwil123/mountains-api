const { fetchAllMountains, fetchMountainsByHillNumber } = require("../Models/mountains");

const getAllMountains = async (req, res, next) => {
  sortBy = req.query.sortBy;
  orderBy = req.query.orderBy;
  fetchAllMountains(sortBy, orderBy).then((mountains) => {
    res.status(200).send({ mountains });
  });
};

const getMountainByHillNumber = async (req, res, next) => {
  const hillNumber = req.params;
  fetchMountainsByHillNumber(hillNumber).then((mountain) => {
    res.status(200).send({ mountain });
  });
};

module.exports = { getAllMountains, getMountainByHillNumber };
