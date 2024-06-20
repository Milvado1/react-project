import { runInAction, observable, makeObservable, action, computed } from 'mobx';


class ServicesStore {
    services = [
        // {
        //     id: 0,
        //     name: 'הדרכת הורים',
        //     description: 'מה קורה מאחורי הקלעים בראש של הילד? איך הדינמיקה ביניכם?',
        //     price: 300,
        //     // image: Image1
        // },
        // {
        //     id: 1,
        //     name: 'ייעוץ זוגי',
        //     description: 'מהן נקודות הקושי איתן אתם מתמודדים? מהן האפשרויות העומדות בפניכם? ואילו שינויים אתם בוחרים לעשות?',
        //     price: 350,
        //     // image: Image2
        // },
        // {
        //     id: 2,
        //     name: 'מודעות עצמית',
        //     description: 'מודעות עצמית משמעותה הבנה של האדם את עצמו. מדוע הוא מרגיש כפי שהוא מרגיש, מה מניע את המחשבות הרגשות והפעולות שלו וכיצד תובנות אלה מאפשרות לו לבחור אחרת, לפתור בעיות וקונפליקטים בחייו.',
        //     price: 350,
        //     // image: Image3
        // }
    ];

    constructor() {
        makeObservable(this,
            {
                services: observable,
                addService: action,
                getServices: action
            }
        )

        this.services.forEach(s => {
            this.addService(s.name, s.description, s.price);
        });
    }

    addService = async (name, description, price) => {
        let newService = {};
        newService.id = this.services.length;
        newService.name = name;
        newService.description = description;
        newService.price = price;
        // newService.image = Image4;

        const response = await fetch("http://localhost:8787/service", {
            method: "POST",
            body: JSON.stringify(newService),
            headers: { "Content-Type": "application/json" }
        });
        if (response.status === 200) {
            this.services = [...this.services, newService];
        }
        return response; // ?? !!!!
    }

    getServices = async () => {
        const getServicesResponse = await fetch("http://localhost:8787/services");
        const servicesData = await getServicesResponse.json();
        runInAction(() => {
            this.services = ([...servicesData]);
        })

        return this.services; // ?? !!!!
    }
}

export default new ServicesStore();