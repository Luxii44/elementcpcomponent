class upload {
}
const getFileType = (fileName) => {
  let suffix = "";
  let result = "";
  try {
    const flieArr = fileName.split(".");
    suffix = flieArr[flieArr.length - 1];
  } catch (err) {
    suffix = "";
  }
  if (!suffix) {
    return false;
  }
  suffix = suffix.toLocaleLowerCase();
  const imglist = ["png", "jpg", "jpeg", "bmp", "gif"];
  result = imglist.find(function(item) {
    return item === suffix;
  });
  if (result) {
    return "image";
  }
  const txtlist = ["txt"];
  result = txtlist.find(function(item) {
    return item === suffix;
  });
  if (result) {
    return "txt";
  }
  const excelist = ["xls", "xlsx"];
  result = excelist.find(function(item) {
    return item === suffix;
  });
  if (result) {
    return "excel";
  }
  const wordlist = ["doc", "docx"];
  result = wordlist.find(function(item) {
    return item === suffix;
  });
  if (result) {
    return "word";
  }
  const pdflist = ["pdf"];
  result = pdflist.find(function(item) {
    return item === suffix;
  });
  if (result) {
    return "pdf";
  }
  const pptlist = ["ppt", "pptx"];
  result = pptlist.find(function(item) {
    return item === suffix;
  });
  if (result) {
    return "ppt";
  }
  const videolist = ["mp4", "m2v", "mkv", "rmvb", "wmv", "avi", "flv", "mov", "m4v"];
  result = videolist.find(function(item) {
    return item === suffix;
  });
  if (result) {
    return "video";
  }
  const radiolist = ["mp3", "wav", "wmv"];
  result = radiolist.find(function(item) {
    return item === suffix;
  });
  if (result) {
    return "radio";
  }
  const compresslist = ["zip", "rar", "7z", ""];
  result = compresslist.find(function(item) {
    return item === suffix;
  });
  if (result) {
    return "compress";
  }
  return "other";
};
const getMIME = async (the_url) => {
  return (await fetch(the_url).then((r) => r.blob())).type;
};
const checkFileType = (mime) => {
  if (mime.indexOf("image") > -1) {
    return "image";
  }
  if (mime == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
    return "word";
  }
};

export { checkFileType, getFileType, getMIME, upload };
//# sourceMappingURL=upload.mjs.map
