$(()=>{
    const admin =  JSON.parse(localStorage.getItem('user'))
    $('#admin').append(admin.username)

    //Get System Properties
     $.ajax({
        url:'http://localhost:5000/system',
        success:function(e){
            $('#host').text(e.hostName)
            $('#platform').text(e.platform)
            $('#mem').text(e.totalmem)
            $('#arch').text(e.arch)
            $('#mac').text(e.obj.mac_address)
            $('#ip').text(e.obj.ip_address)
            $('#net').text(e.obj.netmask)
            $('#gate').text(e.obj.gateway_ip)
        }
     })

     $('#maxi').mouseover(()=>{
         $(this).addClass('text-info')
     })
   
})