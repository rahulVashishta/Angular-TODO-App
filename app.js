	var app = angular.module("todoApp",[]);

	app.controller("TodoCtrl",TodoCtrl);
	
	function TodoCtrl(){
		this.editMode = false;
		this.todos = [
		"Learn Angular1",
		"Try out exercise",
		"do something"
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





 


	