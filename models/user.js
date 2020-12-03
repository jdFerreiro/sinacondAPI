export default class User {
    constructor(name, idRol, email, password, lastlogin, idStatus, lastStatusUpdate, createAt, updatedAt) {
      this.email = email;
      this.password = password;
      this.name = name;
      this.idRol = idRol;
      this.lastlogin = lastlogin;
      this.idStatus = idStatus;
      this.lastStatusUpdate = lastStatusUpdate;
      this.createAt = createAt;
      this.updatedAt = updatedAt;
    }
  }