// Progress Bar //
// function setHalf() {
//     document.getElementById('bar').value = '50';
// };

function setZero() {
    document.getElementById('bar').value = '0';
};

// Page Option //
let nextBtn = document.getElementById('nextBtn');
let prevBtn = document.getElementById('prevBtn')
let page1 = document.getElementById('page1');
let page2 = document.getElementById('page2');

document.querySelector('.nextBtn').addEventListener('click', () => {
    document.querySelector('.full-container').style.transform = 'translate(0, -100vh)';
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
