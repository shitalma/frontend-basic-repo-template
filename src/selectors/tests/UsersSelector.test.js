import usersSelector from '../UsersSelector';

describe('User selector', () => {
  const userDataFromApi = {
    users: {
      data: [
        {
          address: {
            street: 'Kattie Turnpike',
            suite: 'Suite 198',
            city: 'Lebsackbury',
            zipcode: '31428-2261',
          },
          company: {
            name: 'Hoeger LLC',
            catchPhrase: 'Centralized empowering task-force',
            bs: 'target end-to-end models',
          },
          email: 'Rey.Padberg@karina.biz',
          id: 10,
          name: 'Clementina DuBuque',
          phone: '024-648-3804',
          username: 'Moriah.Stanton',
          website: 'ambrose.net',
        },
      ],
    },
  };

  it('should get the background overview and fund ethos from the store overview', () => {
    expect(usersSelector(userDataFromApi)).toEqual([
      { userId: 10, userName: 'Moriah.Stanton' },
    ]);
  });

  it('should get empty userData when data is not present in the store', () => {
    expect(usersSelector({})).toEqual([]);
  });
});
