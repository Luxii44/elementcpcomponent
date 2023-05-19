export class upload{
    
}
export const getFileType = (fileName:string):any => { //根据文件名判断文件类型
	// 后缀获取
	let suffix:string = '';
	// 获取类型结果
	let result:any = '';
	try {
		const flieArr = fileName.split('.');
		suffix = flieArr[flieArr.length - 1];
	} catch (err) {
		suffix = '';
	}
	// fileName无后缀返回 false
	if (!suffix) {
		return false;
	}
	suffix = suffix.toLocaleLowerCase();
	// 图片格式
	const imglist:string[] = ['png', 'jpg', 'jpeg', 'bmp', 'gif'];
	// 进行图片匹配
	result = imglist.find(function(item) {
		return item === suffix
	});
	if (result) {
		return 'image';
	}
	// 匹配txt
	const txtlist = ['txt'];
	result = txtlist.find(function(item) {
		return item === suffix
	});
	if (result) {
		return 'txt';
	}
	// 匹配 excel
	const excelist = ['xls', 'xlsx'];
	result = excelist.find(function(item) {
		return item === suffix
	});
	if (result) {
		return 'excel';
	}
	// 匹配 word
	const wordlist = ['doc', 'docx'];
	result = wordlist.find(function(item) {
		return item === suffix
	});
	if (result) {
		return 'word';
	}
	// 匹配 pdf
	const pdflist = ['pdf'];
	result = pdflist.find(function(item) {
		return item === suffix
	});
	if (result) {
		return 'pdf';
	}
	// 匹配 ppt
	const pptlist = ['ppt', 'pptx'];
	result = pptlist.find(function(item) {
		return item === suffix
	});
	if (result) {
		return 'ppt';
	}
	// 匹配 视频
	const videolist = ['mp4', 'm2v', 'mkv', 'rmvb', 'wmv', 'avi', 'flv', 'mov', 'm4v'];
	result = videolist.find(function(item) {
		return item === suffix
	});
	if (result) {
		return 'video';
	}
	// 匹配 音频
	const radiolist = ['mp3', 'wav', 'wmv'];
	result = radiolist.find(function(item) {
		return item === suffix
	});
	if (result) {
		return 'radio';
	}
	// 匹配 压缩
	const compresslist = ['zip', 'rar', '7z',''];
	result = compresslist.find(function(item) {
		return item === suffix
	});
	if (result) {
		return 'compress';
	}
	// 其他 文件类型
	return 'other';

}


export const getMIME=async(the_url:string)=> {
    return (await fetch(the_url).then(r => r.blob())).type
}

export const checkFileType=(mime:string)=> {
	if (mime.indexOf("image")>-1){
		return "image"
	}
	if (mime=="application/vnd.openxmlformats-officedocument.wordprocessingml.document"){
		return "word"
	}
}
// const transBase64FromImage=(url:string)=>{
// 	var image = new Image();    
// 	image.src = url + "?" + Math.random();
// 	image.crossOrigin = '*';
// 	image.onload = function() {
// 	  var canvas = document.createElement("canvas");
// 	  canvas.width = image.width;
// 	  canvas.height = image.height;
// 	  var ctx = canvas.getContext("2d");
// 	  ctx!.drawImage(image, 0, 0, image.width, image.height)
// 	  var ext = image.src.substring(image.src.lastIndexOf(".") + 1).toLowerCase();
// 	  var dataURL = canvas.toDataURL("image/" + ext);
// 	  return dataURL
// 	}
// }