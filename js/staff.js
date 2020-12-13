//IIFE  (Immediately Invoked Function Expression)
/*(function(){
    // start
    console.info("Hello")

    var myObject = {
        firstname : "Ehsan", 
        surname : "Naeimi",
        email : "ehsanullahnaeimi1@gmail.com",
        qualifications :{
            gcse: true,
            alevel: true,
            beng: false

        },
        getInfo : function(){
            return this.firstname + " " + this.surname
        }

    };
    console.dir(myObject)
    console.info(myObject.qualifications.gcse)
    console.info(myObject.getInfo())

    var qualifications = [
        {
        subject : "Maths",
        grade : "A"
        },
        {
        subject : "English",
        grade : "B"
        },
        {
        subject : "French",
        grade : "C"
        },
        {
        subject : "Physics",
        grade : "B"
        }
        ];
        console.info(qualifications[1].grade)
        qualifications.forEach(function(qual) {
            //console.dir(element);
            console.dir(qual);
            console.info(qual.subject)
            console.info(qual.grade)

            });
    //end
})()*/

(function(){
    //  start
    //var staff = [];
    var staff = JSON.parse(localStorage.getItem('staffList'));
    if(staff === null){
    staff = [];
    }
   // rebuiltList();
    document.getElementById('addStaffForm').addEventListener('submit',
    function(ev){
    ev.preventDefault();
    let newStaffName = document.getElementById('staffName').value;
    let newStaffEmail= document.getElementById('staffEmail').value;
    staff.push({name: newStaffName, email: newStaffEmail});
    console.dir(staff)
    rebuiltList();
    })
    var rebuiltList = function(){
        document.getElementById('staffTable').innerHTML = "";


   /* var staff =
    [
    {
    name : "Bob Smith",
    email : "b.smith@busy.com"
    },
    {
    name : "Jane Johnson",
    email : "j.johnson@busy.com"
    },
    {
    name : "Ethan Hawkson",
    email : "e.hawkson@busy.com"
    },
    {
    name : "Julie Grant",
    email : "j.grant@busy.com"
    },
    {
        name:"Ehsan Naeimi",
        email:"ehsanullahnaeimi1@gmail.com"
    }
   ]*/
   staff.forEach(function(element) {
    var newStaffRow = document.createElement("tr");
    var newStaffName = document.createElement("td");
    newStaffName.innerHTML = element.name;
    var newStaffEmail = document.createElement("td");
    newStaffEmail.innerHTML = element.email;
    newStaffRow.appendChild(newStaffName);
    newStaffRow.appendChild(newStaffEmail);
    document.getElementById('staffTable').appendChild(newStaffRow);
    });
    localStorage.setItem('staffList', JSON.stringify(staff));   //adding data to local storage
}
rebuiltList();

    //localStorage.setItem("count", 1);
    
    if(localStorage.getItem("count") === null){
        localStorage.setItem("count", 1);
        }else{
        localStorage.setItem("count", parseInt(localStorage.getItem("count"))+1);
        }
    //  end
})()