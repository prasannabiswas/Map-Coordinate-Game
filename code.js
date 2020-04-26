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

//for(var i=0;i<dogs.length;i++)
//{
//	dogs[i].bark();
//} 

function Car(make,model,year,color,passengers,convertible,mileage)
{
	this.make=make;
	this.model=model;
	this.year=year;
	this.color=color;
	this.passengers=passengers;
	this.convertible=convertible;
	this.mileage=mileage;
	this.started=false;
	this.start=function(){
		this.started= true;
	};
	this.stop=function(){
		return false;
	};
	this.drive=function(){
		if(this.started){
			console.log(this.make+" "+this.model+" "+this.year+" "+this.color+" "+this.mileage+" Started");
		}
		else{
			console.log(this.make+" "+this.model+" "+this.year+" "+this.color+" "+this.mileage+" Started");
		}
	};
}

var chevy=new Car("Chevy","Bell Air",1957,"red",2,false,1021);
var cadi=new Car("GM","Cadillac",1955,"tan",5,false,12892);
var fiat=new Car("Fiat","500",1957,"Medium Blue",2,false,88000);
var cars=[chevy,cadi,fiat];


for(var i=0;i<cars.length;i++)
{
	cars[i].start();
	cars[i].drive();
	cars[i].stop();
}

function Dog(name,breed,weight){
	this.name=name;
	this.breed=breed;
	this.weight=weight;
}
 
var fido=new Dog("Fido","Mixed",38);
var fluffy= new Dog("Fluffy","Poodle",30);
var spot= new Dog("Spot","Chihuahua",10);
var barnarby=new Dog("Barnaby","Basset Hound",55);
spot.bark=function(){
	console.log(this.name+" says Woof!");
};

var dogs=[fido,fluffy,spot];

Dog.prototype.species="Canine";

Dog.prototype.bark=function(){
	if(this.weight>25){
		console.log(this.name+" syas WOOF!");
	}
	else{
		console.log(this.name+" says YIP!");
	}
};

Dog.prototype.run=function(){
	console.log("Run!");
};

Dog.prototype.wag=function(){
	console.log("Wag!");
};

Dog.prototype.sit=function(){
	console.log(this.name+" is sitting.");
};


fido.bark();
fido.run();
fido.wag();
fido.sit();

fluffy.bark();
fluffy.run();
fluffy.wag();
fluffy.sit();

spot.bark();
spot.run();
spot.wag();
spot.sit(); 

barnarby.bark();
barnarby.run();
barnarby.wag();
barnarby.sit(); 

function ShowDog(name,breed,weight,handler){
	Dog.call(name,breed,weight);
	this.handler=handler;
}


ShowDog.prototype=new Dog();

ShowDog.prototype.league="Webville";

ShowDog.prototype.stack=function(){
	console.log("Stack");
};

ShowDog.prototype.bait=function(){
	console.log("Bait");
};

ShowDog.prototype.gait=function(kind){
	console.log(kind+"ing");
};

ShowDog.prototype.groom=function(){
	console.log("Groom");
};

var scotty=new ShowDog("Scotty","Scottish Terrier",15,"Cookie");

scotty.stack();
scotty.bark();
scotty.groom();
console.log(scotty.league);
console.log(scotty.species);

var fido = new Dog("Fido", "Mixed", 38);
if (fido instanceof Dog) {
console.log("Fido is a Dog");
}
if (fido instanceof ShowDog) {
console.log("Fido is a ShowDog");
}
var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
if (scotty instanceof Dog) {
console.log("Scotty is a Dog");
}
if (scotty instanceof ShowDog) {
console.log("Scotty is a ShowDog");
}
