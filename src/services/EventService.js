export default class EventService {
  data = [
    {
      id: 1,
      date: '2019-08-07T21:00:00.000Z',
      title: 'BirthDay',
      time: '17:00',
      info: 'do cake'
    },
    {
      id: 2,
      date: '2019-08-09T21:00:00.000Z',
      title: 'party',
      time: '19:00',
      info: 'get drunk'
    }
  ];

  getEvents() {
      return new Promise((resolve) => {
          resolve(this.data)
      });
  }
}
