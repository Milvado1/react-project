import { runInAction, observable, makeObservable, action, computed } from 'mobx';

class MeetingsStore {
    meetings = [
        {
            id: "758",
            serviceType: "11",
            dateTime: "2021-06-20T10:00:00.000Z",//מבנה של תאריך ושעה סטנדרטי בjs
            clientName: "אבי כהן",
            clientPhone: "050-1234567",
            clientEmail: "m@m.com",
        }
    ];

    constructor() {
        makeObservable(this,
            {
                meetings: observable,
                addMeeting: action,
                getMeetings: action
            }
        )
    }

    addMeeting = async (serviceType, clientName, clientPhone, clientEmail, dateTime) => {
        console.log(2, dateTime);
        let newMeeting = {};
        newMeeting.id = this.meetings.length;
        newMeeting.serviceType = serviceType;
        newMeeting.clientName = clientName;
        newMeeting.clientPhone = clientPhone;
        newMeeting.clientEmail = clientEmail;
        newMeeting.dateTime = dateTime;

        const response = await fetch("http://localhost:8787/appointment", {
            method: "POST",
            body: JSON.stringify(newMeeting),
            headers: { "Content-Type": "application/json" }
        });
        console.log("response.text:", response.statusText);
        if (response.status === 200) {
            this.meetings = [...this.meetings, newMeeting];
        }
        return response; // ?? !!!!
    }

    getMeetings = async () => {
        const getMeetingsResponse = await fetch("http://localhost:8787/appointments");
        const meetingsData = await getMeetingsResponse.json();
        runInAction(() => {
            this.meetings = ([...meetingsData]);
        })

        return this.meetings; // ?? !!!!
    }
}

export default new MeetingsStore();