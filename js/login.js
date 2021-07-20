var localdata=localStorage.getItem('login')
login = JSON.parse(localdata)
console.log(login[0].name)
function login01(){
    valueName = document.getElementById('ipName').value
    console.log(valueName)
    valuePass = document.getElementById('ipPass').value
    console.log(valuePass)
    if (login[0].name == valueName && login[0].pass == valuePass) {
        alert('đăng nhập thành công')
        var data = [
            { name:login[0].name,
              pass:login[0].pass,
              phone:login[0].phone,
              address:login[0].address,
              status:true
        }
        ]
        console.log(data)
        localStorage.setItem('login',JSON.stringify(data))
        setInterval(window.location.href = "index.html",10000)
        
    }else(
        alert('đăng nhập thất bại')
    )
}