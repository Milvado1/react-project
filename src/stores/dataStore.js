import { observable, makeObservable, action, computed } from 'mobx';

class DataStore {
    isLoginOk = false;

    constructor() {
        makeObservable(this,
            {
                isLoginOk: observable,
                checkLogin: action,
                setIsLoginOk : action
            }
        )
    }

    checkLogin = async (name, password) => {
        const loginResponse = await fetch("http://localhost:8787/login", {
            method: "POST",
            body: JSON.stringify({ name, password }),
            headers: { "Content-Type": "application/json" }
        });
        console.log(loginResponse.status); // !!!!

        return loginResponse;
    }

    setIsLoginOk = (value) => {
        this.isLoginOk = value;
    }
}

export default new DataStore();