const database = [];

function validate() {
    
    var fullname_input=document.getElementById('uname')
    var phone_input=document.getElementById('Phone')
    var password_input=document.getElementById('pwd')
    var email_input=document.getElementById('email')

    var invalid_feedbacks=document.getElementsByClassName ('invalid-feedback')

    var fullname = fullname_input.value
    var phone= phone_input.value
    var password= password_input.value
    var email=email_input.value

    // validion
    var is_validated = true;
    

    // validate name 
    
    //  characters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' ']
    var fullname_pattern=/^[a-zA-Z ]+$/;
    console.log(fullname_pattern.test(fullname));

    if ( ! fullname_pattern.test(fullname)) {
        invalid_feedbacks[0].innerHTML= 'Invalid fullname format';
        fullname_input.classList.add('is-invalid')
        is_validated=false;
    }else{

        fullname_input.classList.remove('is-invalid');
    }

    var email_pattern = /^[a-z]+\.{1}[a-z]+\@xool\.com$/;
    console.log(email_pattern.test(email));

    if ( ! email_pattern.test(email)) {
        invalid_feedbacks[1].innerHTML= 'Invalid email format';
        email_input.classList.add('is-invalid')
        is_validated=false;
    }else{

        email_input.classList.remove('is-invalid');
    }

    var phone_pattern = /^0[0-9]{10}$/;
    console.log(phone_pattern.test(email));

    if ( ! phone_pattern.test(phone)) {
        invalid_feedbacks[2].innerHTML= 'Invalid phone number';
        phone_input.classList.add('is-invalid')
        is_validated=false;
    }else{

        phone_input.classList.remove('is-invalid');
    }
    
    var password_pattern = /^.{8,}$/;
    console.log(password_pattern.test(password));

    if ( ! password_pattern.test(password)) {
        invalid_feedbacks[3].innerHTML= 'Invalid password';
        password_input.classList.add('is-invalid')
        is_validated=false;
    }else{

        password_input.classList.remove('is-invalid');
    }

    // save record to the database, if the validation passes
    if ( is_validated) {
        // convert info to records
        var validatedData = {
            'fullname' : fullname,
            'email' : email,
            'phone' : phone,
            'password' : password

        }
        
        // save records to database
        database.push(validatedData)

        // clear input fields
        fullname_input.value='';
        phone_input.value='';
        email_input.value='';
        password_input.value='';
        
        document.getElementById('alert-success').classList.remove('d-none');

        // display content of database
        print_database();

    }
    else{
        // hide success message
        document.getElementById('alert-success').classList.add('d-none')
    }

    console.log(database)
  
}
function print_database(){
    
    var table_body=document.getElementById('table-body')
    var rows = '';
    var sn=0;
    database.forEach(record => {
        index = sn;
        rows = rows + 
        '<tr>' +
             '<td>'+ ++sn + '</td>' +
            '<td>'+ record.fullname + '</td>' +
            '<td>'+ record.email + '</td>' +
            '<td>'+ record.phone + '</td>' +
            '<td>'+ record.password + '</td>' +
            `<td> 
                <button class='btn btn-danger' onclick='remove_row(` + index +`)'>
                    <i class='bi bi-person-x'></i>
                </button>
            </td>` +
        '</tr>';
        
    });

    table_body.innerHTML = rows;
}

function remove_row( index ){
    database.splice(index,1);
    print_database()
}

document.getElementById('submit-btn')
.addEventListener('click',function(e){
    e.preventDefault();
    validate();
});

// document.getElementById('submit-btn' )
//     .addEventListener('click',validate);
    