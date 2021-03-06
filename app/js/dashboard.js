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

    //  Launching Agent
    $('#launch').click(function(e){
       $('#console').val('')
        e.preventDefault()
        const entrypoint = $('#entrypoint').val();
        $.ajax({
            url:'http://'+entrypoint,
            success:function(e){
                
               e.forEach(data => {
                document.getElementById('console').value+=JSON.stringify(data)+'\n'+'\n'

            });
               
                
                
            }
        })
    })
    // Reset Console
    $('#resety').click(function(e){
        $('#console').val('')
    })
})