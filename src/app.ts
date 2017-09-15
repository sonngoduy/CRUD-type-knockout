import * as ko from "knockout";

class User {
    first_name: KnockoutObservable<string>;
    last_name:  KnockoutObservable<string>;
    email:  KnockoutObservable<string>;
    phone:  KnockoutObservable<string>;
    birth:  KnockoutObservable<string>;
    isEdit: KnockoutObservable<boolean>;

    constructor(first_named: string, last_named: string, emaild: string, phoned: string, birthd: string){
        this.isEdit = ko.observable(false);
        this.first_name = ko.observable(first_named);
        this.last_name = ko.observable(last_named);
        this.email = ko.observable(emaild);
        this.phone = ko.observable(phoned);
        this.birth = ko.observable(birthd);
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
        new User("Vo", "Luu", "hai@email.vn", "0123124", "1990/11/11"),
        new User("Duy", "Son", "son@email.vn", "0123124", "1991/05/06")
      ]);
      this.newUser = new User("","","","","");
    }

    addNew()
    {
        this.isAddNew(true);
    }

    saveUser()
    {
        this.users.push(new User(
            this.newUser.first_name(), 
            this.newUser.last_name(),
            this.newUser.email(),
            this.newUser.phone(),
            this.newUser.birth()));
        this.newUser.first_name("");
        this.newUser.last_name("");
        this.newUser.email("");
        this.newUser.phone("");
        this.newUser.birth("");
    }

    // editUSer(){
    //     this.users.
    // }

    // removeUser(user : User)
    // {    
    //      console.log(user);
    //      this.users.remove(user);
         
    // }

    removeUser (user : User) {
        var _self = this;
        _self.users.remove(user);
    }


    ShowTime(toDayDate: Date) {    
        document.getElementById("h2Msg").innerHTML = "Time is -- " + toDayDate;
    }
    
    editUser(user: User){
        user.isEdit(!user.isEdit());
    }

}

ko.applyBindings(new HelloViewModel());


