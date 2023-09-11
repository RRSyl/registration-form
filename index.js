const form = document.getElementById('form');
const username = document.getElementById('username');
const age = document.getElementById('age');
const salary = document.getElementById('salary');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


function openTab(tabName){
    var tabContent = document.getElementsByClassName('tab');
    for(var i=0;i<tabContent.length;i++){
        tabContent[i].computedStyleMap.display="none";
    }
    document.getElementById(tabName).style.display="block";
}


class AplikasiPendaftar{
    constructor(){
        this.pendaftarData=[]
    }

    init(){
        this.setupFormSubmit();
    }

    validateInputs(event){
        event.preventDefault()

        var username= document.getElementById("username").value;
        var age= document.getElementById("age").value;
        var salary=document.getElementById("salary").value;

        if(usernameValue === '') {
            setError(username, 'Username is required');
        } else if(usernameValue.length<25){
            setError(username, 'Nama minimal 25 karakter')
        }
        else{
            setSuccess(username);
        }
    
        if(ageValue<25) {
            setError(age, 'You are underage');
        } else {
            setSuccess(age);
        }
    
        if(100000<salaryValue< 1000000 ) {
            setSuccess(salary);
        } else {
            setError(salary, 'Your input is incorrect');
        }

        this.pendaftarData.push({nama,umur,uangsangu});


        var table = document.getElementById("pendaftarTable").getElementsByTagName('tbody')[0];

        var newrow= table.insertRow(table.rows.length);
        var cell1=newrow.insertCell(0);
        var cell2=newrow.insertCell(1);
        var cell2=newros.insertCell(2);
        cell1.innerHTML=nama;
        cell2.innerHTML=umur;
        cell2.innerHTML=uangsangu;

        var totalumur=0;
        var totaluangsangu=0;
        for(var i=0;i<this.pendaftarData.length;i++){
            totalumur+=this.pendaftarData[i].age;
            totaluangsangu+=this.pendaftarData[i].salary;
        }

        var avgumur = totalumur/this.pendaftarData.length;
        var avgsangu=totaluangsangu/this.pendaftarData.length;

        document.getElementById("avgumur").innerHTML=avgumur.toFixed(2);
        document.getElementById("avgsangu").innerHTML=avgsangu.toFixed(2);

        document.getElementById("Registrasi").reset();
    }

    setupFormSubmit(){
        const registrationform = document.getElementById("Registrasi");
        registrationform.addEventListener('submit',(event)=>this.validateInputs(event));
        registrationform.res
    }
}

const aplikasiPendaftar=new AplikasiPendaftar();
aplikasiPendaftar.init();
