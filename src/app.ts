import * as ko from "knockout";

class User {
    first_name: KnockoutObservable<string>;
    last_name:  KnockoutObservable<string>;
    email:  KnockoutObservable<string>;
    phone:  KnockoutObservable<string>;
    birth:  KnockoutObservable<string>;

    isEdit: KnockoutObservable<boolean>;
    
    temp_first_name: string;
    temp_last_name: string;
    temp_email: string;
    temp_phone: string;
    temp_birth: string;

    constructor(first_named: string, last_named: string, emaild: string, phoned: string, birthd: string){
        this.isEdit = ko.observable(false);
        this.first_name = ko.observable(first_named);
        this.last_name = ko.observable(last_named);
        this.email = ko.observable(emaild);
        this.phone = ko.observable(phoned);
        this.birth = ko.observable(birthd);
    }

    beginEdit() {
        this.temp_first_name = this.first_name();
        this.temp_last_name = this.last_name();
        this.temp_email = this.email();
        this.temp_phone = this.phone();
        this.temp_birth = this.birth();
    }

    cancelEdit() {
        this.first_name(this.temp_first_name);
        this.last_name(this.temp_last_name);
        this.email(this.temp_email);
        this.phone(this.temp_phone);
        this.birth(this.temp_birth);
    }
}

class HelloViewModel {
    users: KnockoutObservableArray<User>;
    isAddNew: KnockoutObservable<boolean>;
    
    newUser: User;

    constructor()
    {
      this.isAddNew = ko.observable(false);
      this.users = ko.observableArray([
        new User("Vu", "Hai", "hai@email.vn", "0123124", "1990/11/11"),
        new User("Vo", "Luu", "tung@email.vn", "0123124", "1993/09/15"),
        new User("Duy", "Son", "son@email.vn", "0123124", "1991/05/06")
      ]);
      this.newUser = new User("","","","","");
    }

    addNew()
    {
        this.isAddNew(true);
    }

    addUser()
    {
        this.users.push(new User(
            this.newUser.first_name(), 
            this.newUser.last_name(),
            this.newUser.email(),
            this.newUser.phone(),
            this.newUser.birth()));
            this.clearUser();
        
    }

    clearUser(){
        this.newUser.first_name("");
        this.newUser.last_name("");
        this.newUser.email("");
        this.newUser.phone("");
        this.newUser.birth("");
    }

    removeUser (user : User) {
        var _self = this;
        _self.users.remove(user);
    }
    
    editUser (user: User){    
        user.isEdit(true); 
        user.beginEdit();    
    }

    cancelUser (user : User){ 
        user.isEdit(false); 
        user.cancelEdit();     
    }

    saveUser (user : User) {
        user.isEdit(false);  
    }
}

ko.applyBindings(new HelloViewModel());


