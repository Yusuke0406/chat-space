$(function(){
  function buildMessage(message){
    var html = `<div class="message">
                <div class="upper-message">
                  <div class="upper-message__user-name">
                    
                  </div>
                  <div class="upper-message__date">
                    ${message.created_at}
                  </div>
                  </div>
                <div class="lower-message">
                  <p class="lower-message__content">
                    ${message.text}
                  </p> 
                </div>
                </div>`
    return html
  }
  $("#new_comment").on("submit",function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url:url,
      type:'POST',
      data:formData,
      dataType:'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildMessage(message);
    })
    .fail(function(){
      alert('エラー');
    })
  })
});