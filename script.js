// Progress Bar //
function setFull() {
    document.getElementById('bar1').value = '100';
};

function setZero() {
    document.getElementById('bar1').value = '0';
};

// Page Option //
let nextBtn = document.getElementById('nextBtn');
let preBtn = document.getElementById('preBtn')
let page1 = document.getElementById('page1');
let page2 = document.getElementById('page2');

nextBtn.addEventListener('click', function() {
    console.log('click');
    page2.style.visibility = 'visible'
    page1.style.visibility = 'hidden'
});

preBtn.addEventListener('click', function(){
    page2.style.visibility = 'hidden'
});

/* iframe 설정 */
function ifun(msg) {
    alert(msg);
};

// $(document).ready(function(){  
// 	$('#resetbutton').click(function(){  
// 		$('#form1 input').each(function(){
// 			if($(this).hasClass('reset1')) $(this).val('');  
// 		});  
// 	});  
//  });  
