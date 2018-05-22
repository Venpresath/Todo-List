'use strict';
{
    function TodoController() {
        const vm = this;
        vm.todoList = [
            { task: "Walk lizard", className: "" },
            { task: "Feed neighbor to lizard", className: "completed" },
            { task: "Buy aspririn", className: "" },
            { task: "Summon Santa", className: "" },
            { task: "Forcefeed aspirin to Santa", className: "" }
        ];

        vm.addComplete = function (i) {
            let ac = vm.todoList[i];
            ac.className = "completed";
            vm.todoList[i] = ac;
        }
        vm.addTask = function (thingName) {
            let task = {
                task: thingName,
                className: ""
            }
            vm.todoList.push(task);
            document.querySelector("#addTask").value = "";
        }
        vm.removeTask = function (i) {
            vm.todoList.splice(i, 1);
        }
    }

    angular
        .module("todoApp")
        .controller("TodoController", TodoController);
};