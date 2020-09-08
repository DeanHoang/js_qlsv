var StudentList = [["1","Nguyen Van A","a@mail.com"],["2","B","b@mail.com"],
["6","Bs","b@mail.com"],["3","Bd","b@mail.com"],["4","Ba","b@mail.com"],["7","Bw","b@mail.com"]];

function show() {
	for(var i=0;i<StudentList.length;i++){
	document.writeln("<div>" + StudentList[i][0] + "  | " + StudentList[i][1]
			+ "  |  " + StudentList[i][2] + "</div>" );
	}
}
function add(id,name,email){
	var stu = [id,name,email];
	StudentList.push(stu);
}
function remove(id) {
	var id = [id];
	for (var i = 0; i < StudentList.length; i++) {
		if (StudentList[i][0]==id) {
			StudentList.splice(i,1);
		}
	}
}
function edit(id,name,email) {
	for (var i = 0; i < StudentList.length; i++) {
		if (StudentList[i][0]==id) {
			StudentList[i][1]=name;
			StudentList[i][2]=email;
		}
	}
}
show();
document.writeln("<br>");
add("5","sd","as@mail.com");
document.writeln("");
show();
document.writeln("<br><br>");
remove("2");
show();
document.writeln("<br><br>");
edit("3","thanh","sad@mail.com");
show();

