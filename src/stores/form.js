import { observable, action } from 'mobx';

class Form {
    @observable firstName;
    @observable lastName;
    @observable email;
    @observable city;
    @observable street;
    @observable nickname;
    @observable password;

    @action changeField(field, data) {
        switch(field) {
            case 'firstName': 
                self.firstName = data;
                break;
            case 'lastName': 
                self.lastName = data;
                break;
            case 'email': 
                self.email = data;
                break;
            case 'city': 
                self.city = data;
                break;
            case 'street': 
                self.street = data;
                break;
            case 'nickname': 
                self.nickname = data;
                break;
            case 'password': 
                self.password = data;
                break;
            default: 
                break;
        }
    }
}

const self = new Form();
export default self;