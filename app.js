	var app = angular.module("todoApp",[]);

	app.controller("TodoCtrl",TodoCtrl);
	
	function TodoCtrl(){
		this.editMode = false;
		this.todos = [
		"Learn AngularJS",
		"Try out exercise",
		"do some more stuff"
		];

		this.addNewTodo = function (){
			this.todos.push(this.newTodo);
			this.newTodo ="";
		}

		this.triggeredEditMode = function(){
		this.editMode = !this.editMode;
		}

		this.deleteTodo = function(index){
			this.todos.splice(index,1);

		}


	}





 


	
