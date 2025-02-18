const GetUserDetailsFromToken = require("../helpers/getUserDetailsFromToken");

const UserDetails = async (req, res) => {
  try {
    const token = req.cookies.token || "";
    const user = await GetUserDetailsFromToken(token);
    return res.status(200).json({
      message: "User Details",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
};

module.exports = UserDetails;
