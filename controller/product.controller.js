const Connection = require("mysql/lib/Connection");

try {
  let productController = {};

  productController.deleteProduct = async (req, res) => {
    if (Connection) {
      await connection.query(
        "DELETE FROM products WHERE PD_ID = "+req.params.pdid+";",
        (err, rows) => {
          if (err) {
          } else {
            res.status(200).json(rows);
          }
        }
      );
    }
  };

  productController.getProducts = async (req, res) => {
    if (Connection) {
      await connection.query(
        "SELECT * FROM products WHERE PD_ID = "+req.params.pdid+" ORDER BY PD_ID DESC LIMIT "+req.params.limit+";",
        (err, rows) => {
          if (err) {
          } else {
            res.status(200).json(rows);
          }
        }
      );
    }
  };

  productController.postProduct = async (req, res) => {
    if (Connection) {
      await connection.query(
        "INSERT INTO products(PD_name, PD_descrip, PD_price, PD_code) VALUES ('"+req.body.PD_name+"', '"+req.body.PD_descrip+"', '"+req.body.PD_price+"', '"+req.body.PD_code+"');",
        (err, rows) => {
          if (err) {
          } else {
            res.status(200).json(rows);
          }
        }
      );
    }
  }

  productController.getAllProducts = async (req, res) => {
    if (Connection) {
      await connection.query(
        "SELECT * FROM products;",
        (err, rows) => {
          if (err) {
          } else {
            res.status(200).json(rows);
          }
        }
      );
    }
  }

  productController.getId = async (req, res) => {
    if (Connection) {
      await connection.query(
        "SELECT * FROM products WHERE PD_ID = "+req.params.pdid+";",
        (err, rows) => {
          if (err) {
          } else {
            res.status(200).json(rows);
          }
        }
      );
    }
  }

  productController.getLimite = async (req, res) => {
    if (Connection) {
      await connection.query(
        "SELECT * FROM products ORDER BY PD_ID DESC LIMIT "+req.params.limit+";",
        (err, rows) => {
          if (err) {
          } else {
            res.status(200).json(rows);
          }
        }
      );
    }
  }

  module.exports = productController;
} catch (error) {}
