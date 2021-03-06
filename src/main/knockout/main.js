// Assemble MVC and start application
var storage = new todo.store.InMemoryStorage();
var domView = new todo.view.ko.AppViewModel();
var model = new todo.model.Tasks(storage);
var widget = new todo.widget.AppWidget(domView);
var app = new todo.controller.AppController(model, widget);
app.start();