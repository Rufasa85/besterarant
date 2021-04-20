const resForm = document.querySelector("#reserveForm");

resForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("default blocked!")
    const customerObj = {
        id:document.querySelector("#id").value,
        name:document.querySelector("#name").value,
        email:document.querySelector("#email").value,
        phone:document.querySelector("#phone").value,
    }
    console.log(customerObj);
    fetch("/api/reserve",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json',
          },
        body:JSON.stringify(customerObj)
    }).then(res=>res.json()).then(data=>{
        console.log(data);
        if(data.hasTable){
            alert("sweet ya got a table!")
        } else {
            alert("sorry on waitlst")
        }
            location.replace("/tables")
    })
})