declare module 'ember-cli-mirage' {

  export class Server {

    urlPrefix: string;

    namespace: string;

    timing: number;

    get(path: string, callback?: () => void): any;

    createList<T>(type: string, amount: number, traitsAndOverrides?: any): T[];

  }

  export class RestSerializer { }

  export class Model { }

  export class Factory {

    static extend(prototype: object): void;

  }

  export const faker: Faker.FakerStatic;

}

declare module 'ember-cli-mirage/test-support/setup-mirage' {

  export default function setupMirage(hooks: NestedHooks): void;

}
