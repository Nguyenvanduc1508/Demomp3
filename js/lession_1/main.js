/* Một số hàm built-in
1. alert
2. console
3. confirm: bật ra 1 hộp thoại
vd: confirm('alo');
4. prompt: bật ra hộp thoại có hiển thị dòng text
vd: prompt('alo');
5. setTimeOut: sau 1 khoảng thời gian sẽ hiển thị dòng alert
setTimeOut(funtion(){
    alert('thong bao')
}, 1000)
6. setInterval: cứ cách 1s chạy 1 dòng alert
    setInterval(funtion(){
    alert('thong bao')
}, 1000)
*/
/** Chuỗi
 * Xem độ dài chuỗi 
    var fullName = 'alo'
    console.log(fullName.length)
 * template string
    var firstName = nguyen;
    var lastName = duc;
    console.log(`Toi la: ${firstName} ${lastName}`) 
 * find index(indexOf) : tìm ra vị trí của 1 kí tự trong 1 chuỗi
    var myString = 'Học JS tại F8';
    console.log(myString.indexOf('JS'));
 * Cut String(slice): Cắt chuỗi
    var myString = 'Học JS tại F8';
    console.log(myString.slice(4, 6))
 * Replace (replace): ghi đè chuỗi mới trong 1 chuỗi được chọn
    var myString = 'Học JS tại F8';
    console.log(myString.replace(/JS/g, 'Javascript'))
 * toUpperCase: in hoa toàn bộ chuỗi
    var myString = 'Học JS tại F8';
    console.log(myString.toUpperCase())
 * toLowerCase: in thường toàn bộ chuỗi
    var myString = 'Học JS tại F8';
    console.log(myString.toLowerCase())
 * trim : loại bỏ khoảng trắng thừa
    var myString = 'Học JS tại F8';
    console.log(myString.trim())
 * split : chuyển đổi từ string sang array
    var myString = ['Javascript', 'PHP']
    console.log(myString.split(', '))
 * 
 */
/* Mảng
 * Kiểm tra mảng
    console.log(Array.isArray(tham số))
 * Kiểm tra độ dài mảng
    console.log(Array.length)
 * Lấy phần tử theo Index
    console.log(Array[index])
 * Các phương thức của mảng
    - toSting : chuyển từ mảng sang chuỗi
    - join: tương tự toString
    - pop: Xoá phần tử cuối mảng và trả lại phần tử đã xoá
    - push: Thêm phần tử cuối mảng 
    - shift: Xoá phần tử đầu mảng
    - unshift: Thêm phần tử đầu mảng
    - splice: Xoá phần tử bất kỳ trong mảng
    - concat: Nối mảng
    - slice: cắt phần tử của mảng
 */
/** Funtion(hàm)
 * Các loại Funtion
    - Delation funtion:  
    vd: funtion showMess(){}
    - expression funtion:
    vd: var showmess = funtion(){}
    - arrow funtion:
 * Các phương thức của funtion

 */
   //  var courses = [
   //      {
   //          id: 1,
   //          name: 'Javascript',
   //          coin: 200
   //      },
   //      {
   //          id: 2,
   //          name: 'PHP',
   //          coin: 0
   //      },
   //      {
   //          id: 3,
   //          name: 'Ruby',
   //          coin: 100
   //      },
   //      {
   //          id: 4,
   //          name: 'Java',
   //          coin: 150
   //      },
   //      {
   //          id: 5,
   //          name: 'PHP',
   //          coin: 100
   //      }
   //  ]
// gọi lại các phần tử của mảng
// courses.forEach(function (course){
//     // trả lại các phần tử của mảng
//     console.log(course)
// });

// every: kiểm tra các phần tử của mảng phải thoả mãn 1 điều kiện
// var isFree = courses.every(function (course){
//     // trả lại các phần tử của mảng
//     return course.coin === 0;
// });
// console.log(isFree)

// some: kiểm tra 1 trong các phần tử thoả mãn điều kiện
// var isFree = courses.some(function (course){
//     // trả lại các phần tử của mảng
//     return course.coin === 0;
// });
// console.log(isFree)

// find: tìm kiếm 1 phần tử đầu tiên trong mảng
// var isFree = courses.find(function (course){
//     // trả lại 1 phần tử của mảng
//     return course.name === 'Ruby';
// });
// console.log(isFree)

// filter: tìm kiếm các phần tử trong mảng
// var isFree = courses.filter(function (course){
//     // trả lại 1 phần tử của mảng
//     return course.name === 'PHP';
// });
// console.log(isFree)

// map:
// function courseHandler(course){
//     return {
//         id: course.id,
//         name: `Khoa hoc: ${course.name}`,
//         coin: course.coin,
//         coiText: `Gia: ${course.coin}`
//     }
// }
// var newCourses = courses.map(courseHandler);
// console.log(newCourses)
// reduce:
/** Object
 * Funtion --> Phương thức / methos
 * key --> thuộc tính / property
 */
