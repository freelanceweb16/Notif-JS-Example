
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
			duration:1000,
			dismissible:false
		}
	]
});

const messageErreur = 'Une erreur s\'est produite sur le site';
const messageOk = 'Message type OK';
const messageWarning = 'Message type Warning';

notyf.error({message:messageErreur,});
notyf.success({message:messageOk,});
notyf.warning({message:messageWarning,});


notification.on('click', ({target, event}) => {
  // target: the notification being clicked
  // event: the mouseevent
  window.location.href = '/index.html';
});