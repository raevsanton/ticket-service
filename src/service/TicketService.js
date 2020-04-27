export default class TicketService {

    getArray = async (from = 1, to = 100000000000000000) => {
        let array = await fetch(`https://ticketserviceapp.herokuapp.com/events/bydate/0/${100}`, {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            method: 'POST',
            body: JSON.stringify({
                "dateFrom": from,
                "dateTo": to
            })
        });
        let result = await array.json();
        return await result.sort((a, b) => a.eventStart < b.eventStart ? 1 : -1);
    };

    getArrayItem = async () => {
        let array = await fetch(`https://ticketserviceapp.herokuapp.com/events/bydate/0/${40}`, {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            method: 'POST',
            body: JSON.stringify({
                "dateFrom": new Date().getTime(),
                "dateTo": 100000000000000000
            })
        });

        let result = await array.json();
        return await result.filter(item => {
            return item.eventStatus != null
        });
    };

    sortByTime = (arr) => {
        arr.sort((a, b) => a.eventStart > b.eventStart ? 1 : -1)
    };

    getOneItem = async () => {
        let res = await this.getArrayItem();
        this.sortByTime(res);
        return res;
    };

    getItemById = async (id) => {
        let allArray = await this.getArray();
        return await allArray.find((item) => {
            return item.eventId === id
        });
    };

    getRestOfTickets = async (id) => {
        return await fetch(`https://ticketserviceapp.herokuapp.com/events/rest/${id}`)
            .then((res) => {
                return res.json();
            });
    };

    emailConfirm = async (hash) => {
        let response = await fetch(`https://ticketserviceapp.herokuapp.com/user/${hash}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error('Something wrong with confirmation');
        }

    }
}