/* Math Object
   - Math.PI: trả lại số PI
    vd: console.log(Math.PI);
   - Math.round(): làm tròn số
    vd: console.log(Math.round(tham so))
   - Math.abs(): trả lại giá trị tuyệt đối
    vd: console.log(Math.abs(tham so))
   - Math.ceil(): làm tròn trên
   - Math.floor(): làm tròn dưới
   - Math.ramdom(): tạo ra số ngẫu nhiên
   - Math.min(): tìm số nhỏ nhất
   - Math.max(): tìm số lớn nhất
*/


// var newCourses = courses.map(function(course){
//    if(Number.isInteger(course)){
//       return true
//    }else{
//       return false
//    }
// })

// console.log(newCourses)
/**
 * 1. getElementByID
 * 2. getElementsByClassName
 * 3. getElementsByTagName
 * 4. querySelector
 * 5. querySlectorAll
 * 6. HTML Collection
 * 7. document.write
 */

// var courses = [
//    'Javascript',
//    'PHP', 
//    'Ruby'
// ]

// var promise = Promise.reject('that bai')
// var promise = Promise.resolve('thanh cong')

// promise
//    .then(function(result){
//       console.log('result:', result)
//    })
//    .catch(function(err){
//       console.log('error:', err)
//    })

// promise 
// var user = [
//    {
//       id: 1,
//       name: 'Van Duc'
//    },
//    {
//       id: 2,
//       name: 'Son Dang'
//    },
//    {
//       id: 3,
//       name: 'Van Duc 2'
//    }

// ]

// var commments = [
//    {
//       id: 1,
//       user_id: 1,
//       content: 'Anh son chua ra video'
//    },
//    {
//       id: 2,
//       user_id: 2,
//       content: 'Vua ra xong em oi'
//    },
//    {
//       id: 3,
//       user_id: 1,
//       content: 'Cam on anh'
//    }
// ]

// function getComments(){
//    return new Promise(function(resolve){
//       setTimeout(function(){
//          resolve(commments)
//       }, 1000)
//    })
// }

// function getUserByIDs(userIds){
//    return new Promise(function(resolve){
//       var result = user.filter(function(users){
//          return userIds.includes(users.id)
//       })
//       setTimeout(function(){
//          resolve(result)
//       }, 1000)
//    })
// }



// getComments()
//    .then(function(commments){
//       var userIds = commments.map(function(comment){
//          return comment.user_id;
//       })

//       return getUserByIDs(userIds)
//       .then(function(users){
//          return {
//             users: users,
//             commments: commments
//          }
//       })
//    })

//    .then(function(data){
//       var commentBlock = document.getElementById('box');
//       var html = '';
//       data.commments.forEach(function(comment){
//          var user = data.users.find(function(user){
//             return user.id === comment.user_id
//          })
//          html += `<li>${user.name} <br> ${comment.content}</li>`
//       })
//       commentBlock.innerHTML = html;
//    })

// feach
// var postAPI = 'https://jsonplaceholder.typicode.com/posts';
// fetch(postAPI)
//    .then(function(response){
//       return response.json();
//    })
//    .then(function(posts){
//       var htmls = posts.map(function(post){
//          return `<li>
//             <h2>${post.title}</h2>
//             <p>${post.body}</p>
//          </li>`
//       })

//       var html = htmls.join('');
//       document.getElementById('box').innerHTML = html
//    })

// var courseAPI = 'http://localhost:3000/courses'

// fetch(courseAPI)
//    .then(function(response){
//       return response.json()
//    })
//    .then(function(courses){
//       console.log(courses)
//    })

// var courseAPI = 'http://localhost:3000/courses'


// function start(){
//    getCourses(renderCourses);
//    handleCreateForm();
// }

// start()

// function getCourses(callback){
//    fetch(courseAPI)
//       .then(function(response){
//          return response.json()
//       })
//       .then(callback)
// }

// function createCourse(data, callback){
//    var options = {
//       method: 'POST',
//       headers: {
//          'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//    }
//    fetch(courseAPI, options)
//       .then(function(response){
//          return response.json()
//       })
//       .then(callback)
// }

// function renderCourses(courses){
//    var listCoursesBlock = document.querySelector('#list-courses');
//    var htmls = courses.map(function(course){
//       return `
//          <li class="list-course-${course.id}">
//             <h4>${course.name}</h4>
//             <p>${course.description}</p>
//             <button onclick="handleDeleteCourses(${course.id})">Xoa</button>
//             <button onclick="handleUpdateCourses(${course.id})">Sua</button>
//          </li>
//       `
//    })
//    listCoursesBlock.innerHTML = htmls.join('');
// }

// function handleCreateForm(){
//    var createBtn = document.querySelector('#create');
//    createBtn.onclick = function(){
//       var name = document.querySelector('input[name="name"]').value;
//       var description = document.querySelector('input[name="description"]').value
//       var formData = {
//          name: name,
//          description: description
//       }
//       createCourse(formData, function(){
//          getCourses(renderCourses);
//       })
//    }
// }

// function handleDeleteCourses(id){
//       var options = {
//          method: 'DELETE',
//          headers: {
//             'Content-Type': 'application/json'
//          }
//       }
//       fetch(courseAPI + '/' + id, options)
//          .then(function(response){
//             return response.json()
//          })
//          .then(function(){
//             var coursesItem = document.querySelector('.list-course-' + id)
//             if(coursesItem){
//                coursesItem.remove();
//             }
//          })
// }

