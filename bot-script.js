function create(){
    var htmlcode = `
      <div id="live-chat">
          <header class="clearfix">
        <a href="#" class="chat-close">x</a>
        <h4>Moni Bot</h4>
      </header>
          <iframe id="frame" scrolling="yes" src="http://motor-webchat.s3-website-us-east-1.amazonaws.com/" max-width="300px" height="300"></iframe>
    </div>
    `;
    $('body').append(htmlcode);
}

function style() {
  let style = `
  <style type="text/css">
      #live-chat {
        bottom: 0;
        font-size: 12px;
        right: 24px;
        position: fixed;
        width: 300px;
      }
      
      #live-chat header {
        background: #f57c00 ;
        border-radius: 5px 5px 0 0;
        color: #fff;
        cursor: pointer;
        padding: 16px 24px;
      }
      
      #live-chat h4 {
        font-size: 16px;
      }
      
      #live-chat h5 {
        font-size: 10px;
      }
      
      #live-chat form {
        padding: 24px;
      }
      
      #live-chat input[type="text"] {
        border: 1px solid #ccc;
        border-radius: 3px;
        padding: 8px;
        outline: none;
        width: 234px;
      }
      
      .chat-close {
        border-radius: 50%;
        color: #fff;
        display: block;
        float: right;
        font-size: 15px;
        height: 16px;
        line-height: 16px;
        margin: 2px 0 0 0;
        text-align: center;
        width: 16px;
      }
      </style>
  `;
  /* calling body append will add your new styles to the bottom of the page and override any existing ones */
  $('head').append(style);
}

$(document).ready(function () {
    style();
    $(document).on('click', '.chat-close', function() {
      $('#live-chat').fadeOut(300);
    });
})