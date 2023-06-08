import userService from "../services/userService";

let searchSDTBenhnhan = async (req, res) => {
  // let Dienthoai = "ALL"; //req.query.id; //get all or id
  let Dienthoai = req.query.keyword

  if (!Dienthoai) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameters",
      thongtinbenhnhans: {},
    });
  }

  let thongtinbenhnhans = await userService.searchSDTBenhnhan(Dienthoai);

  return res.status(200).json({
    // errCode: 0,
    // errMessage: "ok",
    thongtinbenhnhans,
  });
};

let handleLogin = async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  if (!username || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing input",
    });
  }

  let userdata = await userService.handleUserLogin(username, password);
  console.log(userdata);
  //check email exist
  //compare password
  //return userInfor
  //accept_token: validate user: JWT: json web token
  return res.status(200).json({
    errCode: userdata.errCode,
    message: userdata.errMessage,
    user: userdata.user ? userdata.user : {},
  });
};


let handleCreateNewUser = async (req, res) => {
  let message = await userService.createNewUser(req.body);
  console.log(message);
  return res.status(200).json(message);
};
let handleEditUser = async (req, res) => {
  let data = req.body;
  let message = await userService.EditUser(data);

  return res.status(200).json(message);
};
let handleDeleteUser = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      message: "missing require parameter",
    });
  }
  let message = await userService.DeleteUser(req.body.id);
  console.log(message);
  return res.status(200).json(message);
};
let getAllCode = async (req, res) => {
  try {
    let data = await userService.getAllCodeService(req.query.type);
    return res.status(200).json(data);
  } catch (e) {
    console.log("Get allcode error: ", e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error connection",
    });
  }
};
let handleGetHistory = async (req, res) => {
  // let id = "ALL"; //req.query.id; //get all or id
  // let id = req.query.id
  let sdt = req.query.SDT
  if (!sdt) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameters",
      historys: {},
    });
  }

  let historys = await userService.getAllHistorys(sdt);

  return res.status(200).json({
    // errCode: 0,
    // errMessage: "ok",
    historys,
  });
};

let handleGetAllUsers = async (req, res) => {
  let id = "ALL"; //req.query.id; //get all or id
  // let id = req.query.id
  // let sdt = req.query.SDT
  // let sdt = req.query.keyword;

  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameters",
      users: {},
    });
  }

  let users = await userService.getAllUsers(id);

  return res.status(200).json({
    // errCode: 0,
    // errMessage: "ok",
    users,
  });
};

let searchClinicByName = async (req, res) => {
  let keyword = req.query.keyword;

  if (!keyword) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameters",
      clinics: {},
    });
  }
  let clinics = await userService.searchClinicByName(keyword);

  return res.status(200).json({
    errCode: 0,
    errMessage: "ok",
    clinics,
  });
};

module.exports = {
  handleLogin: handleLogin,
  handleGetAllUsers: handleGetAllUsers,
  handleCreateNewUser: handleCreateNewUser,
  handleEditUser: handleEditUser,
  handleDeleteUser: handleDeleteUser,
  getAllCode: getAllCode,
  searchClinicByName: searchClinicByName,
  handleGetHistory: handleGetHistory,
};
