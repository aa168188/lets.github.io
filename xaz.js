 

var xz = "/xiazai/lets-kuailian.zip";

//可以把   /xiazai/https://pub-dd6afa06e64b4cbea0fbd12138cd4033.r2.dev/lets-kuailian.zip 这个改成下载地址；https://pub-dd6afa06e64b4cbea0fbd12138cd4033.r2.dev/lets-kuailian.zip
//可以把   https://pub-dd6afa06e64b4cbea0fbd12138cd4033.r2.dev/lets-kuailian.zip  这个改成文件下载：/xiazai/lets-kuailian.zip



var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
    if (links[i].hasAttribute("href")) {
        links[i].href = xz;
    }
} 
