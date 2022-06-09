const loadjson =async ()=>
{
    const dataJ = await
        fetch("./student.json")
    return dataJ.json();
}
/*
takes an student objekt and generates a tabellrow */

function genRow(data) {
    const student_id = document.createElement("th");
    student_id.innerText = data.id;
    const first_Name = document.createElement("th");
    first_Name.innerText = data.first_Name;
    const last_Name = document.createElement("th");
    last_Name.innerText = data.last_Name;
    const dob = document.createElement("th");
    dob.innerText = data.dob;
    const gender = document.createElement("th");
    gender.innerText = data.gender;
    const dep = document.createElement("th");
    dep.innerText = data.deparment;
    const email_Id = document.createElement("th");
    email_Id.innerText = data.email_Id;
    const doe = document.createElement("th");
    doe.innerText = data.doe;
    const tr = document.createElement("tr");
    tr.appendChild(student_id);
    tr.appendChild(first_Name);
    tr.appendChild(last_Name);
    tr.appendChild(dob);
    tr.appendChild(gender);
    tr.appendChild(dep);
    tr.appendChild(email_Id);
    tr.appendChild(doe);
    document.getElementById("StudentTable").appendChild(tr);
}

/*takes an array students and genertes a table */
async function getTab() {
    const data = await loadjson();
    data.forEach(function(i) { genRow(i); console.log("hj") });
}

function genTabDepFiltered(data){
    genRow(data.filter(checkDep()));
}
function checkDep(){
    data.dep == "IT"
}

function filteredIt() {
    let y = x.filter(checkDep());
    getTab(y);
}
function test() {
    console.log("test");
}