window.onload=init;

function init() {
	var map=document.getElementById("map");
	map.onmousemove=showCoordinates;

}

function showCoordinates(eventObj) {
	var map=document.getElementById("coords");
    var x=eventObj.clientX;
    var y=eventObj.clientY;

	map.innerHTML="Map Coordinates: "+x+", "+y;
}


var products = [ { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
{ name: "Orange", calories: 160, color: "orange", sold: 12101 },
{ name: "Cola", calories: 210, color: "caramel", sold: 25412 },
{ name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
{ name: "Lemon", calories: 200, color: "clear", sold: 14983 },
{ name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
{ name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
{ name: "Water", calories: 0, color: "clear", sold: 62123 }
];

function compareSold(colaA,colaB)
{
	if(colaA.sold>colaB.sold)
	{
		return 1;
	}
	else if(colaA.sold===colaB.sold)
	{
		return 0;
	}
	else
	{
		return -1;
	}
}

function compareCalories(colaA,colaB)
{
	if(colaA.calories>colaB.calories)
	{
		return 1;
	}
	else if(colaA.calories===colaB.calories)
	{
		return 0;
	}
	else
	{
		return -1;
	}
}

function compareColor(colaA,colaB)
{
	if(colaA.color>colaB.color)
	{
		return 1;
	}
	else if(colaA.color===colaB.color)
	{
		return 0;
	}
	else
	{
		return -1;
	}
}

function printProducts(products)
{
	for(var i=0;i<products.length;i++)
	{  
		console.log("Name : "+ products[i].name +", Calories : " + products[i].calories + ", Color : " +
			products[i].color + ", Sold : " + products[i].sold);
	}
}

function compareName(colaA,colaB)
{
	if(colaA.name>colaB.name)
	{
		return 1;
	}
	else if(colaA.name===colaB.name)
	{
		return 0;
	}
	else
	{
		return -1;
	}
}

products.sort(compareSold);
console.log("Products sorted by Sold :");
printProducts(products);

products.sort(compareCalories);
console.log("Products sorted by Calories :");
printProducts(products);

products.sort(compareColor);
console.log("Products sorted by Color :");
printProducts(products);

products.sort(compareName);
console.log("Products sorted by Name :");
printProducts(products);


function makePassword(password)
{
	return function guess(passwordGuess)
	{
		return (passwordGuess===password)
	};
}

var tryGuess= makePassword("secret");
console.log("Guessing 'nope': "+tryGuess("nope"));
console.log("Gussing 'secret': "+tryGuess("secret"));

function makeCounter()
{
	var count =0;
	{
		function counter()
		{
			count=count+1;
			return count;
		}
	}
	return counter;
}

var doCount=makeCounter();
for(var i=0;i<10;i++)
{
	console.log(doCount());
}

function setTimer(doneMessage,n)
{
	setTimeout(function(){
		alert(doneMessage);},n);
}

setTimer("Hello thr",2000)


window.onload= function()
{
	var count=0;
	var message="You clicke me ";
	var div = document.getElementById("message");

	var button = document.getElementById("clickme");
	button.onclick=function()
	{
		count++;
		div.innerHTML=message+count+" Times!";
	};
};


function Dog(name,breed,weight)
{
	this.name=name;
	this.breed=breed;
	this.weight=weight;
	this.bark=function(){
		if(this.weight>25)
		{
			alert(this.name+" says woof woof!");
		}
		else
		{
			alert(this.name + " says yip");
		}
	};
}

var fido = new Dog("Fido","Mixed",38);
var fluffy = new Dog("Fluffy","Poodle",30);
var spot = new Dog("Spot","Chihuahua",10);
var dogs=[fido,fluffy,spot];

for(var i=0;i<dogs.length;i++)
{
	dogs[i].bark();
} 