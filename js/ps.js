//发布者
var Publisher = function(name){
	this.name = name;
	this.subscribers = [];//订阅者数组,是函数类型
};
//发布功能
Publisher.prototype.deliver = function(news){
	var publisher = this;
	this.subscribers.forEach(function(n){
		n(news);
	});
	return this;
};
//订阅功能
Function.prototype.subscribe = function(publisher){
	var sub = this;
	//some()执行函数，检验item是否等于sub，就是说有没有sub
	var alreadyExists = publisher.subscribers.some(function(item){
		return item === sub;
	});

	if(!alreadyExists){
		publisher.subscribers.push(this);
	}
	return this;

};
window.onload = function(){
	var pub = new Publisher("发布者");
	var sub = function(news){
		document.getElementById('sub').innerHTML += news +'\n';
	};

	sub.subscribe(pub);//订阅publisher
	document.getElementById('pub').onclick = function(){
		pub.deliver(document.getElementById('t').value);
	};
};