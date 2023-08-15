function skillsMember() {
    var member = document.getElementById("member").value;
    var skill = document.getElementById("skill").value;
    var url = "http://localhost:8080/addSkill?member=" + member + "&skill=" + skill;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();
}