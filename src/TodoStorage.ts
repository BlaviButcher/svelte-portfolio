export default class TodoStorage {
    static getAll() {
      return JSON.parse(localStorage.getItem("todo-list") || "[]");
    }
  
    static save(items: Object) {
      localStorage.setItem("todo-list", JSON.stringify(items));
    }
  }