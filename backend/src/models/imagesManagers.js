const AbstractManager = require("./AbstractManager");

class imagesManager extends AbstractManager {
  constructor() {
    super({ table: "images" });
  }

  insert(images) {
    return this.connection.query(
      `insert into ${this.table} (name, url) values (?, ?)`,
      [images.name, images.url]
    );
  }

  update(images) {
    return this.connection.query(
      `update ${this.table} set name = ?, url = ? where id = ?`,
      [images.name, images.url, images.id]
    );
  }
}

module.exports = imagesManager;
