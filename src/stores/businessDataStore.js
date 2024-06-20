import { runInAction, observable, makeObservable, action, computed } from 'mobx';
import { toJS } from 'mobx';


class BusinessDataStore {
    business = {
        name: "מלי גרוסמןןן",
        address: "אדוניהו הכהן ירושלים",
        phone: "052-7123456",
        owner: "מלי גרוסמן",
        logo: "https://coding-academy.org/images/ca_logo.png",
        description: "מלי גרוסמן - יועצת ומנטורית אישית. מלווה זוגות, הורים ואנשים פרטיים עד לרוגע המיוחל",
    };

    constructor() {
        makeObservable(this,
            {
                business: observable,
                postBusinessData: action,
                getBusinessData: action
            }
        )
        
        this.postBusinessData(
            this.business.name,
            this.business.description,
            this.business.address,
            this.business.email,
            this.business.phone
        );
    }

    postBusinessData = async (name, description, address, email, phone) => {
        let bData = {};
        bData.name = name;
        bData.description = description;
        bData.address = address;
        bData.email = email;
        bData.phone = phone;

        const response = await fetch("http://localhost:8787/businessData", {
            method: "POST",
            body: JSON.stringify(bData),
            headers: { "Content-Type": "application/json" }
        });
        runInAction(() =>{
            this.business = bData;
        })
        return response; // ???? !!!!
    }

    getBusinessData = async () => {
        const response = await fetch("http://localhost:8787/businessData");
        this.businessData = await response.json();
        runInAction(() => {
            this.business = toJS(this.businessData);
        })

        return this.business; // ??
    }
}

export default new BusinessDataStore();