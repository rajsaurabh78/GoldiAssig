let arr=JSON.parse(localStorage.getItem("Goldi"))||[]
let flag=false;
function cf(a,b){
    this.name=a,
    this.password=b
} 
function formSub(event) {
    event.preventDefault()
    let form=document.getElementById("details")
    let name=form.name.value
    let pass=form.pass.value
    if(pass.length<8){
        return alert("Password should be 8 digit.")
    }
    Spe(pass);
    if(flag==false){
        return alert("Password should have atleast one special character.")
    }
    if(name==""||pass==""){
       return alert("Enter valid details.")
    }
    if(Validate(arr,name,pass)){
        alert("User already Exists.")
    }else{
        let x=new cf(name,pass)
        arr.push(x)
        localStorage.setItem("Goldi",JSON.stringify(arr))
        alert("Successfully registered.")
    }
}

function formVal(event) {
    event.preventDefault()
    let form=document.getElementById("validate")
    let name=form.name.value
    let pass=form.pass.value
    let ar=JSON.parse(localStorage.getItem("Goldi"))

    if(Validate(ar,name,pass)){
        alert("Authentication Successully.")
    }else{
        alert("Please enter correct details or login first.")
    }
}
function Validate(ar,n,p){
    for(let i=0;i<ar.length;i++){
        if(ar[i].name==n&&ar[i].password==p){
            return true;
        }
    }
    return false;
}
function Spe(pass){
    for(let i=0;i<pass.length;i++){
        if(pass[i]=="@"||pass[i]=="#"||pass[i]=="%"||pass[i]=="$"||pass[i]=="*"||pass[i]=="&"){
            flag=true;
        }
    }
}