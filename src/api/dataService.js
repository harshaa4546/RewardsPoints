

export default function() {
  // simulates data coming from a database.
  return Promise.resolve(
    [
        {
          custid: 1,
          name: "harry",
          amt: 120,
          transactionDt: "09-01-2020"
        },
        {
          custid: 1,
          name: "harry",
          amt: 75,
          transactionDt: "09-21-2020"
        },
        {
          custid: 1,
          name: "harry",
          amt: 94,
          transactionDt: "09-21-2020"
        },
        {
          custid: 1,
          name: "harry",
          amt: 10,
          transactionDt: "08-01-2020"
        },
        {
          custid: 1,
          name: "harry",
          amt: 75,
          transactionDt: "08-21-2020"
        },
        {
          custid: 1,
          name: "harry",
          amt: 200,
          transactionDt: "09-01-2020"
        },
        {
          custid: 1,
          name: "harry",
          amt: 1,
          transactionDt: "09-04-2020"
        },
        {
          custid: 1,
          name: "harry",
          amt: 80,
          transactionDt: "09-03-2020"
        },
        {
          custid: 1,
          name: "harry",
          amt: 224,
          transactionDt: "09-21-2020"
        },
        {
          custid: 2,
          name: "Roger",
          amt: 125,
          transactionDt: "09-01-2020"
        },
        {
          custid: 2,
          name: "Roger",
          amt: 75,
          transactionDt: "09-21-2020"
        },
        {
          custid: 2,
          name: "Roger",
          amt: 10,
          transactionDt: "08-01-2020"
        },
        {
          custid: 2,
          name: "Roger",
          amt: 75,
          transactionDt: "08-21-2020"
        },
        {
          custid: 2,
          name: "Roger",
          amt: 200,
          transactionDt: "09-01-2020"
        },
        {
          custid: 2,
          name: "Roger",
          amt: 224,
          transactionDt: "09-21-2020"
        },
        {
          custid: 3,
          name: "Shawn",
          amt: 120,
          transactionDt: "08-21-2020"
        }
    ]
  );
};