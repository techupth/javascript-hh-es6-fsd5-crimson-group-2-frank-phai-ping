const employee1 = {
  name: "John",
  age: 20,
};

const result1 = employee1.scores?.english; // ใส่ optional chaning เพื่อป้องกันการ error เพราะเราไม่ได้ประกาศค่า มันจะ return ค่า undefind ไปแทน
console.log(result1)

const employee2 = {
  name: "A",
  age: 50,
  scores: {
    math: 40,
  },
};

const result2 = employee2.scores.english ?? "English score is not defined";
console.log(result2)