function sendmail(){
    var params={
        name :document.getElementById("name").value,
        email :document.getElementById("email").value,
        message :document.getElementById("message").value
    };
    const serviceId="service_uqm6eoo"
    const templateId="template_aufpuev"

    emailjs.send(serviceId,templateId,params)
    .then(
        res=>{
            document.getElementById("name").value=""
            document.getElementById("email").value=""
            document.getElementById("message").value=""
            console.log(res);
            alert("you message send successfully");

        })
    .catch((err)=>log(err));
}