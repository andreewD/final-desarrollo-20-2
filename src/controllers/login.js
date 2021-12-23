const CryptoJS = require("crypto-js");

module.exports = {
  login: async (req, res, next) => {
    const header = {
      alg: "HS512",
      typ: "JWT",
    };
    function base64url(source) {
      // Encode in classical base64
      encodedSource = CryptoJS.enc.Base64.stringify(source);

      // Remove padding equal characters
      encodedSource = encodedSource.replace(/=+$/, "");

      // Replace characters according to base64url specifications
      encodedSource = encodedSource.replace(/\+/g, "-");
      encodedSource = encodedSource.replace(/\//g, "_");

      return encodedSource;
    }



    var stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
    var encodedHeader = base64url(stringifiedHeader);

    var stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(req.body));
    var encodedData = base64url(stringifiedData);

    var token = encodedHeader + "." + encodedData;

    res.status(200).json(token);
  },
};
