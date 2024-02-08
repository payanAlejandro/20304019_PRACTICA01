const request = require('supertest');
const app = require('./api'); 
const taskRepository = require("./taskRepository");
const { title } = require('process');


// Test the /tasks GET endpoint
test('GET /tasks returns all tasks', async () => {
  const response = await request(app).get('/tasks');
  expect(response.status).toBe(200);
  expect(response.body).toHaveLength(2); 
});

// Test the /tasks:id GET BY ID endpoint
test("Get /tasks:id should return 1 task", async () => {
    const response = await request(app).get("/tasks/1");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({id:1,description:"Do something",title:"Task 1"})
})

// Test the /tasks to POST a tasks endpoint
test("POST /tasks should create a task", async () => {
    const response = await request(app).post("/tasks").send({description:'NEW CREATED TASK', title:'Test'}).set('Accept','application/json');
    expect(response.status).toBe(201);
    expect(response.body.description).toBe('NEW CREATED TASK');
});


// Test the /tasks:id to PUT a task endpoint
test("PUT /tasks:id should update a task", async()=>{
    const response = await  request(app).put("/tasks/3").send({description:'Updated Test Task'});
    expect(response.status).toBe(200);
    expect(response.body.description).toBe('Updated Test Task');
})

// Test the /tasks/:id to DELETE a task endpoint
test("Delete /tasks:id should delete a task", async()=>{
    const response = await request(app).delete("/tasks/1")
    expect(response.status).toBe(204);
})