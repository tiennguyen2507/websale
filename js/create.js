function create() {
    valueName = document.getElementById('ipName').value
    console.log(valueName)
    valuePass = document.getElementById('ipPass').value
    console.log(valuePass)
    valuePhone= document.getElementById('ipPhone').value
    console.log(valuePhone)
    valueAddress = document.getElementById('ipAddress').value
    console.log(valueAddress)
    if (valueName ==""|| valuePass ==""||valuePhone ==""||valueAddress =="") {
        alert('Điền đầy đủ thông thin đăng ký')
    }else{
        var data = [
            { name:valueName,
              pass:valuePass,
              phone:valuePhone,
              address:valueAddress,
              status:false
        }
        ]
        console.log(data)
        var local =localStorage.setItem('login',JSON.stringify(data))
        
        setInterval(window.location.href = "login.html",10000)
    }
}