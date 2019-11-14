
$(()=>{
    $('#sect2').hide()

    //create account clicked
    $('#reg').click(function(e){
        e.preventDefault()
        $('#sect1').hide();
        $('#sect2').show();
    })

    //Handle Registration
    $('#regbtn').click(function(e){
        e.preventDefault()
        const username = $('#reguser').val()
        const password = $('#regpass').val()
        $.ajax({
            url: 'http://localhost:5000/register/'+username+'/'+password,
            success:function(e){
                $('#sect2').hide()
                $('#sect1').show()
                $('#msg').text(e)
            },
            error: function(e){
                $('#msg').text(e)
            }
        })

    })
})

//Handle Login

$('#lgbtn').click(function(e){
    e.preventDefault();
    let username = $('#lguser').val()
    let password = $('#lgpass').val()
    $.ajax({
        url:'http://localhost:5000/login/'+username+'/'+password,
        success:function(e){
            localStorage.setItem('user',JSON.stringify(e))
            window.location.replace('dashboard.html')
            
            
            console.log('done')

        },

        error: function(e){

        }
    })

})