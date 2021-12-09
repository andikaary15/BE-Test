/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
 const data = [
  { session_name: 'first test', classes: [{ class_name: undefined, students: [{ student_name: 'budi' }] }] },
  { session_name: null, classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] }
];

function result(data) {
  // Your Code Here
    console.log();
    var del_session = deleteArr(data);
    del_session.forEach(function(val,key){
        deleteArr(val.classes);
    });
  return data;
}

function deleteArr(data){
    data.forEach(function(val,key){
     for (var properti in val) {
        if (val[properti] == null || val[properti] == undefined) {
          delete val[properti];
        } 
      }
    })
    return data;
}

console.log(result(data));
