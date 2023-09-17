function LogIn(){
    const name= "providence";
    const passkey= 1234;



    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;

    if(name==username&&passkey==password){

       
        link1()

    }else{
        
        alert("Invalid Username or Password")
    }
}
function link1() {

    
    window.open(document.getElementById("link1").href);

    // window.open("Profile Card/index.html","")
    
    

}