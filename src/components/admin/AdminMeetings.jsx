import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import MeetingsStore from "../../stores/meetingsStore"
import MeetingCard from "../MeetingCard"

const AdminMeeting = observer(() => {

    useEffect(() => {
        MeetingsStore.getMeetings();
    }, [])

    return (
        <>
            {
                MeetingsStore.meetings.map((m, i) => {
                    return <MeetingCard
                        key={i}
                        serviceType={m.serviceType}
                        dateTime={m.dateTime}
                        clientName={m.clientName}
                        clientPhone={m.clientPhone}
                        clientEmail={m.clientEmail}
                    ></MeetingCard>
                })
            }
        </>
    )
})

export default AdminMeeting
