import { observable } from 'mobx';

const nickName = observable({
  firstName: 'Yauhen',
  age: 30,

  get nickName() {
    console.log('Generate nickName!');
    return `${this.firstName}${this.age}`;
  },

  increment() { this.age++ },

  decrement() { this.age-- },
});

export default nickName;