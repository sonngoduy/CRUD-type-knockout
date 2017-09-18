define(["require", "exports", "knockout"], function (require, exports, ko) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var User = /** @class */ (function () {
        function User(first_named, last_named, emaild, phoned, birthd) {
            this.isEdit = ko.observable(false);
            this.first_name = ko.observable(first_named);
            this.last_name = ko.observable(last_named);
            this.email = ko.observable(emaild);
            this.phone = ko.observable(phoned);
            this.birth = ko.observable(birthd);
        }
        User.prototype.beginEdit = function () {
            this.temp_first_name = this.first_name();
            this.temp_last_name = this.last_name();
            this.temp_email = this.email();
            this.temp_phone = this.phone();
            this.temp_birth = this.birth();
        };
        User.prototype.cancelEdit = function () {
            this.first_name(this.temp_first_name);
            this.last_name(this.temp_last_name);
            this.email(this.temp_email);
            this.phone(this.temp_phone);
            this.birth(this.temp_birth);
        };
        return User;
    }());
    var HelloViewModel = /** @class */ (function () {
        function HelloViewModel() {
            this.isAddNew = ko.observable(false);
            this.users = ko.observableArray([
                new User("Vu", "Hai", "hai@email.vn", "0123124", "1990/11/11"),
                new User("Vo", "Luu", "tung@email.vn", "0123124", "1993/09/15"),
                new User("Duy", "Son", "son@email.vn", "0123124", "1991/05/06")
            ]);
            this.newUser = new User("", "", "", "", "");
        }
        HelloViewModel.prototype.addNew = function () {
            this.isAddNew(true);
        };
        HelloViewModel.prototype.addUser = function () {
            this.users.push(new User(this.newUser.first_name(), this.newUser.last_name(), this.newUser.email(), this.newUser.phone(), this.newUser.birth()));
            this.clearUser();
        };
        HelloViewModel.prototype.clearUser = function () {
            this.newUser.first_name("");
            this.newUser.last_name("");
            this.newUser.email("");
            this.newUser.phone("");
            this.newUser.birth("");
        };
        HelloViewModel.prototype.removeUser = function (user) {
            var _self = this;
            _self.users.remove(user);
        };
        HelloViewModel.prototype.editUser = function (user) {
            user.isEdit(true);
            user.beginEdit();
        };
        HelloViewModel.prototype.cancelUser = function (user) {
            user.isEdit(false);
            user.cancelEdit();
        };
        HelloViewModel.prototype.saveUser = function (user) {
            user.isEdit(false);
        };
        return HelloViewModel;
    }());
    ko.applyBindings(new HelloViewModel());
});
//# sourceMappingURL=app.js.map