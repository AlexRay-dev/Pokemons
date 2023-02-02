interface IUser {
  login: string,
  password: string,
  favoritePokemonsIndices: number[],
}
// TODO 2 интерфейса IUser

const USERS: IUser[] = [
  {
    login: 'user123',
    password: 'user123',
    favoritePokemonsIndices: [6, 23, 7, 34, 77, 95, 124, 3, 74, 45, 175,66],
  }
];

export default USERS;