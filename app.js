
const notyf = new Notyf({
	duration:0,
	position:{
		x:'right',
		y:'top',
	}, types: [
		{
			type:'error',
			duration:2000,
			dismissible:true
		},
		{
			type:'warning',
			duration:4000,
            background:'brown',
            icon: false,
			dismissible:false
		}
	]
});

const messageErreur = 'Une erreur s\'est produite sur le site';
const messageOk = 'Message type OK';
const messageWarning = 'Message type Warning';

notyf.error({message:messageErreur,});
notyf.success({message:messageOk,});
notyf.open({type: 'warning',message: messageWarning});


notyf.on('click', ({target, event}) => {
  // target: the notification being clicked
  // event: the mouseevent
  window.location.href = '/index.html';
});