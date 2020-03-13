class Account {
  constructor(username) {
    this.username = username;
    this.balance = 0;
    this.transactions = [];
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  isAllowed() {
    if (this.account.balance + this.value < 0) {
      return false;
    }
    return true;
  }
  commit() {
    if (this.isAllowed()) {
      this.time = new Date();
      this.account.addTransaction(this);
      this.account.balance += this.value;
    }
  }
}

class Withdrawal extends Transaction{
  get value () {
    return this.amount * -1;
  }
}

class Deposit extends Transaction{
  get value () {
    return this.amount;
  }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account('snow-patrol');

t1 = new Withdrawal(50.25, myAccount);
t1.commit();
// console.log('Transaction 1:', t1);


t3 = new Deposit(100, myAccount);
t3.commit();
// console.log('Transaction 3:', t3);

t2 = new Withdrawal(101, myAccount);
t2.commit();
// console.log('Transaction 2:', t2);

t4 = new Deposit(50, myAccount);
t4.commit();

// console.log('Balance:', myAccount.balance);
console.log('Transactions:', myAccount.transactions);
