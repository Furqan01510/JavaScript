// Splice Function on Array

// splice 
// 1. Start index
// 2. Deletion Count
// 3. Eleements to be Inserted 

var arr =[1,2,3,4,5];

arr.splice(1,1);    // index 1, remove 1
arr.splice(1);      // delete all element start at index 1
arr.splice(2,0,10); // index 2, remove 0, add 10
arr.splice(2,0,10,20,30,40);
// index 2, remove 0, add 10,20,30,40

// parellel insertion & Deletion
arr.splice(2,2,40,50);
// index 2, delete 2 element, add 40, 50



