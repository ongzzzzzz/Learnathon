let xmlhttp3 = new XMLHttpRequest();
xmlhttp3.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    //console.log(data[0]);

    let i;
    for (i = 0; i < data.length; i++) {
      let event = data[i]["gsx$event"]["$t"];
      let time = data[i]["gsx$time"]["$t"];
      document.getElementById("sundayTable").innerHTML +=
       "<tr>" +
       "<td>" +
       event + 
       "</td>" +
       "<td>" +
       time +
       "</td>" +
       "</tr>"
    }
  }
}

xmlhttp3.open(
  "GET",
  "https://spreadsheets.google.com/feeds/list/1F8fujORpy8IH938CdO06Zqd5QtmdRmEPjc6M8FNpxFw/3/public/full?alt=json",
  true
);
xmlhttp3.send();