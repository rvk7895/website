
function tableUpdate() {
    let submission = {}

    submission.name = document.querySelector("#name").value;
    document.querySelector("#name").value = "";
    submission.skill = document.querySelector("#skill").value;
    document.querySelector("#skill").value = "";
    submission.level = document.querySelector("#level").value;
    document.querySelector("#level").value = "Choose...";
    submission.comments = document.querySelector("#comments").value;
    document.querySelector("#comments").value = "";

    let refDataString = localStorage.getItem("refData") || "[]";
    let refData = JSON.parse(refDataString);
    refData.push(submission);
    refDataString = JSON.stringify(refData);
    localStorage.setItem("refData", refDataString);
    return true;   
}

function constructTable()
	let refDataString = localStorage.getItem("refData") || "[]";
	let refData = JSON.parse(refDataString);

	let currentTable = document.querySelector("#tableData");
	let submissionCount = document.querySelector("#submissionCount");
	refData.forEach((submission)=> {
	currentTable.innerHTML += `<tr class="text-center">
<td>${submission.name}</td>
<td>${submission.skill}</td>
<td>${submission.level}</td>
<td>${submission.comments}</td>
</tr>`
})

submissionCount.innerHTML = refData.length;
}

constructTable();


