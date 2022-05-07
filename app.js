const getIP = require("external-ip")();

setInterval(() => {
  getIP((err, ip) => {
    console.log(ip);
  });
}, 60000);
