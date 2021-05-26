let data=empData();
let allEmp=document.querySelector('#all-emp');
let maleEmp=document.querySelector('#male-emp');
let femaleEmp=document.querySelector('#female-emp');
let countText=document.querySelector('#text');
let search=document.querySelector('#search');
let displayAllEmp=(all)=>
{
	let count=0;
	let tableData=document.querySelector('#data');
	let dataStr='';
	for(let emp of all)
	{
		dataStr+=`<tr class="bg-secondary text-white">
								 <td>${emp.sno}</td>
								 <td>${emp.firstname}</td>
								 <td>${emp.lastname}</td>
								 <td>${emp.email}</td>
								 <td>${emp.gender}</td>
								 <td>${emp.country}</td>
							 </tr>`;
		count++;
	}
	tableData.innerHTML=dataStr;
	countText.innerText='Total Records : '+count;
}
allEmp.addEventListener('click',()=>
{
	displayAllEmp(data);
});
maleEmp.addEventListener('click',()=>
{
	let maleEmps=data.filter((empl)=>
	{
		return empl.gender==='Male';	
	});
	displayAllEmp(maleEmps);
});
femaleEmp.addEventListener('click',()=>
{
	let femaleEmps=data.filter((empl)=>
	{
		return empl.gender==='Female';	
	});
	displayAllEmp(femaleEmps);
});
let str='';
search.addEventListener('keyup',()=>
{
	let textEntered=search.value;
	if(textEntered.length>=1 && textEntered.trim())
	{
		let filteredEmp=data.filter((empl)=>
		{
			return empl.firstname.toLowerCase().trim().startsWith(textEntered.toLowerCase().trim());
		});
		displayAllEmp(filteredEmp);
	}
	else
	{
		displayAllEmp([]);
	}
});
