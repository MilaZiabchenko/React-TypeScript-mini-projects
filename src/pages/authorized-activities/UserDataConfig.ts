export namespace UserDataConfig {
  type Name = Record<'first' | 'last', string>;
  type Location = Record<'city' | 'country', string>;
  type Avatar = Record<'medium' | 'thumbnail', string>;

  export type UserData = {
    name: Name;
    location: Location;
    picture: Avatar;
    email: string;
  };

  export type UserAPIResponse = {
    results: UserData[];
  };
}
