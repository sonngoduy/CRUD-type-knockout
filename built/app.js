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
        return User;
    }());
    var HelloViewModel = /** @class */ (function () {
        function HelloViewModel() {
            this.isAddNew = ko.observable(false);
            this.users = ko.observableArray([
                new User("Vu", "Hai", "hai@email.vn", "0123124", "1990/11/11"),
                new User("Vo", "Luu", "hai@email.vn", "0123124", "1990/11/11"),
                new User("Duy", "Son", "son@email.vn", "0123124", "1991/05/06")
            ]);
            this.newUser = new User("", "", "", "", "");
        }
        HelloViewModel.prototype.addNew = function () {
            this.isAddNew(true);
        };
        HelloViewModel.prototype.saveUser = function () {
            this.users.push(new User(this.newUser.first_name(), this.newUser.last_name(), this.newUser.email(), this.newUser.phone(), this.newUser.birth()));
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
        HelloViewModel.prototype.ShowTime = function (toDayDate) {
            document.getElementById("h2Msg").innerHTML = "Time is -- " + toDayDate;
        };
        HelloViewModel.prototype.editUser = function (user) {
            user.isEdit(!user.isEdit());
        };
        HelloViewModel.prototype.backUser = function (user) {
            user.isEdit(!user.isEdit());
        };
        return HelloViewModel;
    }());
    ko.applyBindings(new HelloViewModel());
});
//# sourceMappingURL=app.js.map